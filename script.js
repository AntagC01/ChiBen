document.addEventListener("DOMContentLoaded", () => {
const GOIABAS = document.getElementById("Goiabas");
const GOIABASDPS = document.getElementById("Goiabasdps");
const CHICOS = document.getElementById("Chicos");
const btnchicos = document.getElementById("Chico");
const ROSINHAS = document.getElementById("Rosinhas");
const btnrosinha = document.getElementById("Rosinha");

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

// Inicializa CBT a partir do cookie
let CBT = parseInt(getCookie("cbtValue")) || 0;
CHICOS.textContent = CBT + " Chicos";
let custochico = parseInt(getCookie("custochicoValue")) || 10;
btnchicos.textContent = "+1 Chico " + custochico + " Goiabas";

// Inicializa RS a partir do cookie
let RS = parseInt(getCookie("rsValue")) || 0;
ROSINHAS.textContent = RS + " Rosinhas";


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

    document.getElementById("Rosinha").onclick = function () {
        RS += 1;
        ROSINHAS.textContent = RS + " Rosinhas";
        setCookie("rsValue", RS);
        // nenhum som aqui

        audioPlayer.src = "mp3/rosinha-meu-amor-1763995355051.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();
    };

setInterval(() => {
    GOB += CBT;
    GOBDPS = CBT;
    GOIABAS.textContent = "Goiabas: " + GOB;
    setCookie("gobValue", GOB);
    GOIABASDPS.textContent = "Goiabas per second: " + GOBDPS;
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
        setCookie("gobValue", 0);
        setCookie("cbtValue", 0);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("rsValue", 0);

        // Atualiza os elementos da tela
        document.getElementById("Goiabas").textContent = "Goiabas: 0";
        document.getElementById("Chicos").textContent = "0 Chicos";
        document.getElementById("Rosinhas").textContent = "0 Rosinhas";
        document.getElementById("Chico").textContent = "+1 Chico 10 Goiabas";

        // Se você quiser, também pode resetar contadores por segundo
        // e qualquer outro estado do jogo
    });

});