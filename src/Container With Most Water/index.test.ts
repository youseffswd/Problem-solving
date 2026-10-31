import { maxArea } from "./index";
import { describe, expect, it } from "vitest";

describe("maxArea", () => {
  it("heights = [1, 8, 6, 2, 5, 4, 8, 3, 7] should return 49", () => {
    const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(heights);
    expect(result).toBe(49);
  });
  
  it("heights = [1, 1] should return 1", () => {
    const heights = [1, 1];
    const result = maxArea(heights);
    expect(result).toBe(1);
  });
  
  it("heights = [4, 3, 2, 1, 4] should return 16", () => {
    const heights = [4, 3, 2, 1, 4];
    const result = maxArea(heights);
    expect(result).toBe(16);
  });
  
  it("heights = [1, 2, 1] should return 2", () => {
    const heights = [1, 2, 1];
    const result = maxArea(heights);
    expect(result).toBe(2);
  });
  it("heights = [1, 2, 4, 3] should return 4", () => {
    const heights = [1, 2, 4, 3];
    const result = maxArea(heights);
    expect(result).toBe(4);
  });
  it("heigts = [] should return 0", () => {
    const heights: number[] = [];
    const result = maxArea(heights);
    expect(result).toBe(0);
  });
});
















