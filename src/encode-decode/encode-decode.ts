export function encode(strs: string[]): string {
    return strs.map(s => `${s.length}#${s}`).join("");
}

export function decode(str: string): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
        const hash = str.indexOf("#", i);
        const len = parseInt(str.slice(i, hash), 10);
        result.push(str.slice(hash + 1, hash + 1 + len));
        i = hash + 1 + len;
    }
    return result;
}