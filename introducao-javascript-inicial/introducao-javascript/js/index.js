
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

const botao = document.querySelector("#adicionar-paciente");

function buscarValorTag(tag) {

    return tag.value;

}

function buscarFormulario() {

    return document.querySelector("#form-adiciona");

}

function buscarNome(formulario) {

    return document.getElementById("nome");

}

function buscarAltura(formulario) {

    return formulario.querySelector("#altura");

}

function buscarPeso(formulario) {

    return formulario.querySelector("#peso");

}

function buscarGrupo(formulario) {

    return formulario.querySelector("#gordura");

}

function criarTr() {

    const td = document.createElement("tr");

    return td;

}

function criarTd() {

    const tr = document.createElement("td");

    return tr;

}

function addClasseEstilo(tag, classe) {

    tag.classList.add(classe);

}

function appendar(pai, filho) {

    pai.appendChild(filho);

}

function buscarTabela() {

    return document.querySelector("#tabela-pacientes");

}

botao.onclick = function (e) {

    e.preventDefault();

    const formulario = buscarFormulario();

    const inNome = buscarNome(formulario);

    const inAltura = buscarAltura(formulario);

    const inPeso = buscarPeso(formulario);

    const inGrupo = buscarGrupo(formulario);

    const nome = buscarValorTag(inNome);

    let altura = buscarValorTag(inAltura);

    let peso = buscarValorTag(inPeso);

    let gordura = buscarValorTag(inGrupo);

    let tabela = buscarTabela();

    const tr = criarTr();

    addClasseEstilo(tr, "paciente");

    const alturaValida = validarAltura(altura);

    const pesoValido = validarPeso(peso);

    const calcularImcPermitido = validarCalculoImc(pesoValido, alturaValida);

    if (!alturaValida) {

        let erro = document.querySelector("#erro");

        erro.textContent = "Altura inválida!";

        altura = "ALTURA INVALIDA!"

    }

    if (!pesoValido) {

        peso = "PESO INVALIDO!";
    }

    if (calcularImcPermitido) {

        imc = calcularImcPaciente(peso, altura);


    } else {

        imc = "IMC INVÁLIDO!";

        invalidarPaciente(tr);

    }


    const paciente = [nome, peso, altura, gordura, imc];

    const classes = ["info-nome", "info-peso", "info-altura", "info-gordura", "info-imc"]

    for (let i = 0; i < paciente.length; i++) {

        let td = criarTd();

        addClasseEstilo(td, classes[i]);

        td.textContent = paciente[i];

        appendar(tr, td);

        appendar(tabela, tr);

        console.log(td)

    }

    formulario.reset();

}


// URL.innerHTML = "" document.querySelector("#alura").innerHTML = "Novo texto"