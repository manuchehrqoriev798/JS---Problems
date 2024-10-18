const calculator = (a, b, operator) => {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return null;
    }
  };
  
  const calcNum1 = 10; 
  const calcNum2 = 2;  
  const operation = '+'; 
  console.log(`The result is: ${calculator(calcNum1, calcNum2, operation)}`);
  