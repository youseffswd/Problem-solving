export function longestConsecutive(nums: number[]): number {
    const numsSet: Set<number> = new Set(nums);
    let longest = 0;
    for (const num of numsSet) {
        if (numsSet.has(num - 1)) continue;
        let counter = 1;
        let last = num
        
        while (numsSet.has(++last)) {
            counter++;
        }
        longest = Math.max(counter, longest);
    }
    return longest;
}
