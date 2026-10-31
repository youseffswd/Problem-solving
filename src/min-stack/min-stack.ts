class LinkedNode {
    next: LinkedNode | null;
    prev: LinkedNode | null;
    value: number;
    constructor(value: number) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

export class MinStack {
    head: null | LinkedNode = null;
    min: null | LinkedNode = null;
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const node = new LinkedNode(val);
        if (!this.head) {
          this.head = node;
          this.min = new LinkedNode(val);
          return;
        }
        this.head.next = node;
        node.prev = this.head;
        this.head = node;
        if(this.min && this.min.value >= val){
          const minNode = new LinkedNode(val);
          minNode.prev = this.min;
          this.min = minNode;
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
      if(!this.head) return;
      if(this.head.value === this.min?.value){
        this.min = this.min.prev;
      }
      this.head = this.head.prev;
      if(this.head){
        this.head.next = null;
      }
    }

    /**
     * @return {number}
     */
    top(): number {
      if(this.head){
        return this.head.value;
      }
      return NaN
    }

    /**
     * @return {number}
     */
    getMin(): number {
      if(this.min){
        return this.min.value;
      }
      throw NaN
    }
}
