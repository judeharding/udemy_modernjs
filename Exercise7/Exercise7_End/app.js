// //Remove all duplicates from this array
// var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"],
//     compareVal;
//
// //sort the array
// fruits.sort();
// //console.log(fruits.toString());
// //iterate backwards through the array comparing values
// for (i = fruits.length - 1;i >= 0;i--) {
//     compareVal = fruits[i];
//     if (compareVal === fruits[i - 1]) {
//         //console.log(compareVal, fruits[i - 1]);
//         fruits.splice(i, 1);
//     }
// }
//
// console.log("New Array: " + fruits.toString());

var randomNumber = function(min, max){
  //changed from math.round to math.floor AND adding 1 to the max num
    var init = Math.random();
    var rand;

    rand = init * (max - min) + min;
    console.log(Math.floor(rand));
}

randomNumber(12,15);
