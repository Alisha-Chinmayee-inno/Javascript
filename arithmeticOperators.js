let num1 = 4
let num2 = 2

let result = num1-num2
console.log(result); 

let x = true
let y = true

let z = x + y
console.log(z);
// we got output as 2 : because as per the truthy and falsy values- 0: false , and 1: true ; and since both x and y are true, so 1+1 =2

let a = x - y
console.log(a);

let p = 4
// p = p + 2 
// to shorthand the above operation
// p += 2 
// p+=1
// p++ // post increment operator, increments after it is done being used in code  
// ++p //pre increment
// p -= 1
// p--  // post decrement
// --p //pre decrement
console.log(p);

let l = 4
let m = l++   
console.log(m,l);
// we got 4 5 in the output instead of 5 4 because:  l++ is post increment which means, it will first fetch the value and then assign the value.
// we have two operations here : increment and assignment - here in l++ , we are first assigning the value of 4 to l, and then incrementing it; therefore getting 4 5 in output

let n = 5
let o = ++n // pre increment
console.log(o,n);

// let r = n * n * n
let r = Math.pow(4,3) // pow: power  ; 4:the number ; 3:raised to the power
//  to shorten the above operation:
let s = 4 ** 2
console.log(r);
console.log(s);

// *: means multiplication and **: means to the power 
