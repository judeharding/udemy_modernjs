//Find out how many hours have passed since 1/1/2000.
var date2000 = new Date(2000, 1, 1);
var curDate = new Date();
var milliseconds;
var seconds;
var minutes;
var hours;

milliseconds = curDate.getTime() - date2000.getTime();
seconds = milliseconds/1000;
minutes = seconds/60;
hours = minutes/60;
//Print it to the console. Don't display any value past decimal point
console.log("Hours since 2000 = " + Math.floor(hours));
console.log("Minutes since 2000 = " + Math.floor(minutes));
console.log("Seconds since 2000 = " + Math.floor(seconds));
