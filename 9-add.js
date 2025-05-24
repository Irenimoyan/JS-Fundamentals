
function add(a, b) {
    console.log(a + b);
}

const firstNumb = parseInt(process.argv[2]);
const secondNumb = parseInt(process.argv[3]);

add(firstNumb, secondNumb);