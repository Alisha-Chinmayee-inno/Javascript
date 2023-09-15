// Creating a Map:
let myMaps = new Map();

// Adding and Getting Values:
let myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('age', 30);

console.log(myMap.get('name')); // "Alice"
console.log(myMap.get('age'));  // 30

// Checking for the Existence of a Key:
let myMap1 = new Map();

myMap1.set('name', 'Bob');

console.log(myMap1.has('name'));  // true
console.log(myMap1.has('email')); // false

// Removing Key-Value Pairs:
let myMap2 = new Map();

myMap2.set('city', 'New York');
myMap2.delete('city');

// Iterating Over a Map:
let myMap3 = new Map();

myMap3.set('a', 1);
myMap3.set('b', 2);
myMap3.set('c', 3);

// Using for...of
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Using forEach
myMap3.forEach((value, key) => {
  console.log(key, value);
});

// Getting the Size of a Map:
let myMap4 = new Map();

myMap4.set('x', 10);
myMap4.set('y', 20);

console.log(myMap4.size); // 2

// Converting an Array to a Map:
let myArray = [['name', 'Eve'], ['age', 25]];
let myMap5 = new Map(myArray);