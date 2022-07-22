use crate::doc::Document;
use crate::node::{DocNode, EventId, Text};

#[derive(Debug)]
pub enum Action {
    Add(AddAction),
    Delete(DeleteAction),
}

impl Action {
    pub fn id(&self) -> &EventId{
        match self{
            Action::Add(action) => action.id(),
            Action::Delete(action) => action.id(),
        }
    }
    pub fn pre_id(&self) -> &EventId{
        match self{
            Action::Add(action) => action.pre_id(),
            Action::Delete(action) => action.pre_id(),
        }
    }

    pub fn from_builder(action_builder: ActionBuilder, doc: &mut Document) -> Self{
        let pre_id = doc.get_pre_id(action_builder.position);
        let id = doc.create_id();
        match action_builder.action.as_str(){
            "ADD" => Action::Add(AddAction{
                pre_id,
                id,
                value: action_builder.char,
            }),
            "DELETE" => Action::Delete(DeleteAction{
                pre_id,
                id,
                value: action_builder.char,
            }),
            _ => panic!("Unknown action type"),
        }
    }

    pub fn execute(&self, doc: &mut Document){
        match self{
            Action::Add(action) => action.execute(doc),
            Action::Delete(action) => action.execute(doc),
        }
    }
}

pub trait DocOperation{
    fn pre_id(&self) -> &EventId;
    fn id(&self) -> &EventId;
    fn value(&self) -> &String;
    fn execute(&self, doc: &mut Document);
}

#[derive(Debug)]
pub struct AddAction{
    pre_id: EventId,
    id: EventId,
    value: String,
}

#[derive(Debug)]
pub struct DeleteAction{
    pre_id: EventId,
    id: EventId,
    value: String,
}

impl DocOperation for AddAction{
    fn pre_id(&self) -> &EventId{
        &self.pre_id
    }
    fn id(&self) -> &EventId{
        &self.id
    }
    fn value(&self) -> &String{
        &self.value
    }
    fn execute(&self, doc: &mut Document){
        let pre_node = doc.get_node_by_id_mut(&self.pre_id).unwrap();
        // TODO optimize clone
        let text = Text::new(self.pre_id.clone(), self.id.clone(), self.value.clone());
        let new_node = DocNode::new(text);
        pre_node.add_node(new_node);
    }
}

impl DocOperation for DeleteAction{
    fn pre_id(&self) -> &EventId{
        &self.pre_id
    }
    fn id(&self) -> &EventId{
        &self.id
    }
    fn value(&self) -> &String{
        &self.value
    }
    fn execute(&self, doc: &mut Document){
        let pre_node = doc.get_node_by_id_mut(&self.pre_id).unwrap();
        pre_node.text.delete();
    }
}

pub struct ActionBuilder{
    position: isize,
    action: String,
    char: String,
}

impl ActionBuilder{
    pub fn new(position: isize, action: String, char: String) -> Self{
        ActionBuilder{
            position,
            action,
            char,
        }
    }
}