const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let iMin = 18;

rl.question("idade: ", (x) => {
    if (x*1 >= iMin) {
        console.log("Idade Permitida");
    } else {
        console.log("Idade nao permita no site");
    }
    rl.close();
});