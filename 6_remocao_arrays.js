let adicionarItem = "sim";
let frutas = [];
let doces = [];
let bebidas = [];


while (adicionarItem != "não") {
    if (frutas.length === 0 && doces.length === 0 && bebidas.length === 0) {
        adicionarItem = prompt("Deseja adicionar algum item na sua lista de compras? Digite 'sim' ou 'não'.");
    } else {
        adicionarItem = prompt("Deseja adicionar mais algum item? Digite 'sim', 'não' ou 'remover'.");
    }

    while (adicionarItem != "sim" && adicionarItem != "não" && adicionarItem != "remover") {
        alert('Operação não reconhecida.')
        adicionarItem = prompt("Deseja adicionar algum item na sua lista de compras? Digite 'sim' ou 'não'.");
    }

    if (adicionarItem === "não") {
        alert("Até mais!");
        alert(`Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Bebidas: ${bebidas}`);
        break
    }

    if (adicionarItem === "sim") {
        let nomeItem = prompt("Qual item você deseja adicionar?");
        let selecionaCategoria = prompt("Em qual dessas categorias ele se encaixa: 'fruta', 'doce' ou 'bebida'?");
        if (selecionaCategoria == "fruta") {
            frutas.push(nomeItem);
        } else if (selecionaCategoria == "doce") {
            doces.push(nomeItem);
        } else if (selecionaCategoria == "bebida") {
            bebidas.push(nomeItem);
        }

    } else if (adicionarItem === "remover") {
        if (frutas.length === 0 && doces.length === 0 && bebidas.length === 0) {
            alert('Sua lista está vazia.')
        } else {
            let removeItem = prompt(`Qual item você deseja remover?\n Frutas: ${frutas};\n Doces: ${doces};\n Bebidas: ${bebidas}`);
            if (frutas.indexOf(removeItem) != -1) {
                frutas.splice(frutas.indexOf(removeItem, 1));
                alert(`Item ${removeItem} removido da sua lista\n Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Bebidas: ${bebidas}`);
            } else if (doces.indexOf(removeItem) != -1) {
                doces.splice(doces.indexOf(removeItem, 1));
                alert(`Item ${removeItem} removido da sua lista\n Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Bebidas: ${bebidas}`);
            } else if (bebidas.indexOf(removeItem) != -1) {
                bebidas.splice(bebidas.indexOf(removeItem, 1));
                alert(`Item ${removeItem} removido da sua lista\n Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Bebidas: ${bebidas}`);
            }
        }
    }
}
