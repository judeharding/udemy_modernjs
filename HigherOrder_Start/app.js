
var greeting = function() {
    console.log("Hello There!");
};
setTimeout(greeting, 5000);

// define the function IN the setTimeout function as an anonymous  function for more experienced programmers

setTimeout(function(){
  console.log("You are great");
}, 7000);


var i = 0;
var intervalId = setInterval(function(){
  console.log(i);
  i++;
  if (i > 5){
    clearInterval(intervalId);
  }
}, 1000);


// function test1(){
//   var num1 = 10;
//   console.log("1: " + num1);
//   console.log("2: " + num2);
// }
//
// function test2(){
//   // var num1 = 50;
//   function test3(){
//     console.log("3: " + num1);
//     console.log("4: " + num2);
//   }
//   console.log("5: " + num1);
//   console.log("6: " + num2);
//   test3();
// }
//
// var num1 = 25;
// var num2 = 75;
//
// console.log("hi");
// test1();
// test2();
// test3();
//
// // the var num1 in test1 gives you this
// //1: 10
// //2: 75
// //5: 25
// //6: 75
// //3: 25
// //4: 75
//
// // the remove VAR for num1 in test1 gives you this
// //1: 10
// //2: 75
// //5: 10  as it has redefined num1
// //6: 75
// //3: 10 as it has redefined num1
// //4: 75
