// Array of Numbers:
const numbers = [1, 2, 3, 4, 5];

// Array of Strings:
const fruits = ["apple", "banana", "cherry"];

// Array of Mixed Data Types:
const mixedData = [1, "hello", true, { name: "John" }];

// Array of Objects:
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

//   Array of Functions:
const mathOperations = [
    function add(a, b) {
      return a + b;
    },
    function subtract(a, b) {
      return a - b;
    },
  ];
  
  console.log(mathOperations[0](5, 3)); // 8 (Calling the "add" function)

//   Array of Arrays (Nested Arrays):
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

//   Array with Undefined and Null Values:
const values = [1, undefined, "hello", null, 42];

// Array with Boolean Values:
const flags = [true, false, true, true, false];

// Array with Dates:
const dates = [new Date(), new Date("2023-09-12"), new Date("2023-12-25")];

// Array with Regular Expressions:
const regexPatterns = [/pattern1/, /pattern2/i, /pattern3/g];
