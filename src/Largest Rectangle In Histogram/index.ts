class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export function largestRectangleArea(heights: number[]): number {
    const stack = new Stack<{ num: number; ind: number }>();
    const mappedHeights = heights.map((num, ind) => ({ num, ind }));
    let maxWidth = 0;
    for (const height of [
        ...mappedHeights,
        { num: 0, ind: mappedHeights.length },
    ]) {
        while (stack.peek() && stack.peek()!.num > height.num) {
            const item = stack.pop()!;
            const width = stack.isEmpty()
                ? height.ind
                : height.ind - stack.peek()!.ind - 1;

            maxWidth = Math.max(maxWidth, item.num * width);
        }
        stack.push(height);
    }

    return maxWidth;
}

console.log("result: ", largestRectangleArea([3, 1, 1, 1, 1, 1, 1, 1]));
