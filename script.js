let carga = 0;
const limite = 400;

const peso = document.getElementById("peso");
const alerta = document.getElementById("alerta");
const adicionar = document.getElementById("adicionar");
const resetar = document.getElementById("resetar");
const statusElevador = document.getElementById("statusElevador");

function atualizarSistema() {

    peso.textContent = `${carga} kg`;

    if (carga >= limite) {
        alerta.classList.remove("oculto");

        adicionar.disabled = true;

        statusElevador.textContent = "Elevador BLOQUEADO";
        statusElevador.style.color = "red";

    } else {

        alerta.classList.add("oculto");

        adicionar.disabled = false;

        statusElevador.textContent = "Elevador Liberado";
        statusElevador.style.color = "green";
    }
}

adicionar.addEventListener("click", () => {
    carga += 100;
    atualizarSistema();
});

resetar.addEventListener("click", () => {
    carga = 0;
    atualizarSistema();
});

atualizarSistema();