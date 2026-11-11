export function minEatingSpeed(piles: number[], h: number): number {
    const maxPile = Math.max(...piles);
    let l = 1;
    let r = maxPile;
    function time(l: number, r: number): number {
        if (l === r) return l;
        let k = Math.floor((l + r) / 2);
        let hr = 0;
        for (const pile of piles) {
            hr += Math.ceil(pile / k);
        }
        if (hr > h) {
            return time(k + 1, r);
        } else {
            return time(l, k);
        }
    }
    return time(l, r);
}

// test cases
// console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // Output: 23
