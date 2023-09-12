// Function Declaration:
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

// Function Expression:
const add = function (a, b) {
    return a + b;
};

const result = add(3, 5);
console.log(result); // Output: 8

// Arrow Function:
const multiply = (a, b) => a * b;

const product = multiply(4, 6);
console.log(product); // Output: 24

// Anonymous Function:
const square = function (x) {
    return x * x;
};

const squaredValue = square(7);
console.log(squaredValue); // Output: 49

// Immediately Invoked Function Expression (IIFE):
(function () {
    console.log("This is an IIFE.");
})();

// Function with Default Parameters:
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Alice"); // Output: Hello, Alice!

// Rest Parameter Function:
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const total = sum(1, 2, 3, 4, 5);
console.log(total); // Output: 15

// Callback Function:
function fetchData(url, callback) {
    // Simulate fetching data
    setTimeout(() => {
        const data = { message: "Data fetched successfully" };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(data.message);
}

fetchData("https://example.com/api/data", displayData);
