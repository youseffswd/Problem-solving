import { describe, expect, it } from "vitest";
import { evalRPN } from ".";

describe("evalRPN", () => {
    it("should add two numbers", () => {
        expect(evalRPN(["2", "3", "+"])).toBe(5);
    });

    it("should subtract two numbers", () => {
        expect(evalRPN(["5", "2", "-"])).toBe(3);
    });

    it("should multiply two numbers", () => {
        expect(evalRPN(["4", "3", "*"])).toBe(12);
    });

    it("should divide two numbers", () => {
        expect(evalRPN(["10", "2", "/"])).toBe(5);
    });

    it("should evaluate multiple operations", () => {
        expect(evalRPN(["1", "2", "+", "3", "*", "4", "-"])).toBe(5);
    });

    it("should respect operand order for subtraction", () => {
        expect(evalRPN(["10", "3", "-"])).toBe(7);
    });

    it("should respect operand order for division", () => {
        expect(evalRPN(["10", "2", "/"])).toBe(5);
    });

    it("should evaluate a more complex expression", () => {
        // (2 + 3) * 4 = 20
        expect(evalRPN(["2", "3", "+", "4", "*"])).toBe(20);
    });
});
