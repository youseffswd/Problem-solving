class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }
}


type Temp = {
  ind:number;
  temp: number;
}
export function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = Array.from({length:temperatures.length},_ => 0);
  const temps: Temp[] = temperatures.map((temp,index) => ({ind:index,temp}))
  const stack = new Stack<Temp>()
  for(const current of temps){
    let top = stack.peek();
    while(top && top.temp < current.temp){
      const poped = stack.pop()!;
      result[poped.ind] = current.ind - poped.ind;
      top = stack.peek()
    }
    stack.push(current)
  }
  return result
}