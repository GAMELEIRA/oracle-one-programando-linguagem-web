var input = document.querySelector("#filtro");

input.addEventListener("input", function () {

    console.log(input.value);

    var pacientes = document.querySelectorAll(".paciente");

    const expressao = new RegExp(this.value, "i");

    if (input.value.length == 0) {

        pacientes.forEach((paciente) => {

            paciente.classList.remove("esconder");

        })

    } else {

        pacientes.forEach((paciente) => {

            var td = paciente.querySelector(".info-nome");

            if (!expressao.test(td.textContent)) {

                paciente.classList.add("esconder");

            } else {

                paciente.classList.remove("esconder");

            }
        })
    }

})