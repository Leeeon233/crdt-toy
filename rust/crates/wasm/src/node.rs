use std::cmp::Ordering;
use std::collections::HashMap;
use itertools::Itertools;

pub(crate) type ClientId = usize;
pub(crate) type LamportTimestamp = usize;
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct EventId(pub LamportTimestamp, pub ClientId);

impl PartialOrd<Self> for EventId {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for EventId {
    fn cmp(&self, other: &Self) -> Ordering {
        if self.0 == other.0 {
            return self.1.cmp(&other.1);
        }
        return self.0.cmp(&other.0);
    }
}

#[derive(Debug)]
pub(crate) struct Text{
    // TODO maybe unuseful?
    pub(crate) pre_id: EventId,
    pub(crate) id: EventId,
    pub(crate) text: String,
    pub(crate) is_deleted: bool,
}

impl Text{
    pub(crate) fn new(pre_id: EventId, id: EventId, text: String) -> Self{
        Text{
            pre_id,
            id,
            text,
            is_deleted: false,
        }
    }

    pub(crate) fn delete(&mut self){
        self.is_deleted = true;
    }
}

#[derive(Debug)]
pub(crate) struct DocNode{
    pub(crate) text: Text,
    pub(crate) children: HashMap<EventId, DocNode>,
}

impl DocNode {
    pub(crate) fn new(text: Text) -> Self {
        DocNode{
            text,
            children: HashMap::new(),
        }
    }

    pub(crate) fn add_node(&mut self, node: DocNode) {
        if !self.children.contains_key(&node.text.id) {
            self.children.insert(node.text.id.clone(), node);
        }
    }

    pub(crate) fn has_node(&self, id: &EventId) -> bool {
        self.children.contains_key(id)
    }

    pub(crate) fn get_pre_id_by_position(&self, position: isize) -> (Option<&DocNode>, isize){
        let mut position= position;
        if position == 0 {
            return (Some(&self), position);
        }
        for key in self.children.keys().sorted() {
            let node = self.children.get(key).unwrap();
            if node.text.is_deleted {
                position = position - 1;
            }
            let (new_node, new_p ) = node.get_pre_id_by_position(position);
            if new_node.is_some() {
                return (new_node, new_p);
            }
            position = new_p;
        }
        (None, position)
    }
}

impl ToString for DocNode {
    fn to_string(&self) -> String {
        let mut s = String::new();
        if !self.text.is_deleted {
            s.push_str(&self.text.text);
        }else{
            s.push_str("");
        }
        for key in self.children.keys().sorted() {
            s.push_str(&self.children.get(key).unwrap().to_string());
        }
        s
    }
}

mod test{
    use super::*;
    #[test]
    fn test_node_id(){
        let mut node_id = EventId(0, 0);
        assert_eq!(node_id.0, 0);
        assert_eq!(node_id.1, 0);
        node_id.0 = 1;
        node_id.1 = 1;
        assert_eq!(node_id.0, 1);
        assert_eq!(node_id.1, 1);
    }
    #[test]
    fn test_ord(){
        let node1 = EventId(0, 0);
        let node2 = EventId(0, 1);
        let node3 = EventId(1, 0);
        let node4 = EventId(1, 1);
        assert!(node1 < node2);
        assert!(node2 < node3);
        assert!(node3 < node4);
    }

    #[test]
    fn test_node(){
        let mut node = DocNode::new(Text{
            pre_id: EventId(0, 0),
            id: EventId(0, 1),
            text: "hello ".to_string(),
            is_deleted: false,
        });
        let node2 = DocNode::new(Text{
            pre_id: EventId(0, 0),
            id: EventId(0, 1),
            text: "world".to_string(),
            is_deleted: false,
        });
        let node3 = DocNode::new(Text{
            pre_id: EventId(0, 0),
            id: EventId(1, 1),
            text: " my".to_string(),
            is_deleted: false,
        });
        node.add_node(node2);
        node.add_node(node3);
        println!("{}", node.to_string());
        assert_eq!(node.to_string(), "hello world my");
    }

}