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
        if client_id == 0{
            panic!("Client id must be greater than 0");
        }
        let root_text = Text::new(EventId(0,0),
            EventId(0,0),
            "".to_string());
        Document{
            root: DocNode::new(root_text),
            lamport_manager: LamportManager::new(),
            client_id,
            actions: Vec::new(),
        }
    }

    pub fn add_action_builder(&mut self, action: ActionBuilder){
        let pre_id = self.get_pre_id(action.position);
        let id = self.create_id();
        let action = Action::from_builder(action, pre_id, id);
        self.add_action(action);
    }

    pub fn add_action_builders(&mut self, actions: Vec<ActionBuilder>){
        actions.into_iter().for_each(|action| {
            self.add_action_builder(action);
        });
    }

    pub fn content(&self) -> String{
        self.root.to_string()
    }

    pub fn merge(&mut self, other: &Document){
        for action in other.actions.iter(){
            self.add_action(action.clone());
        }
    }

    pub(crate) fn create_id(&mut self) -> EventId{
        let id = self.lamport_manager.next();
        EventId(id, self.client_id)
    }

    pub(crate) fn add_action(&mut self, action: Action){
        if self.actions.contains(&action) {
            return;
        }
        action.execute(self);
        self.lamport_manager.update(action.id().0);
        self.actions.push(action);
    }

    pub(crate) fn get_pre_id(&self, position: usize) -> EventId{
        let mut position= position;
        let mut q = vec![&self.root];
        while let Some(node) = q.pop() {
            if !node.text.is_deleted {
                if position == 0 {
                    return node.text.id.clone();
                }
                position -= 1;
            }
            // no need rev()
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
        doc.add_action_builders(actions);
        assert_eq!(doc.content(), "321666");
    }

    #[test]
    fn test_del(){
        let actions = vec![
            ActionBuilder::new(0, "ADD".to_string(), "1".to_string()),
            ActionBuilder::new(1, "ADD".to_string(), "2".to_string()),
            ActionBuilder::new(2, "ADD".to_string(), "3".to_string()),

            ActionBuilder::new(2, "ADD".to_string(), "4".to_string()),
            ActionBuilder::new(3, "ADD".to_string(), "4".to_string()),
            ActionBuilder::new(2, "DELETE".to_string(), "2".to_string()),
            ActionBuilder::new(2, "DELETE".to_string(), "4".to_string()),
        ];
        let mut doc = Document::new(0);
        for action in actions {
            doc.add_action_builder(action);
            println!("{}", doc.content());
        }
        assert_eq!(doc.content(), "143");
    }

    #[test]
    fn test_merge(){
        let mut doc1 = Document::new(1);
        let mut doc2 = Document::new(2);
        doc1.add_action_builders(vec![
            ActionBuilder::new(0, "ADD".to_string(), "1".to_string()),
            ActionBuilder::new(1, "ADD".to_string(), "2".to_string()),
            ActionBuilder::new(2, "ADD".to_string(), "3".to_string()),
        ]);
        doc2.add_action_builders(vec![
            ActionBuilder::new(0, "ADD".to_string(), "4".to_string()),
            ActionBuilder::new(1, "ADD".to_string(), "5".to_string()),
            ActionBuilder::new(2, "ADD".to_string(), "6".to_string()),
        ]);
        doc1.merge(&doc2);
        assert_eq!(doc1.content(), "456123");
    }
}
