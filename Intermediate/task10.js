const generateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

const fibNumbers = generateFibonacci(10);
console.log(`First 10 Fibonacci numbers: ${fibNumbers}`);
