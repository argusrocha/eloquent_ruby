// Your code here.
for (var number = 1; number <= 100; number++) {
  var word = "";
  if (number % 3 === 0)
    word += "Fizz";
  if (number % 5 === 0)
    word += "Buzz";
  console.log(word || number);
}

