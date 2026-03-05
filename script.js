const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const resultado = document.getElementById("resultado")

const button = document.getElementById("button");

function calcularmedia(){
    const valornota1 = Number(nota1.value)
    const valornota2 = Number(nota2.value)

    const media = (valornota1 + valornota2)/2

    resultado.innerText = `A media e ${media.toFixed(2)}`
}

button.addEventListener("click", calcularmedia )