const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let m = 7;

rl.question("nota1: ", (a) => {
    rl.question("nota2: ", (b) => {
        rl.question("nota3: ", (c) => {

            let media = (a*1 + b*1 + c*1) / 3;

            console.log("media:", media);

            if (media >= m) {
                console.log("Parabens Aprovado");
            } else {
                console.log("reprovado estude mais");
            }

            rl.close();
        });
    });
});