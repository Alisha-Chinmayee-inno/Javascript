let num = 6
console.log(num, typeof num);

// Explicit Conversions

// to store num as string
let num1 = String(6)
console.log(num1, typeof num1);

let num2 = Number("123")
console.log(num2, typeof num2);

//  Type Coersions
let x
console.log(x,typeof x);
x=8
console.log(x,typeof x);
x=x+"" // gives String
console.log(x,typeof x);
x = x - 2 // gives number
console.log(x,typeof x);
x = x + 2 // gives number
console.log(x,typeof x);

// x = !x  ! changes to the opposite
x = !x
console.log(x,typeof x);

//  thruthy and falsy values
//  only 0 is false , every other number doesnt matter positive or negative is true
console.log(Boolean(7));
console.log(Boolean(-8));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Alisha"));

//parseInt is a special function which will accept a String and will try to convert that number
let int = Number("123 Alisha")  // gives Nan
console.log(int);  

let a = parseInt("123 Alisha") //gives atleast the integers  present in the string
console.log(a);