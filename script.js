// VARIÁVEL GLOBAL
let cargaAtual = 0;

// LIMITE DO SILO
const capacidadeMaxima = 5000;

// ELEMENTOS
const painelLED =
    document.getElementById("painelLED");

const alerta =
    document.getElementById("alerta");

const carregar =
    document.getElementById("carregar");

const resetar =
    document.getElementById("resetar");

const statusSistema =
    document.getElementById("statusSistema");

const nivelSilo =
    document.getElementById("nivelSilo");


// FUNÇÃO PRINCIPAL
function atualizarSistema() {

    // PAINEL DIGITAL
    painelLED.textContent =
        `${cargaAtual} KG`;

    // ALTURA DO SILO
    let porcentagem =
        (cargaAtual / capacidadeMaxima) * 100;

    nivelSilo.style.height =
        `${porcentagem}%`;

    // LIMITE MÁXIMO
    if (cargaAtual >= capacidadeMaxima) {

        alerta.classList.remove("oculto");

        carregar.disabled = true;

        painelLED.style.color = "red";

        statusSistema.textContent =
            "ESTEIRA BLOQUEADA - SILO CHEIO";

        statusSistema.style.color = "red";

    } else {

        alerta.classList.add("oculto");

        carregar.disabled = false;

        painelLED.style.color = "#00ff00";

        statusSistema.textContent =
            "ESTEIRA OPERANDO NORMALMENTE";

        statusSistema.style.color = "lightgreen";
    }
}


// BOTÃO CARREGAR
carregar.addEventListener("click", () => {

    cargaAtual += 500;

    atualizarSistema();
});


// BOTÃO RESET
resetar.addEventListener("click", () => {

    cargaAtual = 0;

    atualizarSistema();
});


// INICIALIZAÇÃO
atualizarSistema();