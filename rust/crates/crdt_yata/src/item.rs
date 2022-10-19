use crate::id::ID;

#[derive(Debug, Clone)]
pub struct Item{
  pub id: ID,
  pub origin_left: Option<ID>,
  pub origin_right: Option<ID>,
  left: Option<ID>,
  right: Option<ID>,
  pub content: Option<String>,
  pub deleted: bool,
  len: usize
}

impl Item {
    pub fn new(id: ID, origin_left: Option<ID>, origin_right: Option<ID>, content: Option<String>)->Self{
      let len = if let Some(s) = &content{s.len()}else{0};
      Self { id, origin_left , origin_right , left: None , right: None, content, deleted: false, len }
    }

    pub fn delete(&mut self){
      self.deleted = true;
      self.content = None;
    }

    pub fn origin_len(&self)->usize{self.len}

    pub fn len(&self) ->usize {
      if let Some(s) = &self.content{s.len()}else{0}
    }
}