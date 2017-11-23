/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

 */

function Queue(capacity) {
  this._storage = {};
  this._capacity = capacity;
  this._size = 0;
  this._last = 0;
  this._first = 0
}

Queue.prototype.enqueue = function(value) {
  //if adding the value doesn't exceed capacity
  if(this._size < this._capacity) {
    //add it
    this._storage[this._last] = value;
    //increment the size and last;
    this._last++
    //return the size
    return ++this._size;
  }
  //return
  return 'Max capacity already reached. Remove element before adding a new one.'
};
// Time complexity: constant O(1)

Queue.prototype.dequeue = function() {
  //get the first item in the Queue
  let first = this._storage[this._first];
  // remove the first item
  delete this._storage[this._first];
  // decrement the size
  this._size--
  // increment the first item
  this._first++
  // return the item
  return first;

};
// Time complexity: constant O(1)

Queue.prototype.peek = function() {
  // return the first item
  return this._storage[this._first];
};
// Time complexity: constant O(1)


Queue.prototype.count = function() {
  // return the size
  return this._size;
};
// Time complexity: constant O(1)

Queue.prototype.contains = function(val) {
  for (let item in this._storage) {
    if (val === this._storage[item]) {
      return true;
    }
  }
  return false;
}
// Time complexity: linear O(n)

Queue.prototype.until = function (val) {
  let count = 1;
  for (let i = this._first; i <= this._last; i++) {
    if (this._storage[i] === val) {
      return count;
    } else {
      count++;
    }
  }
  return 'The item is not in the queue.'
}

//-------------TESTS-------------

var assert = function (actual, expected) {
  if (actual === expected) {
    return console.log('PASSED')
  }
  return console.log(`Expected ${actual} to be ${expected}`);
}

var line = new Queue(3);
assert(line.enqueue('Ringo'), 1);
assert(line.enqueue('Paul'), 2);
assert(line.enqueue('George'), 3);
assert(line.enqueue('John'), 'Max capacity already reached. Remove element before adding a new one.');
assert(line.count(), 3);
assert(line.dequeue(), 'Ringo');
assert(line.count(), 2);
assert(line.peek(), 'Paul');
assert(line.dequeue(), 'Paul');
assert(line.peek(), 'George');
assert(line.enqueue('John'), 2);
assert(line.contains('John'), true);
assert(line.contains('Ringo'), false);
assert(line.until('John'), 2);
assert(line.until('George'), 1);
assert(line.until('Ringo'), 'The item is not in the queue.');

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
