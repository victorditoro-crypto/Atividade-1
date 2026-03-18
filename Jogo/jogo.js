// Sistema de Pontuação

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nome do jogador: ", function(nome) {
    rl.question("Pontuação: ", function(pontos) {

        pontos = Number(pontos); // converte para número

        if (pontos >= 1000) {
            console.log("Classificação: Lendário");
        } else if (pontos >= 500) {
            console.log("Classificação: Mestre");
        } else if (pontos >= 200) {
            console.log("Classificação: Intermediário");
        } else {
            console.log("Classificação: Iniciante");
        }

        console.log("Jogador:", nome);
        console.log("Pontos:", pontos);

        rl.close();
    });
});