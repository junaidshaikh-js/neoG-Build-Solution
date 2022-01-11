// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

function findMin(...nums) {
  let min = null;

  for (let num of nums) {
    if (!min) {
      min = num;
    } else if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log(findMin(35, 29, 46)); // 29
