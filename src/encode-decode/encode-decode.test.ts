import { it, describe, expect } from "vitest";
import { encode, decode } from "./encode-decode";

describe("encode", () => {
    it("encodes multiple strings", () => {
        expect(encode(["Hello", "World"])).toBe("5#Hello5#World");
    });

    it("handles empty strings", () => {
        expect(encode(["", "Hello"])).toBe("0#5#Hello");
        expect(encode(["Hello", ""])).toBe("5#Hello0#");
    });

    it("handles an empty array", () => {
        expect(encode([])).toBe("");
    });

    it("handles an array with a single empty string", () => {
        expect(encode([""])).toBe("0#");
    });

    it("handles multi-digit lengths", () => {
        expect(encode(["abcdefghijkl"])).toBe("12#abcdefghijkl");
    });

    it("does not escape strings containing '#'", () => {
        expect(encode(["a#b"])).toBe("3#a#b");
    });

    it("handles strings that look like an encoded value", () => {
        expect(encode(["3#abc"])).toBe("5#3#abc");
    });
});

describe("decode", () => {
    it("decodes multiple strings", () => {
        expect(decode("5#Hello5#World")).toEqual(["Hello", "World"]);
    });

    it("decodes empty strings", () => {
        expect(decode("0#5#Hello")).toEqual(["", "Hello"]);
        expect(decode("5#Hello0#")).toEqual(["Hello", ""]);
    });

    it("decodes an empty string to an empty array", () => {
        expect(decode("")).toEqual([]);
    });

    it("decodes a single empty string", () => {
        expect(decode("0#")).toEqual([""]);
    });

    it("decodes multi-digit lengths", () => {
        expect(decode("12#abcdefghijkl")).toEqual(["abcdefghijkl"]);
    });

    it("decodes strings containing '#'", () => {
        expect(decode("3#a#b")).toEqual(["a#b"]);
    });

    it("decodes strings that look like an encoded value", () => {
        expect(decode("5#3#abc")).toEqual(["3#abc"]);
    });
});

describe("round trip", () => {
    const cases: [string, string[]][] = [
        ["empty array", []],
        ["single empty string", [""]],
        ["multiple empty strings", ["", "", ""]],
        ["simple strings", ["Hello", "World"]],
        ["old delimiter", ["Hello#sp#World"]],
        ["old empty sentinel", ["#emp#"]],
        ["only hashes", ["#", "##", "###"]],
        ["only digits", ["123", "0", "42"]],
        ["digits and hash that mimic a prefix", ["3#abc", "10#xyz"]],
        ["whitespace and newlines", [" ", "\n", "\t", "a b\nc"]],
        ["extended ASCII / control chars", ["\x00", "\x1e", "\xff", "\x00\xff"]],
        ["unicode", ["héllo", "日本語", "🙂"]],
        ["long string", ["x".repeat(199)]],
        ["many strings", Array.from({ length: 99 }, (_, i) => `str${i}`)],
    ];

    it.each(cases)("preserves %s", (_name, input) => {
        expect(decode(encode(input))).toEqual(input);
    });
});