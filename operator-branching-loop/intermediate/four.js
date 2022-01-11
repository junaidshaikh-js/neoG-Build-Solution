// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

function fibSeries(upto) {
  let fib = [0, 1];

  for (let i = 2; i <= upto; i++) {
    let num = fib[i - 1] + fib[i - 2];

    fib.push(num);
  }

  return fib;
}

console.log(fibSeries(10)); // [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55]
