/*

Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

*/

function toSentenceCase(str) {
  let strArr = str.split(" ");

  let updatedArray = strArr.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });

  return updatedArray.join(" ");
}

console.log(toSentenceCase("we are neoGrammers")); // We Are NeoGrammers
