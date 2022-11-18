let area = prompt("Qual área deseja seguir?", "front-end ou back-end");

if (area == "front-end") {
    let front = prompt("Você quer aprender React ou Vue?")
    if (front == "React" || "Vue") {
        let respostaFront = prompt("Legal! Você gostaria de seguir se especializando em Front-End, ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 se deseja se especializar ou 2 se deseja a carreira Fullstack.")
        if (respostaFront == "1") {
            alert("Legal! A área de Front-End é muito interessante.")
        } else if (respostaFront == "2") {
            alert("Muito bem, continue seus estudos!")
        }
    }
}
else if (area == "back-end") {
    let back = prompt("Você quer aprender C# ou Java?");
    if (back == "C#" || "Java") {
        let respostaBack = prompt("Legal! Você gostaria de seguir se especializando em Back-End, ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 se deseja se especializar ou 2 se deseja a carreira Fullstack.");
        if (respostaBack == "1") {
            alert("Legal! A área de Back-End é muito interessante!")
        } else if (respostaBack == "2") {
            alert("Muito bem, continue seus estudos!")
        }
    }
    else {
        alert("Operação não reconhecida. Verifique se a tecla 'Caps Lock' está ativda.");
        area = prompt("Qual área deseja seguir?", "front-end ou back-end");
    }
}

let respostaTecnologias = prompt("Qual outra tecnologia você gostaria de aprender? Digite 'ok' para responder.");
while (respostaTecnologias === "ok") {
    let novaTecnoliga = prompt("Qual?");
    alert(`Legal, ${novaTecnoliga} é muito interessante!`);
    respostaTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para responder.");
}