/*

Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

*/

const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function encodeString(str, shiftBy) {
  let encodedStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentIndex = chars.indexOf(str[i]);

    let nextChar = currentIndex + shiftBy;

    if (nextChar > 25) {
      nextChar -= 26;
    }

    encodedStr += chars[nextChar];
  }

  return encodedStr;
}

console.log(encodeString("neogcamp", 2)); // pgqiecor
