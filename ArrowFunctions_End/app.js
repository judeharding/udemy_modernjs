// the standard method
var sum = function(num1, num2) {
     return num1 + num2;
};

// arrow available in es6 deals with return and curly braces
var sum1 = (num1, num2) => num1 + num2;

// arrow with a single parameter doesn't need parens and includes the return
var funct1 = num => num * num;

// if you don't pass any parameters, you need the parens
var funct2 = () => 100;

// if you have code block within the function, you need the curly braces AND you need the return keyword
var percent = (num, percent) => {
     percent = percent / 100;
     return num * percent;
};

console.log(sum(5, 6));

console.log(sum1(5, 6));

console.log(funct1(10));

console.log(funct2());

console.log(percent(100, 10));
