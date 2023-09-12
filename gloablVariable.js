// This is a global variable
let globalVar = "I am global!";

function globalVariableExample() {
    console.log(globalVar);
}

globalVariableExample(); // Output: I am global!

// You can also access globalVar outside the function
console.log(globalVar); // Output: I am global!


// Default 
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
