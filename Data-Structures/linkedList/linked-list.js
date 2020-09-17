'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;

  }

  toString() {
    const allNodes = [];
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      allNodes[i] = currentNode.value;
      i++;
      currentNode = currentNode.next;
    }
    let result = allNodes.map(node => {
      return `${node} ->`;
    })
    return `${result} Null`;
  }


}

module.exports = { Node, LinkedList };
