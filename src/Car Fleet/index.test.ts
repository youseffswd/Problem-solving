import { describe, it, expect } from 'vitest';
import { carFleet } from './index';

describe('carFleet', () => {
  it('should return the number of car fleets that will arrive at the destination', () => {
    const target = 12;
    const position = [10, 8, 0, 5, 3];
    const speed = [2, 4, 1, 1, 3];
    const expected = 3;
    expect(carFleet(target, position, speed)).toEqual(expected);
  });

  it('should handle a single car', () => {
    const target = 10;
    const position = [5];
    const speed = [2];
    const expected = 1;
    expect(carFleet(target, position, speed)).toEqual(expected);
  });

  it('should handle cars that never meet', () => {
    const target = 10;
    const position = [0, 2, 4];
    const speed = [1, 1, 1];
    const expected = 3;
    expect(carFleet(target, position, speed)).toEqual(expected);
  });

  it('should handle cars that meet and form fleets', () => {
    const target = 10;
    const position = [0, 4, 2];
    const speed = [2, 1, 3];
    const expected = 1;
    expect(carFleet(target, position, speed)).toEqual(expected);
  });

  it("should handle empty array",() => {
    const target = 10;
    const position:number[] = [];
    const speed:number[] = [];
    const expected = 0;
    expect(carFleet(target, position, speed)).toEqual(expected);
  })
});







