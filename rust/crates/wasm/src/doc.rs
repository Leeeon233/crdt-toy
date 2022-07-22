use itertools::Itertools;
use crate::action::{Action, ActionBuilder};
use crate::manager::LamportManager;
use crate::node::{ClientId, DocNode, EventId, Text};

pub struct Document{
    root: DocNode,
    lamport_manager: LamportManager,
    client_id: ClientId,
    actions: Vec<Action>
}

impl Document{
    pub fn new(client_id: ClientId) -> Self{
        // todo!("init root node");
        let root_text = Text::new(EventId(0,client_id),
            EventId(0,client_id),
            "".to_string());
        Document{
            root: DocNode::new(root_text),
            lamport_manager: LamportManager::new(),
            client_id,
            actions: Vec::new(),
        }
    }

    pub fn add_actions(&mut self, actions: Vec<ActionBuilder>){
        actions.into_iter().for_each(|action| {
            let action = Action::from_builder(action, self);
            action.execute(self);
            self.lamport_manager.update(action.id().0);
            self.actions.push(action);
            println!("{}", self.content());
        });
    }

    pub fn content(&self) -> String{
        self.root.to_string()
    }

    pub(crate) fn create_id(&mut self) -> EventId{
        let id = self.lamport_manager.next();
        EventId(id, self.client_id)
    }

    pub(crate) fn get_pre_id(&self, position: isize) -> EventId{
        let mut position= position;
        let mut q = vec![&self.root];
        while let Some(node) = q.pop() {
            if position == 0 {
                return node.text.id.clone();
            }
            if node.text.is_deleted{
                position += 1;
            }else{
                position -= 1;
            }
            for key in node.children.keys().sorted() {
                q.push(node.children.get(key).unwrap());
            }
        }
        EventId(0, self.client_id)
    }

    pub(crate) fn get_node_by_id_mut(&mut self, id: &EventId) -> Option<&mut DocNode>{
        if self.root.text.id == *id {
            Some(&mut self.root)
        } else {
            // iter
            let mut q = vec![&mut self.root];
            while let Some(node) = q.pop() {
                if node.text.id == *id {
                    return Some(node);
                }
                if node.children.contains_key(&id) {
                    return Some(node.children.get_mut(&id).unwrap());
                }
                for child in node.children.values_mut() {
                    q.push(child);
                }
            }
            None
        }
    }

}

mod test{
    use super::*;
    #[test]
    fn test_create_id(){
        let actions = vec![
            ActionBuilder::new(0, "ADD".to_string(), "1".to_string()),
            ActionBuilder::new(1, "ADD".to_string(), "2".to_string()),
            ActionBuilder::new(2, "ADD".to_string(), "3".to_string()),

            ActionBuilder::new(0, "ADD".to_string(), "3".to_string()),
            ActionBuilder::new(1, "ADD".to_string(), "2".to_string()),
            ActionBuilder::new(5, "DELETE".to_string(), "3".to_string()),
            ActionBuilder::new(4, "DELETE".to_string(), "2".to_string()),
            ActionBuilder::new(3, "ADD".to_string(), "6".to_string()),
            ActionBuilder::new(4, "ADD".to_string(), "6".to_string()),
            ActionBuilder::new(5, "ADD".to_string(), "6".to_string()),
        ];
        let mut doc = Document::new(0);
        doc.add_actions(actions);
        println!("{}", doc.content());
        assert_eq!(doc.content(), "321666");
    }
}
