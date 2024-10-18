const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

const stringWithVowels = "Hello World"; 
console.log(`The number of vowels in "${stringWithVowels}" is: ${countVowels(stringWithVowels)}`);
