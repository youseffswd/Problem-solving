







class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    printList(head: ListNode | null): void {
        let p: ListNode | null = head;
        const result: number[] = [];
        let i = 0;
        while (p) {
            if(i++ > 100) {
                console.error("Infinite loop detected");
                break;
            }
            result.push(p.val);
            p = p.next;
        }
        console.log(result.join("->"));
    }
}

export function reorderList(head: ListNode | null): void {
    const stack: ListNode[] = [];
    let p = head;
    let n = 0
    while (p) {
        n++
        stack.push(p)
        p = p.next;
    }
    p = head;

    for(let i = 0; i < parseInt((n/2).toString());i++){
      const temp = p!.next;
      const popedItem = stack.pop()!;
      p!.next = popedItem
      popedItem.next = temp;
      p = temp
    }
    p!.next = null
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
reorderList(head);
head.printList(head);