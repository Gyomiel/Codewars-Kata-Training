// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples:

    /* "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true */

// Constraints:

    // 0 <= input.length <= 100

function validParentheses(parens) {
  let count = 0;
  for (let char of parens) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }
    return count === 0;
}
