export function isValidSudoku(board: string[][]): boolean {
    for (const row of board) {
        const rowSet: Set<string> = new Set();
        for (const cell of row) {
            if (cell !== "." && rowSet.has(cell)) {
                return false;
            
            }
            rowSet.add(cell);
        }
    }
    let columnSet: Set<string> = new Set();
    let i = 0;
    let j = 0;
    while (i < 9 && j < 9) {
        let cell = board[i][j];
        if (cell !== "." && columnSet.has(cell)) {
            return false;
        
        }
        columnSet.add(cell);
        i++;
        if (i === 9) {
            i = 0;
            j++;
            columnSet.clear();
        }
    }


    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const squareSet: Set<string> = new Set();
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    const cell = board[i][j];
                    if (cell !== "." && squareSet.has(cell)) {
                        return false;
                    
                    }
                    squareSet.add(cell);
                }
            }
        }
    }
    return true;
}
