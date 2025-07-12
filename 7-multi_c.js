const info = 'C is fun';

const firstArg = process.argv[2];
const numValue = +firstArg;
const isIntegerRegex = /^-?\d+$/;

if (firstArg === undefined || !isIntegerRegex.test(firstArg)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < numValue; i++) {
        console.log(info);
    }

}
