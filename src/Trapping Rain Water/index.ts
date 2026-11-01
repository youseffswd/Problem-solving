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

type StackItem = {
    index: number;
    height: number;
};

function trap(height: number[]): number {
    const stack = new Stack<StackItem>();
    const heights = height.map((item, ind) => ({ index: ind, height: item }));
    let totalTrappedWater = 0;
    for (const h of heights) {
        let total = 0;
        let leftH = 0;
        while (stack.peek() && h.height >= stack.peek()!.height) {
            const poped = stack.pop()!;
            if (stack.peek() && stack.peek()!.height > 0) {
                leftH = stack.peek()!.height;
                total +=
                    (h.index - stack.peek()!.index - 1) *
                    (Math.min(leftH, h.height) - poped.height);
                console.log((h.index - stack.peek()!.index - 1) *
                    (Math.min(leftH, h.height) - poped.height),h.height, leftH, poped.height);
            }
        }
        console.log("#####");
        
        totalTrappedWater += total;
        stack.push(h);
    }
    return totalTrappedWater;
}

// console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1])); // output = 9
// console.log(trap([3,2,0,3])); // output = 4
