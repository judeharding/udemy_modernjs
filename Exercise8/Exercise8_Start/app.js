//Write a function that will return a fibonacci sequence. The legnth for the
// sequence will be passed in. The fibonacci sequence will be returned as an
// array. Test it with several numbers. REMINDER: a fibonacci sequence is where
// each number is equal to the sum of the previous two numbers
// (e.g. 0, 1, 1, 2, 3, 5 ...).

//my answer
// var len = 10;
// var num1 = 0;
// var num2 = 1;
// var newNum = 0;
//
// var x = function fib(len) {
//   while(newNum <= len){
//     newNum = num1 + num2;
//     num1 = num2;
//     num2 = newNum;
//   }
//   // return newNum;
// };
//
// console.log(newNum);

// the CORRECT answer
var fibSeq = function(len) {
    var seq = [0, 1],
        newNum = 0;

    for (let i = 2;i < len;i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }

    return seq;
};

console.log(fibSeq(10).toString());

console.log(fibSeq(20).toString());
