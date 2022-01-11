// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

function findMax(...nums) {
  let max = 0;

  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMax(8, 23, 17)); // 23
