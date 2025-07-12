function add(a, b) {
  return a + b;
}

// Get the first and second command-line arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
// If an argument is not a valid number, parseInt will return NaN.
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Check if both conversions resulted in valid numbers
// Number.isNaN() is preferred over isNaN() for more reliable NaN checking.
if (Number.isNaN(num1) || Number.isNaN(num2)) {

} else {
    console.log(add(num1, num2));
}

