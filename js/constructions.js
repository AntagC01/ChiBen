 document.addEventListener("DOMContentLoaded", () => {
 
 document.getElementById("Chico").onclick = function () {
        for (let i = 0; i < multcompra; i++)
        {
        if (GOB < custochico) return;

        GOB -= custochico;
        CBT++;
        custochico = Math.trunc(custochico * escalamento) || 1;
        if (custochico == Math.trunc(custochico * escalamento)){
            custochico += 1;
        }

        setCookie("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("custochicoValue", custochico);
        }
        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

    };

    document.getElementById("Zelele").onclick = function () {
        for (let i = 0; i < multcompra; i++)
        {
        if (GOB < custozelele) return;

        GOB -= custozelele;
        ZLL++;
        custozelele = Math.trunc(custozelele * escalamento);
        if (custozelele == Math.trunc(custozelele * escalamento)){
            custozelele += 1;
        }

        setCookie("gobValue", GOB);
        setCookie("zllValue", ZLL);
        setCookie("custozeleleValue", custozelele);
        }
        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();
    };

    document.getElementById("Rosinha").onclick = function () {
        for (let i = 0; i < multcompra; i++)
        {
        if (GOB < custorosinha) return;

        GOB -= custorosinha;
        RS++;
        custorosinha = Math.trunc(custorosinha * escalamento) || 1;
        if (custorosinha == Math.trunc(custorosinha * escalamento)){
            custorosinha += 1;
        }

        setCookie("gobValue", GOB);
        setCookie("rsValue", RS);
        setCookie("custorosinhaValue", custorosinha);
        }
        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

        rosasdiv.style.display = 'block';
    };

    document.getElementById("cavalo").onclick = function () {
        for (let i = 0; i < multcompra; i++)
        {
        if (ROSA < custocavalo) return;

        ROSA -= custocavalo;
        CVL++;
        custocavalo = Math.trunc(custocavalo * escalamento) || 1;
        if (custocavalo == Math.trunc(custocavalo * escalamento)){
            custocavalo += 1;
        }

        setCookie("rosaValue", ROSA);
        setCookie("custocavaloValue", custocavalo);
        setCookie("cvlValue", CVL);
        }

        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

        rosasdiv.style.display = 'block';
    };

    document.getElementById("chicomalhado").onclick = function () {
        for (let i = 0; i < multcompra; i++)
        {
        if (GOB < custochicomalhado) return;

        GOB -= custochicomalhado;
        CBTMA++;
        custochicomalhado = Math.trunc(custochicomalhado * escalamento) || 1;
        if (custochicomalhado == Math.trunc(custochicomalhado * escalamento)){
            custochicomalhado += 1;
        }

        setCookie("gobValue", GOB);
        setCookie("cbtmaValue", CBTMA);
        setCookie("custochicomalhadoValue", custochicomalhado);
        }
        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

    };


    document.getElementById("multcompra").onclick = function () {
        if(multcompra == 1){
            multcompra = 5;
            btnmult.textContent = 'x' + multcompra;
        }
        else if(multcompra == 5){
            multcompra = 10;
            btnmult.textContent = 'x' + multcompra;
        }
        else if(multcompra == 10){
            multcompra = 100;
            btnmult.textContent = 'x' + multcompra;
        }
        else if(multcompra == 100){
            multcompra = 1;
            btnmult.textContent = 'x' + multcompra;
        }
    }

setInterval(() => {
if (ascendvar >= 2){
    CBMABLOCK.style.display = 'flex';
}
if (transcendvar >= 1){
    MONICABLOCK.style.display = 'flex';
}
    }, 2500);

});