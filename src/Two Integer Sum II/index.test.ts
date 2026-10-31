import {describe,it, expect} from "vitest"
import { twoSum } from "./index"




describe("twoSum", () => {
  it("numbers = [2, 7, 11, 15], target = 9, expected = [1, 2]", () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(numbers, target);
    expect(result).toEqual([1, 2]);
  });
  it("numbers = [2, 3, 4], target = 6, expected = [1, 3]", () => {
    const numbers = [2, 3, 4];
    const target = 6;
    const result = twoSum(numbers, target);
    expect(result).toEqual([1, 3]);
  });
  it("numbers = [-1, 0], target = -1, expected = [1, 2]", () => {
    const numbers = [-1, 0];
    const target = -1;
    const result = twoSum(numbers, target);
    expect(result).toEqual([1, 2]);
  });
});









