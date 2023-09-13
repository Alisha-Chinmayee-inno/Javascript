// filter() Method:

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

// map() Method:

const numbers1 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers1.map(function (number) {
  return number * number;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// reduce() Method:

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15