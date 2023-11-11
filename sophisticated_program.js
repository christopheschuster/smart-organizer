// sophisticated_program.js

/* This sophisticated program performs various complex calculations
   and manipulations on a set of data.
   Filename: sophisticated_program.js */

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Calculate the sum of the numbers using reduce method
const sum = numbers.reduce((acc, curr) => acc + curr);

// Calculate the product of the numbers using reduce method
const product = numbers.reduce((acc, curr) => acc * curr);

// Calculate the average of the numbers
const average = sum / numbers.length;

// Calculate the factorial of the average
const averageFactorial = factorial(average);

// Function to check if a number is prime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Find all prime numbers in the array
const primes = numbers.filter((num) => isPrime(num));

// Sort the prime numbers in ascending order
const sortedPrimes = primes.sort((a, b) => a - b);

// Shuffle the array using Fisher-Yates algorithm
for (let i = numbers.length - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
}

// Reverse the array
numbers.reverse();

// Print the results
console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Average:", average);
console.log("Average Factorial:", averageFactorial);
console.log("Prime Numbers:", primes);
console.log("Sorted Prime Numbers:", sortedPrimes);

// Other complex operations and calculations...

// ...

// End of sophisticated_program.js