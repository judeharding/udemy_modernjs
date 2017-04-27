//Write a loop that will display a fibonacci sequence starting with 0 and 1 until the final number is less than 1000. I fibonancci sequence is where each number is equal to the sum of the previous two numbers (e.g. 0, 1, 1, 2, 3, 5 ...).

var fibSeq = "",
    num1 = 0,
    num2 = 1,
    newNum = 0;
//Add two numbers together. Store result in the sequence. Assign result to new number. 

while(newNum <= 1000) {
    fibSeq += newNum + ", ";
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
}

console.log(fibSeq.slice(0, fibSeq.length - 2));