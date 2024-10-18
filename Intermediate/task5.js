const findPrimes = (limit) => {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
};

const primeNumbers = findPrimes(30);
console.log(`Prime numbers up to 30: ${primeNumbers}`);
