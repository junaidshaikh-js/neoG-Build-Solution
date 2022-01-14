/*

Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

*/

function reverseCharactersOfWord(str) {
  let strArray = str.split(" ");

  let reverseArray = strArray.map((elem) => {
    let reverseStr = "";

    for (let i = elem.length - 1; i >= 0; i--) {
      reverseStr += elem[i];
    }

    return reverseStr;
  });

  return reverseArray.join(" ");
}

console.log(reverseCharactersOfWord("we are neoGrammers")); //  ew era sremmarGoen
