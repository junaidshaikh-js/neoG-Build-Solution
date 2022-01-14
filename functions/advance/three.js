/*

Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

*/

function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    let itemToInsert = arr[i];
    let j;

    for (j = i - 1; arr[j] > itemToInsert && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = itemToInsert;
  }

  return arr;
}

console.log(sortArray([100, 83, 32, 9, 45, 61])); // [ 9, 32, 45, 61, 83, 100 ]
