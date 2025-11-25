document.addEventListener("DOMContentLoaded", () => {
alert ("Você é só um fazendeiro ladrão de goiabas que tem o sonho de ter 1 milhão de goiabas, essa é sua meta")
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

const upgrade1 = document.getElementById("Upgrade1")
const upgrade2 = document.getElementById("Upgrade2")
const upgrade3 = document.getElementById("Upgrade3")
const upgrade4 = document.getElementById("Upgrade4")
const upgrade5 = document.getElementById("Upgrade5")



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
let CBT_BONUS = parseInt(getCookie("cbtbonusValue")) || 1;

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

let GLOBAL = parseInt(getCookie("globalbonusValue")) || 1;


let up1 = parseInt(getCookie("up1Value")) || 0;
let up2 = parseInt(getCookie("up2Value")) || 0;
let up3 = parseInt(getCookie("up3Value")) || 0;
let up4 = parseInt(getCookie("up4Value")) || 0;
let up5 = parseInt(getCookie("up5Value")) || 0;

if (RS > 0){
    rosasdiv.style.display = 'block';
}



// Lista de áudios com peso
const audios = [
    { src: "mp3/ai-1763986035185.mp3", peso: 2 },
    { src: "mp3/ui-1763986055146.mp3", peso: 2 },
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
    return audios[0].src;
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

//tick global
setInterval(() => {
    GOBDPS = ((CBT * CBT_BONUS) + (ZLL * ZLL_BONUS)) * GLOBAL;
    GOB += GOBDPS;
    GOIABAS.textContent = "Goiabas: " + GOB;
    setCookie("gobValue", GOB);
    GOIABASDPS.textContent = "Goiabas per second: " + GOBDPS;

    ROSADPS = RS;
    ROSA += ROSADPS;
    ROSAS.textContent = "Rosas: " + ROSA;
    setCookie("rosaValue", ROSA);
    ROSASDPS.textContent = "Rosas per second: " + ROSADPS;
}, 1000);

setInterval(() => {
if (GOB >= 50 && up1 == 0){
    upgrade1.style.display = 'block';
}
if (ZLL >= 1 && up2 == 0){
    upgrade2.style.display = 'block';
}
if (GOB >= 500 && up3 == 0){
    upgrade3.style.display = 'block';
}
if (ROSA >= 50 && up4 == 0){
    upgrade4.style.display = 'block';
}
if (RS >= 10 && up5 == 0){
    upgrade5.style.display = 'block';
}

if (GOB >= 1000000)
{
    alert("Parabens, você chegou ao final do jogo, você comeu tanta goiaba que explodiu e cabo tudo");
    reseta();
}
}, 3000);

    document.getElementById("Upgrade1").onclick = function () {
        if (GOB >= 50){
            setCookie("up1Value", 1);
            setCookie("cbtbonusValue", CBT_BONUS * 2);
            CBT_BONUS = CBT_BONUS * 2;
            up1 = 1;
            upgrade1.style.display = 'none';
    };
};

    document.getElementById("Upgrade2").onclick = function () {
        if (ZLL >= 1){
            setCookie("up2Value", 1);
            setCookie("zllValue", ZLL - 1);
            ZLL -= 1;
            up2 = 1;
            upgrade2.style.display = 'none';
            ZELELES.textContent = ZLL + " Ze leles";
            alert("Veio uma onça e cumeu o ze lele :(")
    };
};

    document.getElementById("Upgrade3").onclick = function () {
        if (GOB >= 500){
            setCookie("up3Value", 1);
            setCookie("globalbonusValue", GLOBAL * 2);
            GLOBAL = GLOBAL * 2;
            up3 = 1;
            upgrade3.style.display = 'none';
    };
};

    document.getElementById("Upgrade4").onclick = function () {
        if (ROSA >= 50){
            setCookie("up4Value", 1);
            setCookie("globalbonusValue", GLOBAL * 3);
            GLOBAL = GLOBAL * 3;
            up4 = 1;
            upgrade4.style.display = 'none';
    };
};

    document.getElementById("Upgrade5").onclick = function () {
        if (RS >= 10){
            setCookie("up5Value", 1);
            setCookie("globalbonusValue", GLOBAL * 10);
            GLOBAL = GLOBAL * 10;
            up5 = 1;
            upgrade5.style.display = 'none';
    };
};
btnConfig.addEventListener('click', () => {
    configWindow.style.display = 'block';
});

closeConfig.addEventListener('click', () => {
    configWindow.style.display = 'none';
});

//controla o volume do áudio
const audio = document.querySelector('audio');
const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

const RESET = document.getElementById('reset');
    
function reseta(){
  // Zera os cookies
        GOB = 0;
        CBT = 0;
        custochico = 10;
        CBT_BONUS = 0;
        ZLL = 0;
        custozelele = 100;
        ZLL_BONUS = 0;
        RS = 0;
        ROSA = 0;
        ROSADPS = 0;
        custorosinha = 1000;
        GLOBAL = 1;

        setCookie("globalbonusValue",1)
        setCookie("gobValue", 0);
        setCookie("cbtValue", 0);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("rsValue", 0);
        setCookie("rosaValue", 0);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico


        setCookie("up1Value",0);
        setCookie("up2Value",0);
        setCookie("up3Value",0);
        setCookie("up4Value",0);
        setCookie("up5Value",0);
        // Atualiza os elementos da tela
        document.getElementById("Goiabas").textContent = "Goiabas: 0";
        document.getElementById("Chicos").textContent = "0 Chicos";
        document.getElementById("Chico").textContent = "+1 Chico 10 Goiabas";
        document.getElementById("Zeleles").textContent = "0 Ze leles";
        document.getElementById("Zelele").textContent = "+1 Ze lele 100 Goiabas";
        document.getElementById("Rosinhas").textContent = "0 Rosinhas";
        document.getElementById("Rosinha").textContent = "+1 Rosinha 1000 Goiabas";


        location.reload();
}
RESET.addEventListener('click', () => {
      reseta();
    });

});