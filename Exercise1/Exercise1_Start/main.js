var firstName = "Jude";
var lastName = "Harding";
var date = new Date();
//cmt
var daySpan = function(date){
  var startDate = new Date(date);
  var currDate = new Date();
  var div = 1000 * 60 * 60 * 24;
  return (Math.floor((currDate - startDate) / div))
}

console.log("Hello " + firstName + " " + lastName + "!");
console.log("Today is " + date);

//ES6 backtick
var stmt = `A total of ${daySpan('January 1, 2017')} days have passed since the start of this year.`;

console.log(stmt);
