const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let v = 10;

rl.question("valor: ", (x) => {
    let r = v + x*1;

    console.log(r);

    rl.close();
});
