// //Remove all duplicates from this array
// var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"];
// var compareVal;
//
// // reposition array in alphabetical order
// fruits.sort();
// console.log(fruits);
//
// // loop thru the array
// // sort thru the loop backwards (-1) so you don't have length issues
// for (i = fruits.length - 1;i >= 0;i--) {
//   // compare the elements
//   compareVal = fruits[i];
//   // compare 1 element to the element before it
//   if (compareVal === fruits[i-1]){
//     fruits.splice(i, 1);
//     console.log("comparing val duplicate: " + compareVal);
//   }
// }
// //print new array
//
// console.log("New Array: " + fruits.toString());
-----------
var sum = function(num1, num2){
  var total = num1 + num2;
  //b4 es6
  // num1 = (num1 !== undefined) ? num1 : 0;
  // num2 = (num2 !== undefined) ? num2 : 0;
  // after es6 and change out the var above with this var below
// var sum = function(num1 = 0, num2 = 0){
  console.log(total);
};

sum(5);
console.log("HI");
