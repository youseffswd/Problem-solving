import { describe, it, expect, beforeEach } from "vitest";
import { isValidSudoku } from ".";

describe("sudoku is valid", () => {
    let sudoku: string[][];
    beforeEach(() => {
        sudoku = [
            ["1", "2", ".", ".", "3", ".", ".", ".", "."],
            ["4", ".", ".", "5", ".", ".", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", ".", "3"],
            ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
            [".", ".", ".", "8", ".", "3", ".", ".", "5"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", ".", ".", ".", ".", ".", "2", ".", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "8"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ]; // this is a valid sudoku
    });
    it("should each row must contain the digits 1-9 without duplicates.", () => {
        sudoku[0][8] = "3";
        expect(isValidSudoku(sudoku)).toBe(false);
    });
    it("should Each column must contain the digits 1-9 without duplicates.", () => {
        sudoku[2][0] = "1";
        expect(isValidSudoku(sudoku)).toBe(false);
    });
    it("should Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.", () => {
        sudoku[0][2] = "1";
        expect(isValidSudoku(sudoku)).toBe(false);
    });
    it("should take a valid sudoku", () => {
        expect(isValidSudoku(sudoku)).toBe(true);
    });
});
