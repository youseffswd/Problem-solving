import { largestRectangleArea } from ".";
import {expect,it, describe} from "vitest";

describe("largestRectangleArea", () => {
  it("should return the largest rectangle area in the histogram", () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    expect(largestRectangleArea([2, 4])).toBe(4);
    expect(largestRectangleArea([0, 9])).toBe(9);
    expect(largestRectangleArea([2, 1, 2])).toBe(3);
    expect(largestRectangleArea([1])).toBe(1);
    expect(largestRectangleArea([1, 1])).toBe(2);
    expect(largestRectangleArea([4, 2, 0, 3, 2, 5])).toBe(6);
    expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
    expect(largestRectangleArea([1, 2, 3, 4, 5, 6])).toBe(12);
  });
});