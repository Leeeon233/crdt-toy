extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use crdt_toy::{Document as Doc, ActionBuilder};
use serde::{Deserialize, Serialize};


#[wasm_bindgen]
pub struct Document(Doc);

#[wasm_bindgen]
// #[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Action(ActionBuilder);

#[wasm_bindgen]
impl Action {
    #[wasm_bindgen(constructor)]
    pub fn new(position: usize, action: String, char: String) -> Action {
        Action(ActionBuilder::new(position, action, char))
    }
}

#[wasm_bindgen]
impl Document {
    #[wasm_bindgen(constructor)]
    pub fn new(client_id: usize) -> Self {
        Document(Doc::new(client_id))
    }

    pub fn add_action(&mut self, action: Action) {
        self.0.add_action_builder(action.0);
    }

    pub fn content(&self) -> String {
        self.0.content()
    }

    pub fn merge(&mut self, other: &Document) {
        self.0.merge(&other.0);
    }
}


#[wasm_bindgen]
pub fn sum_of_squares(input: &[i32]) -> i32 {
    input.iter().map(|x| x * x).sum()
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
