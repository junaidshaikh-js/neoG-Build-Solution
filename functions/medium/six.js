/*

Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

*/

function minDate(d1, d2) {
  let d1Arr = d1.split("/");
  let d2Arr = d2.split("/");

  for (let i = d1Arr.length - 1; i >= 0; i--) {
    if (d1Arr[i] < d2Arr[i]) {
      return d1;
    } else if (d1Arr[i] > d2Arr[i]) {
      return d2;
    }
  }
}

console.log(minDate("02/05/2021", "24/01/2021")); // 24/01/2021
