import { Sorter } from "./Sorter";

class ListNode {
  next: ListNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  size: number = 0;

  get length(): number {
    return this.size;
  }

  print(): void {
    let temp: ListNode | null = this.head;
    console.log("{");
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log("}");
  }

  addLast(val: number): void {
    if (this.tail != null) {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
      this.size++;
    } else {
      this.head = new ListNode(val);
      this.tail = this.head;
      this.size = 1;
    }
  }

  removeLast(): void {
    let temp: ListNode | null = this.head;
    while (temp != null && temp.next != this.tail) {
      temp = temp.next;
    }

    if (temp != null) {
      temp.next = null;
      this.tail = temp;
    }

    this.size--;
  }

  compare(position: number, position2: number | undefined): boolean {
    let temp: ListNode | null = this.head;
    let i = 0;
    while (i < position && temp != null) {
      temp = temp.next;
      i++;
    }
    let firstNode: ListNode | null = null;
    if (temp != null) {
      firstNode = temp;
    }
    let secondNode: ListNode | null = null;
    if (temp != null && temp.next != null) {
      secondNode = temp.next;
    }

    if (firstNode === null || secondNode === null) {
      return false;
    }

    return firstNode.data > secondNode.data;
  }

  swap(position: number, position2: number | undefined): void {
    if (this.head === null || this.head === this.tail) return;
    let temp: ListNode | null = this.head;
    let nodeBeforeFirst: ListNode | null = null;
    let i = 0;
    while (i < position && temp != null) {
      temp = temp.next;
      i++;
      if (nodeBeforeFirst === null) {
        nodeBeforeFirst = this.head;
      } else {
        nodeBeforeFirst = nodeBeforeFirst.next;
      }
    }

    let firstNode: ListNode | null = temp;
    let secondNode: ListNode | null = null;
    if (temp != null) {
      secondNode = temp.next;
    }

    if (secondNode != null && nodeBeforeFirst != null && firstNode != null) {
      // head and tail not in these nodes to be swapped
      this.swapHelper(firstNode, secondNode, nodeBeforeFirst);
    }

    if (nodeBeforeFirst === null) {
      // 1st node to be swapped is head
      let temp = new ListNode(-1);
      this.swapHelper(firstNode, secondNode, temp);
      this.head = temp.next;
    }
  }

  swapHelper(
    firstNode: ListNode | null,
    secondNode: ListNode | null,
    nodeBeforeFirst: ListNode | null
  ) {
    if (secondNode != null && nodeBeforeFirst != null && firstNode != null) {
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      nodeBeforeFirst.next = secondNode;
    }
  }
}
