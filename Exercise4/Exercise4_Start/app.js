//Write conditionals to sort three numbers 6, -5, 2. Output the results to the console.

var numA = 6;
var numB = -5;
var numC = 2;

console.log(numA);
console.log(numB);
console.log(numC);


// //test for A being largest

if (numA > numB && numA > numC){
  console.log(numA + " is the largest");
    if (numB > numC){
      console.log(numB + " is the middle");
      console.log(numC + " is the smallest");
    } else {
      console.log(numC + " is the middle");
      console.log(numB + "is the smallest");
    }
} else if ((numB > numC && numB > numA)){
    console.log(numB + " is the largest");
    if (numA > numC){
      console.log(numA + " is the middle");
      console.log(numC + " is the smallest");
    } else{
      console.log(numC + " is the middle");
      console.log(numA + " is the smallest");
    }
} else {
    console.log(numC + " is the largest");
    if (numA > numB){
      console.log(numA + " is the middle");
      console.log(numB + " is the smallest");
    } else{
      console.log(numB + " is the middle");
      console.log(numA + " is the smallest");
    }
}

//
// if a > b && a > c
// //print a is largest
// else a is not largest, b or c is
// if b > c
// //print b is largest
// else c is largest
// // print c is largest
// b > a,
// // print b is 2nd
// //prit c is smallest
