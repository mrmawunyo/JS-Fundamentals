// Function to compute factorial recursively
function factorial(n) {
  // Base case 1: Factorial of 0 is 1 (standard definition)
  // Base case 2: Factorial of NaN (from initial input) is 1 as per requirement
  // Base case 3: Factorial of negative numbers is 1 (as per examples implying it's treated like NaN)
  // Number.isNaN checks specifically for NaN.
  // n <= 0 handles 0 and negative numbers.
  if (Number.isNaN(n) || n <= 0) {
    return 1;
  }
  // Recursive step
  return n * factorial(n - 1);
}

// Get the first command-line argument
const arg = process.argv[2];

// Convert the argument to an integer.
// If arg is undefined or not a valid number string, parseInt will return NaN.
const num = parseInt(arg);

// Compute and print the factorial
console.log(factorial(num));