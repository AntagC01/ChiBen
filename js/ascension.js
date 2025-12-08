document.addEventListener("DOMContentLoaded", () => {

    if (getCookie("playPrestigio") == 1) {
        // Toca o som
        somprestigio();

        // Limpa o cookie para não tocar de novo
        setCookie("playPrestigio", 0); // define cookie expirado
    }
    setInterval(() => {
        if (GOB >= objetivoascend && objetivo != 1) {
            if (lingua == 'en') {
                showCustomAlert("Congratulations, you ate so many guavas that you exploded and everything ended. Now you must ASCEND!!!!!");
            }
            if (lingua == 'pt') {
                showCustomAlert("Parabéns, você comeu tantas goiabas que explodiu e tudo acabou. Agora você deve ASCENDER!!!!!");
            }
            btnascend.style.display = 'block';
            objetivo = 1;
        }
    }, 2500);

    document.getElementById("ascend").onclick = function () {
        ascendvar += 1;
        setCookie("ascendValue", ascendvar);
        btnascend.style.display = 'none';
        ascend();
    }

    function ascend() {
        // Zera os cookies
        GOB = 0 + (ascendvar * 200);
        CBT = ascendvar * 3;
        custochico = 10;
        CBT_BONUS = 0;
        ZLL = 0;
        custozelele = 100;
        ZLL_BONUS = 0;
        RS = ascendvar;
        ROSA = 0;
        ROSADPS = 0;
        custorosinha = 1000;
        CBTMA = 0;
        CBTMA_BONUS = 100;
        custochicomalhado = 10000000;
        GLOBAL = 1 + (ascendvar * 0.5); //bonus
        CLICK = 1 + (ascendvar); //bonus
        objetivo = 0;
        escalamento -= 0.02; //bonus
        if (escalamento < 1.1) {
            escalamento = 1.1;
        }
        CVL = 0;
        custocavalo = 35;
        objetivoascend = 10000000 * (5 ** ascendvar);
        CVL_BONUS = 0.1 + (ascendvar * 0.05);
        GLOBAL_ROSA = ascendvar * 2;


        setCookie("globalbonusrosaValue", GLOBAL_ROSA)
        setCookie("cvlbonusValue", CVL_BONUS);
        setCookie("cvlValue", 0);
        setCookie("custocavaloValue", 35);
        setCookie("escalamentoValue", escalamento);
        setCookie("clickValue", CLICK);
        setCookie("globalbonusValue", GLOBAL);
        setCookieBIG("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("zllValue", 0);
        setCookie("rsValue", RS);
        setCookie("rosaValue", 0);
        setCookie("cbtmaValue", 0);
        setCookieBIG("objetivoascendValue", objetivoascend);

        resetacustosebonus();
        resetaupgrades();

        setCookie("playPrestigio", 1);
        location.reload();  // só vai executar depois que o som terminar

    }
});

function somprestigio(callback) {
    audioPlayer.src = "mp3/prestigio.mp3";
    audioPlayer.volume = volumeControl.value;
    audioPlayer.play();
}