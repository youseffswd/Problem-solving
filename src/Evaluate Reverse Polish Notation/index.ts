




export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  
  for(const token of tokens){
    if(!isNaN(Number(token))){
      stack.push(Number(token))
    }else{
      const x = stack.pop()!;
      const y = stack.pop()!;
      switch(token){
        case "+":
          stack.push(y + x);
          break;
        case "-":
          stack.push(y - x)
          break;
        case "*":
          stack.push(x * y);
          break;
        case "/":
          stack.push(Math.trunc(y / x));
          break;
      }
    }
  }
  return stack[0];
}








