/*

Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3

*/

function noOfWords(str) {
  let arrFromString = str.split(" ");

  return arrFromString.length;
}

console.log(noOfWords("We are neoGrammers")); // 3
