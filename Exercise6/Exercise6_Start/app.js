//Write a loop that will display any number between 1 - 100 that is a multiple of both 3 and 5.
//Find the multiples of 6 between 1 and 100
for (var i = 1; i < 101; i++) {
    let mod = i % 3;
    if (mod === 0) {
      let mod = i % 5;
        if (mod === 0){
          console.log(i + " is a multiple of 3 and 5.");
        }
    }
}
