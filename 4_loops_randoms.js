let numeroAleatorio = Math.round(Math.random() * 10);
let acertou = false;
let palpite = "";

console.log(numeroAleatorio);

for (let contador = 0; contador < 3; contador++) {
    palpite = prompt("Adivinhe um número entre 0 e 10");
    if (palpite == numeroAleatorio) {
        alert("Parabéns, você acertou!");
        acertou = true;
        break
    }
    if (palpite != numeroAleatorio) {
        alert("Errou!");
    }
}

if (!acertou) {
    alert(`Suas tentativas acabaram, o número era ${numeroAleatorio}`);
}
