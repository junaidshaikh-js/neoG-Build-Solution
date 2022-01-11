// Write a program to take a number input from user and determine whether the number is odd or even.

function oddOrEven(num) {
  if (num % 2) {
    return "odd";
  }

  return "even";
}

console.log(oddOrEven(2)); // even
console.log(oddOrEven(5)); // odd
