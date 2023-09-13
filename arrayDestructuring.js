// Basic Array Destructuring:
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping Elements:
const [, , third] = numbers;

console.log(third); // 3

// Using Rest Syntax:
const number = [1, 2, 3, 4, 5];
const [first, ...rest] = number;

console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// Swapping Variables:
let p = 1;
let q = 2;

[p, q] = [q, p];

console.log(p); // 2
console.log(q); // 1

// Default Values:

const colors = ["red"];
const [firstColor, secondColor = "blue"] = colors;

console.log(firstColor);  // "red"
console.log(secondColor); // "blue"


// Nested Array Destructuring:

const nestedArray = [1, [2, 3], 4];
const [x, [y, z], w] = nestedArray;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(w); // 4

// Using Destructuring in Function Parameters:

function printCoordinates([x, y]) {
  console.log(`Coordinates: (${x}, ${y})`);
}

const point = [3, 7];
printCoordinates(point); // "Coordinates: (3, 7)"