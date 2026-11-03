class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}



function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head
  while(fast && fast.next){
    slow = slow!.next;
    fast = fast.next.next;
    if(slow === fast) return true
  }
  return false
}
// function hasCycle(head: ListNode | null): boolean {
//   const visited = new Set();
//   let p = head;
//   while(p){
//     if(visited.has(p)) return true;
//     visited.add(p)
//     p = p.next;
//   }
//   return false
// }

const head = new ListNode(1);
let p = new ListNode(2);
head.next  = p;
p.next = new ListNode(3)
console.log(hasCycle(head)) 



