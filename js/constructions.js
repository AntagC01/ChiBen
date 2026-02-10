document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("Chico").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (GOB < custochico) return;

            GOB -= custochico;
            CBT++;
            custochico = Math.trunc(custochico * escalamento);
            if (custochico == Math.trunc(custochico * escalamento)) {
                custochico += 1;
            }

            setCookieBIG("gobValue", GOB);
            setCookie("cbtValue", CBT);
            setCookie("custochicoValue", custochico);
        }
        tocarSom("compra", volumeControl.value);

    };

    document.getElementById("Zelele").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (GOB < custozelele) return;

            GOB -= custozelele;
            ZLL++;
            custozelele = Math.trunc(custozelele * escalamento);
            if (custozelele == Math.trunc(custozelele * escalamento)) {
                custozelele += 1;
            }

            setCookieBIG("gobValue", GOB);
            setCookie("zllValue", ZLL);
            setCookie("custozeleleValue", custozelele);
        }
        tocarSom("compra", volumeControl.value);
    };

    document.getElementById("Rosinha").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (GOB < custorosinha) return;

            GOB -= custorosinha;
            RS++;
            custorosinha = Math.trunc(custorosinha * escalamento);
            if (custorosinha == Math.trunc(custorosinha * escalamento)) {
                custorosinha += 1;
            }

            setCookieBIG("gobValue", GOB);
            setCookie("rsValue", RS);
            setCookie("custorosinhaValue", custorosinha);
        }
        rosasdiv.style.display = 'block';
        tocarSom("compra", volumeControl.value);

        rosasdiv.style.display = 'block';
    };

    document.getElementById("cavalo").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (ROSA < custocavalo) return;

            ROSA -= custocavalo;
            CVL++;
            custocavalo = Math.trunc(custocavalo * escalamento);
            if (custocavalo == Math.trunc(custocavalo * escalamento)) {
                custocavalo += 1;
            }

            setCookie("rosaValue", ROSA);
            setCookie("custocavaloValue", custocavalo);
            setCookie("cvlValue", CVL);
        }

        tocarSom("compra", volumeControl.value);

        rosasdiv.style.display = 'block';
    };

    document.getElementById("chicomalhado").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (GOB < custochicomalhado) return;

            GOB -= custochicomalhado;
            CBTMA++;
            custochicomalhado = Math.trunc(custochicomalhado * escalamento);
            if (custochicomalhado == Math.trunc(custochicomalhado * escalamento)) {
                custochicomalhado += 1;
            }

            setCookieBIG("gobValue", GOB);
            setCookie("cbtmaValue", CBTMA);
            setCookie("custochicomalhadoValue", custochicomalhado);
        }
        tocarSom("compra", volumeControl.value);

    };

    document.getElementById("monica").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (ROSA < customonica) return;

            ROSA -= customonica;
            MON++;
            customonica = Math.trunc(customonica * escalamento);
            if (customonica == Math.trunc(customonica * escalamento)) {
                customonica += 1;
            }

            setCookie("rosaValue", ROSA);
            setCookie("monicaValue", MON);
            setCookie("customonicaValue", customonica);
        }
        tocarSom("compra", volumeControl.value);

    };

    document.getElementById("cebolinha").onclick = function () {
        for (let i = 0; i < multcompra; i++) {
            if (MON < custocebolinha) return;

            MON -= custocebolinha;
            CEB++;
            custocebolinha = Math.trunc(custocebolinha * escalamento * 1.2);
            if (custocebolinha == Math.trunc(custocebolinha * escalamento * 1.2)) {
                custocebolinha += 1;
            }

            setCookie("monicaValue", MON);
            setCookie("cebolinhaValue", CEB);
            setCookie("custocebolinhaValue", custocebolinha);
        }
        tocarSom("compra", volumeControl.value);

    };

    document.getElementById("sansao").onclick = function () {
        /*
        for (let i = 0; i < multcompra; i++) {
            if (custosansao > CBT ||
                custosansao > ZLL ||
                custosansao > RS ||
                custosansao > CVL ||
                custosansao > CBTMA ||
                custosansao > MON ||
                custosansao > CEB) return;

            CBT -= custosansao;
            ZLL -= custosansao;
            RS -= custosansao;
            CVL -= custosansao;
            CBTMA -= custosansao;
            MON -= custosansao;
            CEB -= custosansao;
            SAN++;
            custosansao = Math.trunc(custosansao * 1.5);
            MULTTRANS = 1 * (1 - (transcendvar * 0.07) + (SAN * 0.035));

            setCookie("multtransValue", MULTTRANS);
            setCookie("sansaoValue", SAN);
            setCookie("custosansaoValue", custosansao);
        }
        tocarSom("compra", volumeControl.value);
        */

    };


    document.getElementById("multcompra").onclick = function () {
        if (multcompra == 1) {
            multcompra = 5;
            btnmult.textContent = 'x' + multcompra;
        }
        else if (multcompra == 5) {
            multcompra = 10;
            btnmult.textContent = 'x' + multcompra;
        }
        else if (multcompra == 10) {
            multcompra = 100;
            btnmult.textContent = 'x' + multcompra;
        }
        else if (multcompra == 100) {
            multcompra = 1;
            btnmult.textContent = 'x' + multcompra;
        }
    }

    setInterval(() => {
        if (ascendvar >= 2) {
            CBMABLOCK.style.display = 'flex';
        }
        if (transcendvar >= 1) {
            MONICABLOCK.style.display = 'flex';
            CEBOLINHABLOCK.style.display = 'flex';
        }
        if (transcendvar >= 2) {
            SANSAOBLOCK.style.display = 'flex';
        }
    }, 2500);

});