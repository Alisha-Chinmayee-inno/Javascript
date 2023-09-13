// Basic Constructor Function:
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create instances of Person
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
  console.log(person1); // Person { name: 'Alice', age: 30 }
  console.log(person2); // Person { name: 'Bob', age: 25 }
  
//   Constructor Function with Methods:
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.drive = function () {
      console.log(`Driving a ${this.make} ${this.model}`);
    };
  }
  
  // Create instances of Car
  const car1 = new Car("Toyota", "Camry");
  const car2 = new Car("Ford", "Mustang");
  
  car1.drive(); // Driving a Toyota Camry
  car2.drive(); // Driving a Ford Mustang

//   Constructor Function with Prototype:
function Animal(name) {
    this.name = name;
  }
  
  // Add a method to the Animal prototype
  Animal.prototype.sound = function () {
    console.log(`${this.name} makes a sound.`);
  };
  
  // Create instances of Animal
  const cat = new Animal("Cat");
  const dog = new Animal("Dog");
  
  cat.sound(); // Cat makes a sound.
  dog.sound(); // Dog makes a sound.
  
//   Constructor Function with Inheritance:
function Shape(color) {
    this.color = color;
  }
  
  // Add a method to the Shape prototype
  Shape.prototype.getColor = function () {
    return this.color;
  };
  
  function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
  }
  
  // Inherit from Shape prototype
  Circle.prototype = Object.create(Shape.prototype);
  
  // Add a method specific to Circle
  Circle.prototype.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };
  
  // Create an instance of Circle
  const myCircle = new Circle(5, "red");
  
  console.log(myCircle.getColor()); // red
  console.log(myCircle.getArea());  // 78.53981633974483

  