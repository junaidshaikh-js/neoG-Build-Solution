/*

Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

*/

function indexOf(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 4, 3, 5, 8, 9], 3)); // 2
