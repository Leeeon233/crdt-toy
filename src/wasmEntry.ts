import init, { sum_of_squares } from '../wasm_dist/wasm';

export { init };
export function sumOfSquares(...arr: number[]) {
  return sum_of_squares(new Int32Array(arr));
}
