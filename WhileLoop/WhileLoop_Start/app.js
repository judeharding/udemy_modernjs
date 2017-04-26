//Generate a random number between 0 and 10 until you get a 5. How many times did it take?

var num;
var counter = 0;


while (num !== 5){
    num = Math.round(Math.random() * 10);
    counter++;
}

console.log(`It took ${counter} to reach ${num}`);
