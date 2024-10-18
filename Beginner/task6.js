const isPalindrome = (str) => str === str.split('').reverse().join('');

const palindromeInput = "madam"; 
console.log(`"${palindromeInput}" is ${isPalindrome(palindromeInput) ? "" : "not "}a palindrome.`);
