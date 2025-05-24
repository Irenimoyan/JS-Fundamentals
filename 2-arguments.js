let arg = process.argv[2];

if (!arg) {
    console.log("No argument");
} else if (process.argv.length === 3) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}