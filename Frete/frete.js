const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let f = 150;

rl.question("compra: ", (x) => {
    if (x*1 >= f) {
        console.log("Frete Gratis");
    } else {
        console.log("Frete Nao gratis");
    }
    rl.close();
});