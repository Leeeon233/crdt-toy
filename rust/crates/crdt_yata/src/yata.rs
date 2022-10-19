use std::{cmp::max, collections::HashSet};

use crate::{item::Item, id::{ID, ClientID}};

/// https://bartoszsypytkowski.com/yata/
pub struct Yata{
  client: ClientID,
  items: Vec<Item>
}

impl Yata{
  pub fn new(client: ClientID)->Self{
    Self{client, items: Vec::new()}
  }
  
  fn find_position(&self, index: usize)->usize{
    let mut i = 0;
    let mut j = 0;
    while i < index {
      if !self.items[j].deleted {
        i = i + 1;
      }
      j = j + 1;
    }
    j
  }

  pub fn content(&self) -> String{
    self.items.iter().map(|i|i.content.clone().unwrap_or("".into())).collect()
  }

  pub fn insert(&mut self, index: usize, value: String){
    let i = self.find_position(index);
    let left = self.get_item(i as isize-1).and_then(|item|Some(item.id));
    let right = self.get_item(i as isize).and_then(|item|Some(item.id));
    let clock = 1 + self.last_clock(self.client);
    let item = Item::new(ID{client: self.client, clock}, left, right, Some(value));
    self.items.insert(i, item);
  }

  pub fn delete(&mut self, index: usize){
    let i = self.find_position(index);
    self.items[i].delete();
  }

  pub fn merge(&mut self, other: &mut Yata){
    let tombstones: HashSet<ID> = other.items.iter().filter(|item|item.deleted).map(|item|item.id).collect();
    self.items.iter_mut().for_each(|item|{
      if !item.deleted && tombstones.contains(&item.id){
        item.delete();
      }
    });
    let mut visited: HashSet<ID> = self.items.iter().map(|item|item.id).collect();
    let new_items:Vec<_>= other.items.iter().filter(|item|!visited.contains(&item.id)).collect();
    let mut remaining = new_items.len();

    fn is_present(visited: &HashSet<ID>, id: Option<ID>)->bool{
      id.map(|_id|visited.contains(&_id)).unwrap_or(true)
    }

    while remaining > 0{
      for item in new_items.iter(){
        let can_insert = !visited.contains(&item.id) && is_present(&visited, item.origin_left) && is_present(&visited, item.origin_right);
        if can_insert{
          self.integrate(item);
          visited.insert(item.id);
          remaining = remaining - 1;
        }
      }
    }
  }

  fn integrate(&mut self, item: &Item){
    let ID{client, clock} = item.id;
    let last = self.last_clock(client);
    if last != clock - 1 {
      panic!("missing operation")
    }else{
      let left = item.origin_left.map(|id|self.items.iter().position(|i|i.id == id).unwrap()).map(|i|i as isize).unwrap_or(-1);
      let right = item.origin_right.map(|id|self.items.iter().position(|i|i.id == id).unwrap()).unwrap_or(self.items.len()) as isize;
      let i = self.find_insert_index(item, false, left, right, left+1, left+1) as usize;
      self.items.insert(i, item.clone());
      
    }

  }

  fn find_insert_index(&self, item: &Item, scanning: bool, left: isize, right: isize, dst: isize, i: isize)->isize{
      let dst = if scanning {dst}else{i};
      if i == right {
        dst
      }else{
        let o = &self.items[i as usize];
        let oleft = o.origin_left.map(|id|self.items.iter().position(|i|i.id == id).unwrap()).map(|i|i as isize).unwrap_or(-1);
        let oright = o.origin_right.map(|id|self.items.iter().position(|i|i.id == id).unwrap()).unwrap_or(self.items.len()) as isize;
        let client1 = item.id.client;
        let client2 = o.id.client;
        if oleft < left || (oleft == left && oright == right && client1 <= client2){
          dst
        } else{
          let scanning = if oleft==left{client1<=client2}else{scanning};
          self.find_insert_index(item, scanning, left, right, dst, i+1)
        }

      }
  }

  fn get_item(&self, i: isize)->Option<&Item>{
    if i < 0 || i >= self.items.len() as isize{
      None
    }else{
      Some(&self.items[i as usize])
    }
  }

  fn last_clock(&self, client: ClientID)->u32{
    fn rec(items: &[Item], client: ClientID, clock: u32, i: usize)->u32{
      if i >= items.len(){
        clock
      }else{
        let ID{client: _client, clock:_clock} = items[i].id;
        if client == _client{
          rec(items, client, max(clock, _clock), i+1)
        }else{
          rec(items, client, clock, i+1)
        }
      }
    }
    rec(&self.items, client, 0, 0)
  }
}

mod test{
  #[test]
  fn test_yata(){
    use super::*;
    let mut a = Yata::new(1);
    let mut b = Yata::new(2);
    a.insert(0, "H".into());
    a.insert(1, "l".into());
    a.insert(1, "e".into());
    b.merge(&mut a);
    b.insert(3, "o".into());
    a.insert(3, "l".into());
    a.delete(2);
    b.merge(&mut a);
    a.merge(&mut b);
    println!("a {:?}", a.content());
    println!("b {:?}", b.content());
    assert_eq!(a.content(), b.content());
  }
}