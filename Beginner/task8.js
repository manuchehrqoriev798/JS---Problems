const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);

const factorialNum = 5; 
console.log(`The factorial of ${factorialNum} is: ${factorial(factorialNum)}`);
