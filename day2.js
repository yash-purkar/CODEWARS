// Given an array of strings, use the filter method to return a new array containing only the strings that are palindromes.
const arrOfStrings = ["racecar", "banana", "level", "apple"];

const checkPalindrome = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return str === reverseStr;
}

const palindromeStrings = arrOfStrings.filter(str => checkPalindrome(str));

console.log(palindromeStrings);