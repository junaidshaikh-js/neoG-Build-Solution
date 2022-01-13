/*

Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5

*/

function arrayLength(arr) {
  let length = 0;

  while (arr.toString()) {
    arr.pop();
    length++;
  }

  return length;
}

console.log(arrayLength([1, 5, 3, 7, 8])); // 5
