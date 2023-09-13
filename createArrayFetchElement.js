// Creating an Array

// Using Array Literal Syntax:
const fruits = ["apple", "banana", "cherry"];

// Using the Array Constructor:
const cars = new Array("Toyota", "Honda", "Ford");

// Creating an Empty Array and Adding Elements:
const emptyArray = [];
emptyArray.push("element1");
emptyArray.push("element2");

// Fetching Elements from an Array:

// Accessing Elements by Index:
const colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

// Iterating Through an Array (Using a for Loop):
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using forEach Method:
const animals = ["cat", "dog", "elephant"];
animals.forEach(function (animal) {
  console.log(animal);
});

// Using map Method (to create a new array based on an existing one):
const number = [1, 2, 3, 4, 5];
const squaredNumbers = number.map(function (number) {
  return number * number;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Using Array Destructuring (ES6):
const [firstElement, secondElement] = fruits;
console.log(firstElement); // "apple"
console.log(secondElement); // "banana"

// Using find and findIndex (to find elements that meet a condition):
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  const user = users.find(function (user) {
    return user.id === 2;
  });
  
  console.log(user); // { id: 2, name: "Bob" }
  