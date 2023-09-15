// Creating a Set:
let mySet = new Set();

// Adding and Removing Elements:
let mySet5 = new Set();

mySet5.add(1);
mySet5.add(2);
mySet5.add(3);

mySet5.delete(2);

// Checking for the Existence of an Element:
let mySets = new Set();

mySets.add(1);
mySets.add(2);

console.log(mySets.has(1)); // true
console.log(mySets.has(3)); // false

// Iterating Over a Set:

let mySet1 = new Set();

mySet1.add("apple");
mySet1.add("banana");
mySet1.add("cherry");

for (let fruit of mySet1) {
  console.log(fruit);
}

// Getting the Size of a Set:
let mySet2 = new Set();

mySet2.add(1);
mySet2.add(2);
mySet2.add(3);

console.log(mySet2.size); // 3

// Converting an Array to a Set:
let myArray = [1, 2, 2, 3, 4, 4];
let mySet3 = new Set(myArray);

// Converting a Set to an Array:
let mySet4 = new Set([1, 2, 3]);
let myArray1 = Array.from(mySet4);
// or
let anotherArray = [...mySet4];