// Creating an object with properties
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  console.log(person.firstName); // Accessing object properties
  console.log(person.age);
  
// Modifying an Object:
// Modifying object properties
person.age = 35;
person["firstName"] = "Alice"; // Another way to modify properties

console.log(person.age); // Updated value
console.log(person.firstName); // Updated value

// Adding new properties to an object
person.email = "john@example.com";

console.log(person.email); // New property

// Deleting a property from an object
delete person.age;

console.log(person.age); // Undefined, as the property was deleted

// Adding a method to an object
person.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
  
  console.log(person.getFullName()); // Calling the method
  
