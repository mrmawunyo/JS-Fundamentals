const firstArg = process.argv[2];
const numValue = +firstArg;
const isIntegerRegex = /^-?\d+$/;

if (firstArg === undefined || !isIntegerRegex.test(firstArg)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${numValue}`);

}
