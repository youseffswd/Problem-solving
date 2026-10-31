import { dailyTemperatures } from "./index";
import { describe, expect, it } from "vitest";
describe("dailyTemperatures", () => {
  describe("should return the number of days until a warmer temperature for each day", () => {
    it("input: [73, 74, 75, 71, 69, 72, 76, 73] => output: [1, 1, 4, 2, 1, 1, 0, 0]", () => {
      const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
      const expected = [1, 1, 4, 2, 1, 1, 0, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });
    it("input: [30, 40, 50, 60] => output: [1, 1, 1, 0]", () => {
      const temperatures = [30, 40, 50, 60];
      const expected = [1, 1, 1, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });
    it("input: [30, 60, 90] => output: [1, 1, 0]", () => {
      const temperatures = [30, 60, 90];
      const expected = [1, 1, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });
    it("input: [90, 80, 70, 60] => output: [0, 0, 0, 0]", () => {
      const temperatures = [90, 80, 70, 60];
      const expected = [0, 0, 0, 0];
      expect(dailyTemperatures(temperatures)).toEqual(expected);
    });
  });

  it("should handle negative temperatures", () => {
    const temperatures = [-10, -5, 0, 5, 10];
    const expected = [1, 1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  it("should handle a mix of positive and negative temperatures", () => {
    const temperatures = [-5, 0, -3, 2, -1];
    const expected = [1, 2, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });
  it("should handle a large input array", () => {
    const temperatures = Array.from({ length: 10000 }, (_, i) => i % 100);
    const expected = Array.from({ length: 10000 }, (_, i) => (i % 100 === 99 ? 0 : 1));
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  it("should return an array of zeros if there are no warmer temperatures", () => {
    const temperatures = [80, 79, 78, 77];
    const expected = [0, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  it("should handle an empty input array", () => {
    const temperatures: number[] = [];
    const expected: number[] = [];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  it("should handle a single temperature", () => {
    const temperatures = [70];
    const expected = [0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });

  it("should handle multiple days with the same temperature", () => {
    const temperatures = [70, 70, 70, 70];
    const expected = [0, 0, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(expected);
  });
});