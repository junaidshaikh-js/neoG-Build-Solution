// Write a Program to take a number input from user and find if the number is Prime or not.

function isPrime(num) {
  if (num == 1) {
    return "1 is neither prime nor composite number.";
  }

  const factors = findFactors(num);
  if (factors.length == 2) {
    return `${num} is the prime number`;
  }

  return `${num} is not the prime number`;

  // *******
  function findFactors(num) {
    let factors = [];

    for (let i = 0; i <= num; i++) {
      if (num % i == 0) {
        factors.push(i);
      }
    }

    return factors;
  }
}

console.log(isPrime(1));
