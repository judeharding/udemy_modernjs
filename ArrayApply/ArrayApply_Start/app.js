//Use the date object and print out the day of the week
var date = new Date();
var day = date.getDay();
var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

console.log("today is " + daysOfWeek[day]);

//-----

var grades = [97, 50, 88];
var total = 0;
var avg = 0;

for (i = 0; i < grades.length; i++){
  // checking to make sure that each element in the array container has a value
  if (grades[i] === undefined){
    // the continue statement looks for an element in the array that is undefined and skips it
    continue;
  }
	total =+ grades[i];
}

avg = total / grades.length;
console.log("the avg grade is: " + Math.round(avg));

 //-----
var str = "https://www.youtube.com/watch?v=2cwYOm_un9E&list=FLaIeuzzt5gYmtWssPT-LO6w&index=1";
var newArray = str.split("?");
console.log(newArray);



 //-----


// if (day === 0) {
//     console.log("Today is Sunday.");
// } else if (day === 1) {
//     console.log("Today is Monday.");
// } else if (day === 2) {
//     console.log("Today is Monday.");
// } else if (day === 3) {
//     console.log("Today is Monday.");
// } else if (day === 4) {
//     console.log("Today is Monday.");
// } else if (day === 5) {
//     console.log("Today is Monday.");
// } else if (day === 6) {
//     console.log("Today is Monday.");
// }
