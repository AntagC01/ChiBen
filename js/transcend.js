document.addEventListener("DOMContentLoaded", () => {

setInterval(() => {
    if (ascendvar >= objetivotranscend && objetivot != 1) {
        if (lingua == 'en') {
            showCustomAlert("You reached something only a few dudes ever reached. Now you must TRANSCEND!!!!!");
        }
        if (lingua == 'pt') {
            showCustomAlert("Você alcançou algo que apenas alguns alcançaram. Agora você deve TRANSCENDER!!!!!");
        }
        btntranscender.style.display = 'block';
        objetivot = 1;
    }
}, 2500);

document.getElementById("transcend").onclick = function () {
    transcendvar += 1;
    setCookie("transcendValue", transcendvar);
    btntranscend.style.display = 'none';
    transcend();
}

function transcend() {

    ascendvar = 0;
    objetivotranscend += 2;
    objetivot = 0;

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
    GLOBAL = 1; //bonus
    CLICK = 1 + (ascendvar); //bonus
    objetivo = 0;
    escalamento = 1.25 + (transcendvar * 0.025); //bonus
    CVL = 0;
    custocavalo = 35;
    objetivoascend = 10000000;
    CVL_BONUS = 0.1 + (ascendvar * 0.05);
    GLOBAL_ROSA = 1;
    MULTTRANS = 1 * (1 - (transcendvar * 0.07) + (SAN * 0.035));

    setCookie("multtransValue", MULTTRANS);
    setCookie("ascendValue", ascendvar);
    setCookie("objetivotranscendValue", objetivotranscend)
    setCookie("globalbonusrosaValue", GLOBAL_ROSA)
    setCookie("cvlbonusValue", CVL_BONUS);
    setCookie("escalamentoValue", escalamento);
    setCookie("clickValue", CLICK);
    setCookie("globalbonusValue", GLOBAL);
    setCookieBIG("gobValue", GOB);
    setCookie("cbtValue", CBT);
    setCookie("rsValue", RS);
    setCookie("cvlValue", 0);
    setCookie("zllValue", 0);
    setCookie("rosaValue", 0);
    setCookie("cbtmaValue", 0);
    setCookieBIG("objetivoascendValue", objetivoascend);


    setCookie("playPrestigio", 1);
    resetacustosebonus();
    resetaupgrades();

    location.reload();
}
});