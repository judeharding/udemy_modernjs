//Find where the third B is in the sentence
var sentence = "The red bear jumped over the Big fence!",
    count = 0,
    loc = 0;
//
// sentence = sentence.toUpperCase();
// while (count < 3 && loc < sentence.length) {
//     if (sentence.charAt(loc) === "B") {
//         count++;
//     }
//
//     loc++;
// }
//
// console.log(sentence.slice(--loc));

// ---
// for (i = 1; i <=10; i++){
//   console.log(i);
// }

var backward = "";

for (var i = sentence.length - 1; i >= 0; i--){
    backward = backward + sentence.charAt(i);
    // console.log(backward);
}

console.log(backward);
