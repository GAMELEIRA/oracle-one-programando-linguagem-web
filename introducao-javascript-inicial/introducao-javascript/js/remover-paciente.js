const pacientes = document.querySelectorAll(".paciente");

const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {

        event.target.parentNode.remove();

    }, 500)



});
