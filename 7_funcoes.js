let valor1 = "";
let valor2 = "";
let operacao = "";
let resultado = "";

function soma (valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2){
    return Number(valor1) * Number(valor2); 
}

function divisao(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

function calculo(){
    do {
        operacao = prompt("Qual operação você deseja realizar? Digite 'soma', 'subtração', 'multiplicação', 'divisão ou 'sair'.");
        while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair"){
            alert("Operação não reconhecida!");
            operacao = prompt("Qual operação você deseja realizar? Digite 'soma', 'subtração', 'multiplicação', 'divisão ou 'sair'.");
        }

        if (operacao === "sair") {
            break;
        }

        valor1 = prompt("Digite o primeiro valor:");
        valor2 = prompt("Digite o segundo valor:");
        switch (operacao){
            case "soma":
                soma();
                alert(`O resultado é ${soma(valor1, valor2)}`);
                break;
            case "subtração":
                subtracao();
                alert(`O resultado é ${subtracao(valor1, valor2)}`);
                break;
            case "multiplicação":
                multiplicacao();
                alert(`O resultado é ${multiplicacao(valor1, valor2)}`);
                break;
            case "divisão":
                divisao();
                alert(`O resultado é ${divisao(valor1, valor2)}`);
                break;
            default:
                alert("Operação não reconhecida");
        }
    }
    while (operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão") {
	}
    alert("Até a próxima!");
}

calculo();
