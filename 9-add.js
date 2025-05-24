
function add(a, b) {
    console.log(a + b);
}

const firstNumb = parseInt(process.argv[2]);
const secondNumb = parseInt(process.argv[3])

console.log(add(firstNumb, secondNumb));