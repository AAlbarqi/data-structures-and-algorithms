'use strict';

/**
 * @param value, the value of the node
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * @param push add to the stack
 * @param Pop remove from the stack
 * @param peek gets the last element in the stack
 * @param isEmpty check if the stack is empty
 */
class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let top;
    if (this.top.next) {
      top = this.top;
      this.top = this.top.next;
    } else if (this.top) {
      top = this.top;
      this.top = null;
    } else {
      return null;
    }
    return top.value;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }
    return null;
  }

  isEmpty(){
    if(this.top){
      return false;
    }
    return true;
  }
}
/**
 * @param enqueue add to the queue
 * @param dequeue remove from the queue
 * @param peek gets the first element in the queue
 * @param isEmpty checks whether or not the queue is empty.
 */
// class Queue {
//   constructor() {
//     this.back = null;
//     this.front = null;
//   }

//   enqueue(val) {
//     const node = new Node(val);
//     node.next = this.back;
//     this.back = node;
//     if (!this.front) {
//       this.front = node;
//     }
//   }

//   dequeue() {
//     let current = this.back;
//     if (!current) {
//       return null;
//     }
//     if (!current.next) {
//       this.back = null;
//       this.front = null;
//       return current.value;
//     }

//     while (current.next && current.next.next) {
//       current = current.next;
//     }
//     const target = current.next;
//     current.next = null;
//     this.front = current;
//     return target.value;
//   }

//   peek() {
//     if (!this.front) {
//       return null;
//     }
//     if (this.front) {
//       return this.front.value;
//     }
//   }

//   isEmpty(){
//     if(this.front){
//       return false;
//     }
//     return true;
//   }
// }

class Queue {
  constructor() {
    this.back = null;
  }

  enqueue(val) {
    const node = new Node(val);
    node.next = null;
    if (!this.front) {
      this.front = node;
    }
  }

  dequeue() {
    if(!this.front){
      throw new Error('Empty Queue');
    }
    const dequeued = this.front.value;
    this.front = this.front.next;
    return dequeued;

  }

  peek() {
    if (!this.front) {
      return null;
    }
    if (this.front) {
      return this.front.value;
    }
  }

  isEmpty(){
    if(this.front){
      return false;
    }
    return true;
  }
}
module.exports = { Node, Stack, Queue };
