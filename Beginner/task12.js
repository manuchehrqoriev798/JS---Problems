const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const minRange = 1; 
const maxRange = 10; 
console.log(`A random number between ${minRange} and ${maxRange} is: ${generateRandomNumber(minRange, maxRange)}`);
