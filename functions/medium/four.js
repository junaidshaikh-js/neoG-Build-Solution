/*

Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

*/

function mergeArray(arr1, arr2) {
  let mergedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }

  return mergedArray;
}

console.log(mergeArray([1, 3, 5], [2, 4, 6])); // [1,3,5,2,4,6]
