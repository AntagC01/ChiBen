const Chicos = document.getElementById("ChicoBento");

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

// Inicializa CBC a partir do cookie
let CBC = parseInt(getCookie("cbcValue")) || 0;
Chicos.textContent = "Chico Bentos: " + CBC;

// Lista de áudios com peso
const audios = [
    { src: "mp3/ai-1763986035185.mp3", peso: 2 },
    { src: "mp3/ui-1763986055146.mp3", peso: 2 },
    { src: "mp3/clica-sua-safada-1763985977777.mp3", peso: 1 },
    { src: "mp3/aoooooooo-1763985941343.mp3", peso: 1 },
    { src: "mp3/mais-um-deu-soh-1763986010386.mp3", peso: 1 },
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

// --- dentro do onclick ---
document.getElementById("Aperta").onclick = function () {
    CBC += 1;
    Chicos.textContent = "Chico Bentos: " + CBC;
    setCookie("cbcValue", CBC);

    const aleatorio = escolherAudioPonderado(audios);
    const audio = new Audio(aleatorio);
    audio.play();
};
