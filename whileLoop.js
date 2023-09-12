// Basic while Loop:
let count = 0;

while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}


// while Loop with Conditional Break:
let num = 1;

while (true) {
  console.log(num);
  num++;

  if (num > 5) {
    break;
  }
}
