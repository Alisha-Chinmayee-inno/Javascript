//  basic for loop:
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
  }

//   for Loop with Array Iteration:
const fruits = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}

// for...in Loop for Object Iteration:
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

// for...of Loop for Iterable Iteration (e.g., Arrays):
const colors = ["red", "green", "blue", "yellow"];

for (let color of colors) {
  console.log(`Color: ${color}`);
}
