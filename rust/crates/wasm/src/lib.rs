extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use crdt_toy::{Document, Action, ActionBuilder};




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
