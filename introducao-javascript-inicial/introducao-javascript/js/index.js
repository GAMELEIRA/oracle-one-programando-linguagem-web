
// const titulo = document.querySelector(".titulo-principal"); //BUSCA PELO PRIMEIRO SELECTOR

// titulo.textContent = "Gabriel Gameleira"

// console.log(titulo.textContent); //RETORNA O CONTEUDO DE TEXTO

function buscarPacientes() {

    let pacientes;

    pacientes = document.querySelectorAll(".paciente");

    return pacientes;

}

function buscarPesoPaciente(paciente) {

    let tdPeso;

    tdPeso = paciente.querySelector(".info-peso");

    return tdPeso;

}

function buscarAlturaPaciente(paciente) {

    let tdAltura;

    tdAltura = paciente.querySelector(".info-altura");

    return tdAltura;

}

function buscarImc(paciente) {

    let tdImc;

    tdImc = paciente.querySelector(".info-imc");

    return tdImc;

}

const validarPeso = (peso) => (peso <= 0 || peso >= 1000) ? false : true;

const validarAltura = (altura) => (altura <= 0 || altura >= 3.00) ? false : true;

const validarCalculoImc = (pesoValido, alturaValida) => (pesoValido && alturaValida) ? true : false;

function calcularImcPaciente(peso, altura) {

    const imc = peso / Math.pow(altura, 2);

    return imc.toFixed(2);

}

function escreverPesoInvalido(peso) {

    peso.textContent = "Peso inválido!";

}

function escreverAlturaInvalida(altura) {

    altura.textContent = "Altura inválida!";

}

function escreverImc(imc, imcCalculado) {

    imc.textContent = imcCalculado;

}

function retornarConteudoTagNumerica(tag) {

    return Number(tag.textContent);

}

function invalidarPaciente(paciente) {

    paciente.classList.add("paciente-invalido");

}

function percorrerTodosPacientes(pacientes) {

    let tdAltura;

    let tdPeso;

    let tdImc;

    let peso;

    let altura;

    let imc;

    let pesoValido;

    let alturaValida;

    let calcularImcPermitido;

    pacientes.forEach(paciente => {

        tdAltura = buscarAlturaPaciente(paciente);

        tdPeso = buscarPesoPaciente(paciente);

        tdImc = buscarImc(paciente);

        altura = retornarConteudoTagNumerica(tdAltura);

        peso = retornarConteudoTagNumerica(tdPeso);

        imc = retornarConteudoTagNumerica(tdImc);

        alturaValida = validarAltura(altura);

        pesoValido = validarPeso(peso);

        calcularImcPermitido = validarCalculoImc(pesoValido, alturaValida);

        if (!alturaValida) {

            escreverAlturaInvalida(tdAltura);

        }

        if (!pesoValido) {

            escreverPesoInvalido(tdPeso);

        }

        if (calcularImcPermitido) {

            imc = calcularImcPaciente(peso, altura);

            escreverImc(tdImc, imc);

        } else {

            invalidarPaciente(paciente);

            escreverImc(tdImc, "IMC INVÁLIDO!");

        }

    })

}

function calcularImcs() {

    const pacientes = buscarPacientes();

    percorrerTodosPacientes(pacientes);

}

calcularImcs();

let titulo = document.querySelector("h1");


titulo.addEventListener("click", (event) => {

    event.preventDefault();


    console.log("Oi");

})

const botao = document.getElementById("adicionar-paciente");

console.log(botao);

botao.onclick = function (e) {

    alert("OI")

    e.preventDefault();

    console.log("OI");

}


