// Complex Object:
// Creating a complex object with nested properties and arrays
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      postalCode: "10001"
    },
    hobbies: ["reading", "swimming", "gardening"]
  };
  
  // Accessing nested properties
  console.log(person.firstName); // John
  console.log(person.address.city); // New York
  console.log(person.hobbies[0]); // reading

// Deleting a Property:
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
  };
  
  console.log(car); // Initial object
  
  // Deleting a property
  delete car.year;
  
  console.log(car); // Object after deleting the 'year' property
  