
// const titulo = document.querySelector(".titulo-principal"); //BUSCA PELO PRIMEIRO SELECTOR

// titulo.textContent = "Gabriel Gameleira"

// console.log(titulo.textContent); //RETORNA O CONTEUDO DE TEXTO

function calcularImc() {

    let pesoValido = true;

    let alturaValida = true;

    let paciente = document.querySelector("#primeiro-paciente");

    let tdPeso = paciente.querySelector(".info-peso");

    let tdAltura = paciente.querySelector(".info-altura");

    let tdImc = paciente.querySelector(".info-imc");

    const peso = Number(tdPeso.textContent);

    const altura = Number(tdAltura.textContent);

    if (peso <= 0 || peso >= 1000) {

        pesoValido = false;

        tdImc.textContent = "Peso inválido";

    }

    if (altura <= 0 || altura >= 3.00) {

        alturaValida = false;

        tdImc.textContent = "Altura inválida"

    }

    if (alturaValida && pesoValido) {

        const imc = peso / Math.pow(altura, 2);

        tdImc.textContent = imc;

        console.log(imc);

    }

}

calcularImc();