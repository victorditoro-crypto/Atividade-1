function calcular() {

    let p = 50;
    let t = 10;
    let d = 20;

    let n = document.getElementById("nome").value;
    let q = document.getElementById("quantidade").value;

    q = parseInt(q);

    let v = q * p;
    let tot = v + t;

    if (v > 200) {
        tot = tot - d;
    }

    document.getElementById("resultado").innerHTML =
        n + "<br>" +
        "produto: " + v + "<br>" +
        "taxa: " + t + "<br>" +
        "desconto: " + (v > 200 ? d : 0) + "<br>" +
        "total: " + tot;
}

function limpar() {
    document.getElementById("Nome").value = "";
    document.getElementById("Quantidade").value = "";
    document.getElementById("Resultado").innerHTML = "";
}