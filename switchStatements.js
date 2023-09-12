// Basic switch Statement:
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log("Today is " + dayName);

// switch Statement with Fall-Through:
let option = 2;
let result;

switch (option) {
  case 1:
    result = "Option 1 selected.";
    break;
  case 2:
  case 3:
    result = "Option 2 or 3 selected.";
    break;
  default:
    result = "Invalid option.";
}

console.log(result);
