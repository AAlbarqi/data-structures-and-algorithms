'use strict';

const { Node, LinkedList } = require('./linked-list.js');

describe('LinkedList class test', () => {
    it('Can successfully instantiate an empty linked list', () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    });
    it('Can insert into the linked list', () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head).toBeInstanceOf(Node);
        expect(ll.head.value).toBe('a');
    });
    it('Can insert multiple nodes into the linked list', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.head.value).toBe('c');
        expect(ll.head.next.value).toBe('b');
        expect(ll.head.next.next.value).toBe('a');
    });
    it('Will return true when finding a value within the linked list that exists', () => {
        const ll = new LinkedList();
        ll.insert('a');
        const test = ll.includes('a');
        expect(test).toBeTruthy();
      });
      it('Will return false when searching for a value in the linked list that does not exist', () => {
        const ll = new LinkedList();
        ll.insert('a');
        const test = ll.includes('c');
        expect(test).toBeFalsy();
      });
      it('Can return a collection of all the values that exist in the linked list', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        const collection = ll.toString();
        console.log(collection)
        expect(collection).toBeDefined();
      });
});