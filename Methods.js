//  Object Method:
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(person.fullName()); // Output: "John Doe"

// String Methods:
const text = "Hello, world!";
const upperCaseText = text.toUpperCase();
const subText = text.substring(0, 5);

console.log(upperCaseText); // Output: "HELLO, WORLD!"
console.log(subText); // Output: "Hello"

// Array Methods:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// Function Methods:
function greet(name) {
    console.log(`Hello, ${name}!`);
}

console.log(greet.name); // Output: "greet"

