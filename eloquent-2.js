// Eloquent Javascript exercises

// 1. Triangle

for (var hash = "#"; hash.length <= 7; hash += "#")
console.log(hash);

// 2. FizzBuzz

/* I hacked away at this one with if/else statements for every option, which 
I knew wasn't very eloquent. I checked out the model solution afterwards
and duh of course "FizzBuzz" is cumulative! output || n is a cool solution too  */

for (var number = 1; number <= 50; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
      console.log("FizzBuzz")
    } else if (number % 3 == 0) {
      console.log("Fizz");
    } else if (number % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }};

// 3. Chess Board

/* Ahh! I did not get this until I looked at the hint.. and even then I didn't get it, haha.
Sorry! I get it now after looking at the answers. */

var board = "";

for (var line = 0; line < 8; line++) {
  for (var count = 0; count < 8; count++) {
    if ((line + count) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);