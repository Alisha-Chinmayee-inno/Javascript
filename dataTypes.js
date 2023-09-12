let data = 8   //number
let user = "Alisha"  //string

let num1=35685650987 
console.log(num1 * 25); 

let num2= 7.8
console.log(typeof num2);

//for hexadecimal should begin with 0x
let x = 0xff
console.log(x);

//we can also represent floating points using e exponential
let y= 1.5e12
console.log(y);

//to verify number of zeros: we can put undercosres between zeroes instead of ,
let amount = 10_00_000
console.log(amount);

//for infinity
let a = 5/0
let b = -5/0
console.log(a);
console.log(b);

//to get maximum number value
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*10);
console.log(Number.MAX_VALUE+1);

//bigInteger
let p = 1050505050505055050505505050550n
// console.log(p+2); // gives error : cannot mix BigInt and other Types
console.log(p+2n);

