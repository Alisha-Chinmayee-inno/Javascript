// Global Context:
console.log(this === global); // true in Node.js

// Function Context:
function printThis() {
    console.log(this === global); // false in a function
  }
  
  printThis(); // false

//   Method Context:
const myObject = {
    name: "Node.js",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  myObject.greet(); // Hello, Node.js!

//   Arrow Functions:
const myObject1 = {
    name: "Node.js",
    greet: () => {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  myObject1.greet(); // Hello, undefined!
 
//   Event Listeners:
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("myEvent", function () {
  console.log(`Event handled by ${this}`);
});

myEmitter.emit("myEvent"); // Event handled by [EventEmitter]
