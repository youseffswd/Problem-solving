// this file is for test cases 

import { describe, expect, it } from "vitest";
import { longestConsecutive } from ".";

function shuffle(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


describe("longest consecutive sequence",() => {
  it("[2,20,4,10,3,4,5] expected 4",() => {
    expect(longestConsecutive([2,20,4,10,3,4,5])).toBe(4)
  })
  it("[0,3,2,5,4,6,1,1] expected 7",() => {
    expect(longestConsecutive([0,3,2,5,4,6,1,1])).toBe(7)
  })
  it("[1,11,12,13,14,55,15,2,3] expected 5",() => {
    expect(longestConsecutive([1,11,12,13,14,55,15,2,3])).toBe(5)
  })
  it("should handle big lists",() => {
    Array.from({ length: 10000 }, (_, i) => i + 1).forEach((_, i) => {
      const arr = shuffle(Array.from({ length: 10000 }, (_, j) => j + 1));
      expect(longestConsecutive(arr)).toBe(10000);
    })
  },60000)
})



