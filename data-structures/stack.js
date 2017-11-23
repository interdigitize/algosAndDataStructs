/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  this._storage = {};
  this._capacity = capacity || Infinity;
  this._size = 0;
}

Stack.prototype.push = function(val) {
  //Check if adding a value doesn't exceed capacity
  if (this._size + 1 <= this._capacity) {
    //add the value to storage
    this._storage[this._size] = val;
    //increment the size
    this._size++
    //return the size
    return this._size
  }
  return "Max capacity already reached. Remove element before adding a new one.";
};
// Time complexity: Constant

Stack.prototype.pop = function() {
  //get the last item
  let item = this._storage[this._size - 1]
  //Remove the item from storage
  delete this._storage[this._size - 1];
  //Decrement the size
  this._size--
  //return the item
  return item;
};
// Time complexity: Constant

Stack.prototype.peek = function() {
  // get and return the item
  return this._storage[this._size - 1]
};
// Time complexity: Constant

Stack.prototype.count = function() {
  return this._size;
};
// Time complexity: Constant

Stack.prototype.contains = function(val) {
  //loop through keys
  for (let item in this._storage) {
    // if a key value equals the val
    if (this._storage[item] === val) {
      //return true
      return true;
    }
  }
  //return false
  return false;
}
//Time complexity: Linear, O(n)

Stack.prototype.until = function(val) {
  //count to return
  let count = 0;
  //start at the end of the string and find the value
  for (var i = this._size - 1; i >= 0; i--) {
    if (this._storage[i] === val) {
      return count;
    }
    count++;
  }
  return 'The value is not in the stack.';
}
//Time complexity: Linear, O(n)



//-------------TESTS-------------

var assert = function (actual, expected) {
  if (actual === expected) {
    return console.log('PASSED')
  }
  return `Expected ${actual} to be ${expected}`;
}

var colors = new Stack(3);
assert(colors.push('yellow'), 1);
assert(colors.push('red'), 2)
assert(colors.push('blue'), 3)
assert(colors.push('purple'), 'Max capacity already reached. Remove element before adding a new one.');
assert(colors.pop(), 'blue');
assert(colors.peek(), 'red');
assert(colors.contains('yellow'), true);
assert(colors.contains('aquamarine'), false);
assert(colors.push(), 'purple');
assert(colors.peek(), 'purple');
assert(colors.count(), 3);
assert(colors.until('yellow'), 3);
assert(colors.pop(), 'purple');
assert(colors.pop(), 'red');
assert(colors.count(), 1);


/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
