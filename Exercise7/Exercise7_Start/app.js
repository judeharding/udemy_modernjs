//Remove all duplicates from this array
var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"];
var compareVal;

// reposition array in alphabetical order
fruits.sort();
console.log(fruits);

// loop thru the array
// sort thru the loop backwards (-1) so you don't have length issues
for (i = fruits.length - 1;i >= 0;i--) {
  // compare the elements
  compareVal = fruits[i];
  // compare 1 element to the element before it
  if (compareVal === fruits[i-1]){
    fruits.splice(i, 1);
    console.log("comparing val duplicate: " + compareVal);
  }
}
//print new array

console.log("New Array: " + fruits.toString());
