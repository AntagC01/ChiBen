document.addEventListener("DOMContentLoaded", () => {
const GOIABAS = document.getElementById("Goiabas");
const GOIABASDPS = document.getElementById("Goiabasdps");
const CHICOS = document.getElementById("Chicos");
const btnchicos = document.getElementById("Chico");
const ZELELES = document.getElementById("Zeleles");
const btnZELELES = document.getElementById("Zelele");
const ROSINHAS = document.getElementById("Rosinhas");
const btnrosinha = document.getElementById("Rosinha");

const ROSAS = document.getElementById("Rosas");
const ROSASDPS = document.getElementById("Rosasdps");
const rosasdiv = document.getElementById("rosasdiv");

const btnConfig = document.getElementById('btnConfig');
const configWindow = document.getElementById('configWindow');
const closeConfig = document.getElementById('closeConfig');


// Lê o cookie ao carregar
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";")[0];
    return null;
}

// Salva no cookie
function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}


// Inicializa GOB a partir do cookie
let GOB = parseInt(getCookie("gobValue")) || 0;
GOIABAS.textContent = "Goiabas: " + GOB;
let ROSA = parseInt(getCookie("rosaValue")) || 0;
GOIABAS.textContent = "Rosas: " + ROSA;

// Inicializa CBT a partir do cookie
let CBT = parseInt(getCookie("cbtValue")) || 0;
CHICOS.textContent = CBT + " Chicos";
let custochico = parseInt(getCookie("custochicoValue")) || 10;
btnchicos.textContent = "+1 Chico " + custochico + " Goiabas";

// Inicializa ZLL a partir do cookie
let ZLL = parseInt(getCookie("zllValue")) || 0;
ZELELES.textContent = ZLL + " Ze leles";
let custozelele = parseInt(getCookie("custozeleleValue")) || 100;
btnZELELES.textContent = "+1 Ze lele " + custozelele + " Goiabas";
let ZLL_BONUS = parseInt(getCookie("zllbonusValue")) || 7;

// Inicializa RS a partir do cookie
let RS = parseInt(getCookie("rsValue")) || 0;
ROSINHAS.textContent = RS + " Rosinhas";
let custorosinha = parseInt(getCookie("custorosinhaValue")) || 1000;
btnrosinha.textContent = "+1 Rosinha " + custorosinha + " Goiabas";

if (RS > 0){
    rosasdiv.style.display = 'block';
}



// Lista de áudios com peso
const audios = [
    { src: "mp3/ai-1763986035185.mp3", peso: 2 },
    { src: "mp3/ui-1763986055146.mp3", peso: 2 },
    { src: "mp3/clica-sua-safada-1763985977777.mp3", peso: 1 },
    { src: "mp3/aoooooooo-1763985941343.mp3", peso: 1 },
    //{ src: "mp3/mais-um-deu-soh-1763986010386.mp3", peso: 1 },
    { src: "mp3/olha-a-on-a-1763986084897.mp3", peso: 1 },
    { src: "mp3/goiabinha-da-boa-1763986826970.mp3", peso: 1 },
    { src: "mp3/eita-1763986860328.mp3", peso: 2 },
    { src: "", peso: 15 }
];

// Função para escolher aleatório ponderado
function escolherAudioPonderado(audios) {
    const totalPeso = audios.reduce((soma, a) => soma + a.peso, 0);
    let rand = Math.random() * totalPeso;
    for (let i = 0; i < audios.length; i++) {
        rand -= audios[i].peso;
        if (rand < 0) {
            return audios[i].src;
        }
    }
    return audios[0].src; // fallback
}


    // Funções de clique
    document.getElementById("Aperta").onclick = function () {
        GOB += 1;
        GOIABAS.textContent = "Goiabas: " + GOB;
        setCookie("gobValue", GOB);

        const aleatorio = escolherAudioPonderado(audios);
        
            audioPlayer.src = aleatorio;
            audioPlayer.volume = volumeControl.value;
            audioPlayer.play();
        
    };

    document.getElementById("Chico").onclick = function () {
        if (GOB >= custochico){
            GOB -= custochico;
            GOIABAS.textContent = "Goiabas: " + GOB;
            setCookie("gobValue", GOB);

            CBT += 1;
            custochico = Math.trunc(custochico * 1.25);
            CHICOS.textContent = CBT + " Chicos";
            btnchicos.textContent = "+1 Chico " + custochico + " Goiabas";

            setCookie("cbtValue", CBT);
            setCookie("custochicoValue", custochico);

            audioPlayer.src = "mp3/mais-um-deu-soh-1763986010386.mp3";
            audioPlayer.volume = volumeControl.value;
            audioPlayer.play();
        }
    };

       document.getElementById("Zelele").onclick = function () {
        if (GOB >= custozelele){
            GOB -= custozelele;
            GOIABAS.textContent = "Goiabas: " + GOB;
            setCookie("gobValue", GOB);

            ZLL += 1;
            custozelele = Math.trunc(custozelele * 1.25);
            ZELELES.textContent = ZLL + " Ze leles";
            btnZELELES.textContent = "+1 Ze lele " + custozelele + " Goiabas";

            setCookie("zllValue", ZLL);
            setCookie("custozeleleValue", custozelele);

            audioPlayer.src = "mp3/fala-parceiro-z-lele-1764017115514.mp3";
            audioPlayer.volume = volumeControl.value;
            audioPlayer.play();
        }
    };

    document.getElementById("Rosinha").onclick = function () {
        if (GOB >= custorosinha){
            GOB -= custorosinha;
            GOIABAS.textContent = "Goiabas: " + GOB;
            setCookie("gobValue", GOB);

            RS += 1;
            custorosinha = Math.trunc(custorosinha * 1.25);
            ROSINHAS.textContent = RS + " Rosinhas";
            btnrosinha.textContent = "+1 Rosinha " + custorosinha + " Goiabas";

            setCookie("rsValue", RS);
            setCookie("custorosinhaValue", custorosinha);
            rosasdiv.style.display = 'block';
        audioPlayer.src = "mp3/rosinha-meu-amor-1763995355051.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();
    };
};

setInterval(() => {
    GOB += CBT + (ZLL * ZLL_BONUS);
    GOBDPS = CBT + (ZLL * ZLL_BONUS);
    GOIABAS.textContent = "Goiabas: " + GOB;
    setCookie("gobValue", GOB);
    GOIABASDPS.textContent = "Goiabas per second: " + GOBDPS;

    ROSA += RS;
    ROSADPS = RS;
    ROSAS.textContent = "Rosas: " + ROSA;
    setCookie("rosaValue", ROSA);
    ROSASDPS.textContent = "Rosas per second: " + ROSADPS;
}, 1000);


btnConfig.addEventListener('click', () => {
    configWindow.style.display = 'block';
});

closeConfig.addEventListener('click', () => {
    configWindow.style.display = 'none';
});

// Exemplo: controla o volume do áudio
const audio = document.querySelector('audio');
const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

    const RESET = document.getElementById('reset');
    
    RESET.addEventListener('click', () => {
        // Zera os cookies
        CBT = 0;
        GOB = 0;
        custochico = 10;
        ZLL = 0;
        custozelele = 100;
        RS = 0;
        custorosinha = 1000;
        setCookie("gobValue", 0);
        setCookie("cbtValue", 0);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("rsValue", 0);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico

        // Atualiza os elementos da tela
        document.getElementById("Goiabas").textContent = "Goiabas: 0";
        document.getElementById("Chicos").textContent = "0 Chicos";
        document.getElementById("Chico").textContent = "+1 Chico 10 Goiabas";
        document.getElementById("Zeleles").textContent = "0 Ze leles";
        document.getElementById("Zelele").textContent = "+1 Ze lele 100 Goiabas";
        document.getElementById("Rosinhas").textContent = "0 Rosinhas";
        document.getElementById("Rosinha").textContent = "+1 Rosinha 1000 Goiabas";

        // Se você quiser, também pode resetar contadores por segundo
        // e qualquer outro estado do jogo
    });

});