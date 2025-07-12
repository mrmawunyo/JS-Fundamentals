// Get the first command-line argument
const sizeArg = process.argv[2];

// Regular expression to check if the string represents a positive integer
const isPositiveIntegerRegex = /^\d+$/;

// Check if the argument is missing or not a positive integer string
if (sizeArg === undefined || !isPositiveIntegerRegex.test(sizeArg)) {
  console.log("Missing size");
} else {
  // Convert the argument to an integer
  const size = parseInt(sizeArg);

  // If size is 0 or negative, print nothing (as per your example for -3)
  if (size <= 0) {
    // Do nothing, as demonstrated by the -3 example
  } else {
    let rowCount = 0;
    while (rowCount < size) {
      let row = '';
      let colCount = 0;
      while (colCount < size) {
        row += 'X';
        colCount++;
      }
      console.log(row);
      rowCount++;
    }
  }
}