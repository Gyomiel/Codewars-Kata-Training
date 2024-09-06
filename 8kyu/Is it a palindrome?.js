// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// Solution I - regular function:

function isPalindrome(x) {
  let lowerCase = x.toLowerCase();
  if (lowerCase === lowerCase.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  };
}

// Solution 2 - arrow function:

const isPalindrome = (x) => {
  return x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true : false;
}