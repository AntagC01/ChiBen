const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");
let girando = false;

const premios = [
    "Nada 😢",
    "Nheca de pitibiribas 😢",
    "Nothing 😢",
    "Ausência de algo 😢",
    "Presença do nada 😢",
    "Não 😢",
    "Negativo 😢",
    "Perdeu 😢"
];

const cores = [
    "#C62828",
    "#1389d7ff",
    "#C62828",
    "#1389d7ff",
    "#C62828",
    "#1389d7ff",
    "#C62828",
    "#1389d7ff",
];

const total = premios.length;
const angulo = (2 * Math.PI) / total;
let rotacao = 0;

function desenhar() {
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const raio = canvas.width / 2;

    for (let i = 0; i < total; i++) {
        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.arc(centroX, centroY, raio, i * angulo, (i + 1) * angulo);
        ctx.fillStyle = cores[i];
        ctx.fill();

        ctx.save();
        ctx.translate(centroX, centroY);
        ctx.rotate(i * angulo + angulo / 2);
        ctx.fillStyle = "black";
        ctx.font = `${raio * 0.078}px Arial`; // texto escala junto
        ctx.textAlign = "right";
        ctx.fillText(premios[i], raio - 20, 5);
        ctx.restore();
    }
}

function girar() {
    if (girando) return; // impede novo clique

    girando = true;

    const giro = Math.random() * 360 + 720;
    rotacao += giro;
    canvas.style.transform = `rotate(${rotacao}deg)`;

    audioPlayer.src = "mp3/gira.mp3";
    audioPlayer.volume = volumeControl.value;
    audioPlayer.play();

    setTimeout(() => {
        mostrarResultado();
    }, 6000);
}

function mostrarResultado() {
    const setor = 360 / total;

    // ângulo final da rotação
    let graus = rotacao % 360;

    // compensar: canvas começa na direita → ponteiro está no topo
    graus = (graus + 90) % 360;

    // inverter direção
    const ajustado = (360 - graus) % 360;

    const index = Math.floor(ajustado / setor);

    document.getElementById("resultado").innerText = "Resultado: " + premios[index];

    audioPlayer.src = "mp3/perde.mp3";
    audioPlayer.volume = volumeControl.value;
    audioPlayer.play();

    setTimeout(() => {
    girando = false; // libera novo giro
    }, 1300);
}
