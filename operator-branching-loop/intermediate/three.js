// Write a program to take a number input from user and print multiplication table 12 times for that number

function multiplyTwelveTimes(num) {
  let item = 0;
  for (let i = 1; i <= 12; i++) {
    item += num;

    console.log(item);
  }
}

multiplyTwelveTimes(2);
