import { threeSum } from './index';
import {describe, it, expect} from 'vitest';







describe('threeSum', () => {
  it("nums = [5, 2, -3, 1, -1]; result should be [[-3, 1, 2]]", () => {
    const nums = [5, 2, -3, 1, -1];
    const result = threeSum(nums);
    expect(result).toEqual([[-3, 1, 2]]);
  });
  it('nums = [-1, 0, 1]; result should be [[-1, 0, 1]]', () => {
    const nums = [-1, 0, 1];
    const result = threeSum(nums);
    expect(result).toEqual([[-1, 0, 1]]);
  });
  it("nums = [0, 1, 1]; result should be []", () => {
    const nums = [0, 1, 1];
    const result = threeSum(nums);
    expect(result).toEqual([]);
  });
  it('nums = [-1, 0, 1, 2, -1, -4]; result should be [[-1, -1, 2], [-1, 0, 1]]', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });
  it('nums = [0, 0, 0, 0]; result should be [[0, 0, 0]]', () => {
    const nums = [0, 0, 0, 0];
    const result = threeSum(nums);
    expect(result).toEqual([[0, 0, 0]]);
  });
});