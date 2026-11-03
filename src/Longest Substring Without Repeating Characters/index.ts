











export function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let start = 0;
    let end = 0;
    let count = 0;
    while (end < s.length) {
        const char = s[end];
        if (set.has(char)) {
            count = Math.max(count, set.size);
            set.delete(s[start++]);
        } else {
            set.add(char);
            end++;
            count = Math.max(count, set.size);
        }
    }
    return count;
}

console.log(lengthOfLongestSubstring("abc"));
