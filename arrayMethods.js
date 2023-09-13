// push() and pop() - Add and remove elements from the end of an array:
const fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // Adds "date" to the end
const removedFruit = fruits.pop(); // Removes and returns "date"

// unshift() and shift() - Add and remove elements from the beginning of an array:
const colors = ["red", "green", "blue"];
colors.unshift("purple"); // Adds "purple" to the beginning
const removedColor = colors.shift(); // Removes and returns "purple"

// concat() - Concatenate two or more arrays:
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArray = arr1.concat(arr2); // [1, 2, 3, 4]

// join() - Convert an array to a string by joining its elements:
const animals = ["cat", "dog", "elephant"];
const animalString = animals.join(", "); // "cat, dog, elephant"

// slice() - Extract a portion of an array into a new array:
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 4); // [2, 3, 4]

// splice() - Modify an array by adding, removing, or replacing elements:
const fruit = ["apple", "banana", "cherry"];
fruit.splice(1, 1, "kiwi"); // Removes "banana" and adds "kiwi"

// indexOf() and lastIndexOf() - Find the index of an element in an array:
const numbers1 = [1, 2, 3, 4, 2];
const firstIndex = numbers1.indexOf(2); // 1
const lastIndex = numbers1.lastIndexOf(2); // 4

// forEach() - Execute a function for each element in the array:
const numbers2 = [1, 2, 3];
numbers2.forEach(function (number) {
  console.log(number);
});

// map() - Create a new array by applying a function to each element:

const numbers3 = [1, 2, 3];
const squaredNumbers = numbers3.map(function (number) {
  return number * number;
});

// filter() - Create a new array with elements that pass a test:

const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter(function (number) {
  return number % 2 === 0;
});