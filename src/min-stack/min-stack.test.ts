import { it, describe, expect, beforeEach } from "vitest";
import { MinStack } from "./min-stack";

describe("min stack", () => {
  let minStack: MinStack;
  beforeEach(() => {
    minStack = new MinStack()
  })
  
    it("'push' should push element to the top of stack",() => {
      minStack.push(5);
      expect(minStack.head).not.toBeNull()
      expect(minStack.head?.value).toBe(5)
      minStack.push(10);
      expect(minStack.head).not.toBeNull()
      expect(minStack.head?.value).toBe(10)
    })
    it("'pop' should return delete and return the last added element", ()  => {
      minStack.push(5)
      minStack.push(6)
      minStack.push(7)
      minStack.pop()
      expect(minStack.head?.value).toBe(6)
      minStack.pop()
      expect(minStack.head?.value).toBe(5)
      minStack.pop()
      expect(minStack.head).toBeNull()
    })
  it("'top' should return the top of the stack",() => {
    minStack.push(42)
    expect(minStack.top()).toBe(42)
    minStack.push(1)
    expect(minStack.top()).toBe(1)
    minStack.pop()
    expect(minStack.top()).toBe(42)
  })
  it("'getMin' should return the smallest element in the stack",() => {
    minStack.push(100)
    expect(minStack.getMin()).toBe(100)
    minStack.push(5)
    expect(minStack.getMin()).toBe(5)
    minStack.push(10)
    expect(minStack.getMin()).toBe(5)
    minStack.push(1)
    expect(minStack.getMin()).toBe(1)
  })
});
