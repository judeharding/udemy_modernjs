// //Write a loop that will display a fibonacci sequence starting with 0 and 1
// // until the final number is less than 1000. A fibonancci sequence is where each
// // number is equal to the sum of the previous two numbers
// // (e.g. 0, 1, 1, 2, 3, 5 ...).
//
// var numA = 0;  yep
// var numB = 1;  yep
// var i = 1;  yep
// var fib = 0;  nope should have been empty string
//
// while (i < 1001){  yep
//   fib = numA += numB;
//   numA += numB;
//   console.log("fib is " + fib);
//   // console.log("i is " + i);
//   i++;
//
// }


//ANSWER

var fibSeq = "";
var num1 = 0;
var num2 = 1;
var newNum = 0;

//Add two numbers together. Store result in the sequence. Assign result to new number.

while(newNum <= 1000) {
    fibSeq += newNum + ", ";
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
}
// removes the last comma 
console.log(fibSeq.slice(0, fibSeq.length - 2));
