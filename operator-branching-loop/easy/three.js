// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251

function findMaxAndMin(num1, num2) {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  return `Maximum number is ${max} and minimum is ${min}`;
}

console.log(findMaxAndMin(129, 251));
