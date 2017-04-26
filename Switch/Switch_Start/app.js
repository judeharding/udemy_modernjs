//Use the date object and print out the day of the week
var date = new Date();
var day = date.getDay();

console.log(day);

switch (day){
  case 0:
    console.log("Today is Sunday.");
    break;
  case 1:
    console.log("Today is Monday.");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
    break;
  default:
    console.log ("Your computer can't retrieve the current day");
    break;
}
