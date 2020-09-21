const botao_ = document.querySelector("#buscar-paciente");

const endereco = "https://api-pacientes.herokuapp.com/pacientes";

botao_.addEventListener("click", () => {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", endereco);

    if (!(xhr.status == 200)) {

        console.log(xhr.status);

        console.log("Deu merda parceiro!");

        return;

    }

    xhr.addEventListener("load", function () {

        const tabela = buscarTabela();

        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(paciente => {

            let tr = criarTr();

            addClasseEstilo(tr, "paciente");

            let tdNome = criarTd();

            tdNome.textContent = paciente.nome;

            appendar(tr, tdNome);

            let tdAltura = criarTd();

            tdAltura.textContent = paciente.altura;

            appendar(tr, tdAltura);

            let tdPeso = criarTd();

            tdPeso.textContent = paciente.peso;

            appendar(tr, tdPeso);

            let tdGordura = criarTd();

            tdGordura.textContent = paciente.gordura;

            appendar(tr, tdGordura);

            let tdImc = criarTd();

            tdImc.textContent = paciente.imc;

            appendar(tr, tdImc);

            appendar(tabela, tr);

        });

    })

    xhr.send();

});

function buscarTabela() {

    return document.querySelector("#tabela-pacientes");

}


function criarTr() {

    const td = document.createElement("tr");

    return td;

}

function criarTd() {

    const tr = document.createElement("td");

    return tr;

}

function appendar(pai, filho) {

    pai.appendChild(filho);

}

function addClasseEstilo(tag, classe) {

    tag.classList.add(classe);

}

const classes = ["info-nome", "info-peso", "info-altura", "info-gordura", "info-imc"];
