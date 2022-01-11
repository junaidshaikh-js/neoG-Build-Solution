// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

function factorial(num) {
  if (num < 1) return 1;

  let answer = num * factorial(num - 1);

  return answer;
}

console.log(factorial(5)); // 120
