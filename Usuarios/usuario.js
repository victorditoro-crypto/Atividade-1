const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let max = 100;

rl.question("usuarios online: ", (u) => {

    if (u*1 <= max) {
        console.log("ok");
    } else {
        console.log("limite excedido");
    }

    rl.close();
});