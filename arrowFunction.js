// Basic Arrow Function:
const add = (a, b) => {
    return a + b;
};

console.log(add(3, 5)); // Output: 8

// Arrow Function with Implicit Return:
const subtract = (a, b) => a - b;

console.log(subtract(8, 3)); // Output: 5

// Arrow Function with No Parameters:
const sayHello = () => {
    console.log("Hello, world!");
};

sayHello(); // Output: Hello, world!

// Arrow Function in Array Functions:
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Arrow Functions in Object Methods:
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(person.fullName()); // Output: undefined undefined

// Arrow Functions as Callbacks:
const number = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

// Arrow Functions in Promises:
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(2000)
    .then(() => {
        console.log("Two seconds have passed.");
    });
