const sumOfArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

const arrayInput = [1, 2, 3, 4]; 
console.log(`The sum of the array elements is: ${sumOfArray(arrayInput)}`);
