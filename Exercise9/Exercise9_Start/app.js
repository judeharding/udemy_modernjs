//Create an arrow function that will accept a number and return the number
// with an indication of whether it is Odd or Even. See if you can define the
// entire function on a single line using the ? : conditional operator.

//GOT IT
// var oddEven = (num1) => {
//      num2 = num1 % 2;
//      if (num2 ===0){
//        console.log("The number is even!");
//      } else {
//        console.log("The number is odd!")
//      }
//      return num2;
// };
//
// console.log("hi");
// oddEven(11);
//

// on a single line

// var oddEven = (num) => (num % 2) === 0 ? num + " is even" : num + " is odd";
//
// console.log(oddEven(10));
// console.log(oddEven(11));
//


var dog = {
  type: "collie",
  age: 1,
  speak: function(){
    console.log("bark");
    }
  };

  dog.speak(2);
