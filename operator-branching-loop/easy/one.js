// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48

function addNum(...nums) {
  const result = nums.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return result;
}

const sum = addNum(5, 13, 7, 21, 48);

console.log(sum);
