const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

const button = document.getElementById("button");

function calcularmedia(){
    console. valornota1 = Number(nota1.value)
    console. valornota2 = Number(nota2.value)

    const media = (valornota1 + valornota2)/2

    console.log(media)
}

button.addEventListener("click", calcularmedia )