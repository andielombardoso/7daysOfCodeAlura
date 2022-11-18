
let adicionaItem = prompt("Deseja adicionar algum item na sua lista? Digite 'sim' ou 'não'.");
let frutas = [];
let doces = [];
let bebidas = [];
let comidas = [];

while (adicionaItem != "sim" && adicionaItem != "não") {
    alert("Operação não reconhecida.");
    adicionaItem = prompt("Deseja adicionar algum item na sua lista? Digite 'sim' ou 'não'.");
}

while (adicionaItem === "sim") {
    let respostaItem = prompt("Qual item você deseja adicionar?");
    let selecionaCategoria = prompt("Em qual dessas categorias ele se encaixa? Comida, fruta, doce ou bebida?");
    if (selecionaCategoria == "comida") {
        comidas.push(respostaItem);
        console.log(comidas.length);
    } else if (selecionaCategoria == "fruta") {
        frutas.push(respostaItem);
        console.log(frutas.length);
    } else if (selecionaCategoria == "doce") {
        doces.push(respostaItem);
        console.log(doces.length);
    } else if (selecionaCategoria == "bebida") {
        bebidas.push(respostaItem);
        console.log(bebidas.length);
    }
    adicionaItem = prompt("Você deseja adicionar mais itens na sua lista de compras? Digite 'sim' ou 'não'.");

    if (adicionaItem === "não") {
        alert(`Lista de compras:\n Comidas: ${comidas}\n Frutas: ${frutas}\n Doces: ${doces}\n Bebidas: ${bebidas}`);
        break;
    }
}