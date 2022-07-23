import init, { sum_of_squares, Document, Action } from '../wasm_dist/wasm';

export { init, Document, Action };
export function sumOfSquares(...arr: number[]) {
  return sum_of_squares(new Int32Array(arr));
}
