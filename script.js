document.addEventListener("DOMContentLoaded", () => {

    //==================== INITIAL ALERT ====================
    showCustomAlert("You are just a guava thief farmer dreaming of 1 million guavas, this is your goal");

    //==================== ELEMENTS ====================
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

    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggleSidebar");

    const paginaconquistas = document.getElementById("paginaconquistas");
    const btnconquistas = document.getElementById("btnconquistas");
    const fecharconquistas = document.getElementById("fecharconquistas");

    const paginaascension = document.getElementById("paginaascension");
    const btnascension = document.getElementById("btnascension");
    const fecharascension = document.getElementById("fecharascension");


    //Ascension
    const btnascend = document.getElementById("ascend");

    // Upgrades
    const upgrade1 = document.getElementById("Upgrade1");
    const upgrade2 = document.getElementById("Upgrade2");
    const upgrade3 = document.getElementById("Upgrade3");
    const upgrade4 = document.getElementById("Upgrade4");
    const upgrade5 = document.getElementById("Upgrade5");
    const upgrade6 = document.getElementById("Upgrade6");
    const upgrade7 = document.getElementById("Upgrade7");
    const upgrade8 = document.getElementById("Upgrade8");

    toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    });
    // Achievements
    const cqt1 = document.getElementById("cqt1");
    const cqt2 = document.getElementById("cqt2");
    const cqt3 = document.getElementById("cqt3");
    const cqt4 = document.getElementById("cqt4");
    const cqt5 = document.getElementById("cqt5");
    const cqt6 = document.getElementById("cqt6");
    const cqt7 = document.getElementById("cqt7");
    const totalcqtdiv = document.getElementById("totalcqtdiv");

    btnconquistas.addEventListener("click", () => {
    paginaconquistas.classList.add("show");
    });

    fecharconquistas.addEventListener("click", () => {
    paginaconquistas.classList.remove("show");
    });

    btnascension.addEventListener("click", () => {
    paginaascension.classList.add("show");
    });

    fecharascension.addEventListener("click", () => {
    paginaascension.classList.remove("show");
    });
    //==================== COOKIES ====================
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";")[0];
        return null;
    }

    function setCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
    }

    //==================== INITIAL VARIABLES ====================
    let GOB = parseInt(getCookie("gobValue")) || 0;
    let ROSA = parseInt(getCookie("rosaValue")) || 0;

    let CBT = parseInt(getCookie("cbtValue")) || 0;
    let custochico = parseInt(getCookie("custochicoValue")) || 10;
    let CBT_BONUS = parseInt(getCookie("cbtbonusValue")) || 1;

    let ZLL = parseInt(getCookie("zllValue")) || 0;
    let custozelele = parseInt(getCookie("custozeleleValue")) || 100;
    let ZLL_BONUS = parseInt(getCookie("zllbonusValue")) || 7;

    let RS = parseInt(getCookie("rsValue")) || 0;
    let custorosinha = parseInt(getCookie("custorosinhaValue")) || 1000;

    let GLOBAL = parseInt(getCookie("globalbonusValue")) || 1;
    let CLICK = parseInt(getCookie("clickValue")) || 1;

    let escalamento = parseFloat(getCookie("escalamentoValue")) || 1.25;

    let ascendvar = parseInt(getCookie("ascendValue")) || 0;

    // Upgrades active
    let up1 = parseInt(getCookie("up1Value")) || 0;
    let up2 = parseInt(getCookie("up2Value")) || 0;
    let up3 = parseInt(getCookie("up3Value")) || 0;
    let up4 = parseInt(getCookie("up4Value")) || 0;
    let up5 = parseInt(getCookie("up5Value")) || 0;
    let up6 = parseInt(getCookie("up6Value")) || 0;
    let up7 = parseInt(getCookie("up7Value")) || 0;
    let up8 = parseInt(getCookie("up8Value")) || 0;

    // Achievements
    let vcqt1 = parseInt(getCookie("vcqt1Value")) || 0;
    let vcqt2 = parseInt(getCookie("vcqt2Value")) || 0;
    let vcqt3 = parseInt(getCookie("vcqt3Value")) || 0;
    let vcqt4 = parseInt(getCookie("vcqt4Value")) || 0;
    let vcqt5 = parseInt(getCookie("vcqt5Value")) || 0;
    let vcqt6 = parseInt(getCookie("vcqt6Value")) || 0;
    let vcqt7 = parseInt(getCookie("vcqt7Value")) || 0;
    let totalcqt = parseInt(getCookie("totalcqtValue")) || 0;
    let objetivo = 0;

    if (RS > 0) rosasdiv.style.display = 'block';

    //==================== AUDIO ====================
    const audios = [
        { src: "mp3/click_satisfatorio.wav", peso: 2 }
        //{ src: "mp3/ui-1763986055146.mp3", peso: 2 },
    ];

    function escolherAudioPonderado(lista) {
        const total = lista.reduce((s, a) => s + a.peso, 0);
        let rand = Math.random() * total;
        for (let a of lista) {
            rand -= a.peso;
            if (rand < 0) return a.src;
        }
        return lista[0].src;
    }

    //==================== CLICKS ====================
    document.getElementById("Aperta").onclick = function () {
        GOB += CLICK;
        GOIABAS.textContent = "Guavas: " + GOB;
        setCookie("gobValue", GOB);

        const audio = escolherAudioPonderado(audios);
        audioPlayer.src = audio;
        audioPlayer.volume = volumeControl.value * 0.85;
        audioPlayer.play();
    };

    document.getElementById("Chico").onclick = function () {
        if (GOB < custochico) return;

        GOB -= custochico;
        CBT++;
        custochico = Math.trunc(custochico * escalamento) || 1;
        if (custochico == Math.trunc(custochico * escalamento)){
            custochico += 1;
        }

        GOIABAS.textContent = "Guavas: " + GOB;
        CHICOS.textContent = CBT + " Chicos";
        btnchicos.textContent = "+1 Chico " + custochico + " Guavas";

        setCookie("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("custochicoValue", custochico);

        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

        //audioPlayer.src = "mp3/mais-um-deu-soh-1763986010386.mp3";
        //audioPlayer.volume = volumeControl.value;
        //audioPlayer.play();
    };

    document.getElementById("Zelele").onclick = function () {
        if (GOB < custozelele) return;

        GOB -= custozelele;
        ZLL++;
        custozelele = Math.trunc(custozelele * escalamento);
        if (custozelele == Math.trunc(custozelele * escalamento)){
            custozelele += 1;
        }

        GOIABAS.textContent = "Guavas: " + GOB;
        ZELELES.textContent = ZLL + " Ze leles";
        btnZELELES.textContent = "+1 Ze lele " + custozelele + " Guavas";

        setCookie("gobValue", GOB);
        setCookie("zllValue", ZLL);
        setCookie("custozeleleValue", custozelele);

        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();
    };

    document.getElementById("Rosinha").onclick = function () {
        if (GOB < custorosinha) return;

        GOB -= custorosinha;
        RS++;
        custorosinha = Math.trunc(custorosinha * escalamento) || 1;
        if (custorosinha == Math.trunc(custorosinha * escalamento)){
            custorosinha += 1;
        }

        GOIABAS.textContent = "Guavas: " + GOB;
        ROSINHAS.textContent = RS + " Rosinhas";
        btnrosinha.textContent = "+1 Rosinha " + custorosinha + " Guavas";

        setCookie("gobValue", GOB);
        setCookie("rsValue", RS);
        setCookie("custorosinhaValue", custorosinha);

        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

        rosasdiv.style.display = 'block';
    };

    //==================== AUTOMATIC PRODUCTION ====================
    setInterval(() => {
        let GOBDPS = ((CBT * CBT_BONUS) + (ZLL * ZLL_BONUS)) * GLOBAL;
        GOB += GOBDPS;

        GOIABAS.textContent = "Guavas: " + GOB;
        GOIABASDPS.textContent = "Guavas per second: " + GOBDPS;

        setCookie("gobValue", GOB);

        let ROSADPS = RS;
        ROSA += ROSADPS;

        ROSAS.textContent = "Rosas: " + ROSA;
        ROSASDPS.textContent = "Rosas per second: " + ROSADPS;

        setCookie("rosaValue", ROSA);

        CHICOS.textContent = CBT + " Chicos";
        btnchicos.textContent = "+1 Chico " + custochico + " Guavas";
        ZELELES.textContent = ZLL + " Ze leles";
        btnZELELES.textContent = "+1 Ze lele " + custozelele + " Guavas";
        ROSINHAS.textContent = RS + " Rosinhas";
        btnrosinha.textContent = "+1 Rosinha " + custorosinha + " Guavas";
    }, 1000);

    //==================== ACHIEVEMENTS / UPGRADES ====================
setInterval(() => {
if (GOB >= 80 && up1 == 0){
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
if (GOB >= 30 && up6 == 0){
    upgrade6.style.display = 'block';
}
if (GOB >= 750 && up7 == 0){
    upgrade7.style.display = 'block';
}
if (GOB >= 1000000 && objetivo != 1)
{
    showCustomAlert("Congratulations, you reached the end of the game, you ate so many guavas that you exploded and everything ended. Now you must ASCEND!!!!!");
    btnascend.style.display = 'block';
    objetivo = 1;
}
if (ZLL >= 15 && up8 == 0 && up2 == 1){
    upgrade8.style.display = 'block';
}
if(GOB >= 1 || vcqt1 == 1){
    cqt1.style.display = 'block';
    if(vcqt1 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("First little guava");
        vcqt1 = 1;
        setCookie("vcqt1Value",1)
    }
}
if(CBT >= 1 || vcqt2 == 1){
    cqt2.style.display = 'block';
    if(vcqt2 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("Cloning chicos");
        vcqt2 = 1;
        setCookie("vcqt2Value",1)
    }
}
if(ZLL >= 1 || vcqt3 == 1){
    cqt3.style.display = 'block';
    if(vcqt3 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("Best Friend");
        vcqt3 = 1;
        setCookie("vcqt3Value",1)
    }
}
if(up2 == 1 || vcqt4 == 1){
    cqt4.style.display = 'block';
    if(vcqt4 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("Goodbye best friend :(");
        vcqt4 = 1;
        setCookie("vcqt4Value",1)
    }
}
if(up8 == 1 || vcqt5 == 1){
    cqt5.style.display = 'block';
    if(vcqt5 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("Welcome back Ze lele");
        vcqt5 = 1;
        setCookie("vcqt5Value",1)
    }
}
if(RS >= 1 || vcqt6 == 1){
    cqt6.style.display = 'block';
    if(vcqt6 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("First little rose");
        vcqt6 = 1;
        setCookie("vcqt6Value",1)
    }
}
if(RS >= 10 || vcqt7 == 1){
    cqt7.style.display = 'block';
    if(vcqt7 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        mostrarConquista("Roses for days");
        vcqt7 = 1;
        setCookie("vcqt7Value",1)
    }
}

totalcqtdiv.textContent = totalcqt + " of 7 achieved";
    }, 2500);

    document.getElementById("Upgrade1").onclick = function () {
        if (GOB >= 80){
            setCookie("up1Value", 1);
            setCookie("cbtbonusValue", CBT_BONUS * 2);
            CBT_BONUS = CBT_BONUS * 2;
            up1 = 1;
            upgrade1.style.display = 'none';
    }
};

    document.getElementById("Upgrade2").onclick = function () {
        if (ZLL >= 1){
            setCookie("up2Value", 1);
            setCookie("zllValue", ZLL - 1);
            ZLL -= 1;
            up2 = 1;
            upgrade2.style.display = 'none';
            ZELELES.textContent = ZLL + " Ze leles";
            showCustomAlert("A jaguar came and ate Ze Lele :(")
    }
};

    document.getElementById("Upgrade3").onclick = function () {
        if (GOB >= 500){
            GOB -= 500;
            setCookie("up3Value", 1);
            setCookie("globalbonusValue", GLOBAL * 2);
            GLOBAL = GLOBAL * 2;
            up3 = 1;
            upgrade3.style.display = 'none';
    }
};

    document.getElementById("Upgrade4").onclick = function () {
        if (ROSA >= 50){
            ROSA -= 50;
            setCookie("up4Value", 1);
            setCookie("globalbonusValue", GLOBAL * 3);
            GLOBAL = GLOBAL * 3;
            up4 = 1;
            upgrade4.style.display = 'none';
    }
};

    document.getElementById("Upgrade5").onclick = function () {
        if (RS >= 10){
            setCookie("up5Value", 1);
            setCookie("globalbonusValue", GLOBAL * 10);
            GLOBAL = GLOBAL * 10;
            up5 = 1;
            upgrade5.style.display = 'none';
    }
};

    document.getElementById("Upgrade6").onclick = function () {
        if (GOB >= 30){
            GOB -= 30;
            setCookie("up6Value", 1);
            setCookie("clickValue", CLICK * 2);
            CLICK = CLICK * 2;
            up6 = 1;
            upgrade6.style.display = 'none';
    }
};

    document.getElementById("Upgrade7").onclick = function () {
        if (GOB >= 750){
            GOB -= 750;
            setCookie("up7Value", 1);
            setCookie("clickValue", CLICK * 10);
            CLICK = CLICK * 10;
            up7 = 1;
            upgrade7.style.display = 'none';
    }
};

document.getElementById("Upgrade8").onclick = function () {
    if (ZLL >= 15){
        setCookie("zllValue", ZLL + 1);
        ZLL += 1;
        setCookie("up8Value", 1);
        ZLL_BONUS *= 2;
        setCookie("zllbonusValue", ZLL_BONUS);
        up8 = 1;
        upgrade8.style.display = 'none';
        showCustomAlert("You beat the jaguar until it spit Ze Lele back :) (2x Ze Lele production)")
    }
};

    function conquista(id, div, texto) {
        div.style.display = 'block';

        if (eval(`vcqt${id}`) === 0) {
            totalcqt++;
            setCookie("totalcqtValue", totalcqt);

            mostrarConquista(texto);

            eval(`vcqt${id} = 1`);
            setCookie(`vcqt${id}Value`, 1);
        }
    }

    function mostrarConquista(texto) {
        const popup = document.getElementById("conquistaPopup");
        const textoElemento = document.getElementById("conquistaTexto");

        textoElemento.textContent = texto;
        popup.classList.add("show");
        
        audioPlayer.src = "mp3/achievement.mp3";
        audioPlayer.volume = volumeControl.value * 0.85;
        audioPlayer.play();

        setTimeout(() => popup.classList.remove("show"), 5000);
    }

    document.getElementById("ascend").onclick = function () {
        ascendvar += 1;
        setCookie("ascendValue",ascendvar);
        escalamento -= 0.02;
        setCookie("escalamentoValue",escalamento);
        btnascend.style.display = 'none';
        ascend();
    }

    //==================== CONFIG ====================
    btnConfig.addEventListener('click', () => configWindow.style.display = 'block');
    closeConfig.addEventListener('click', () => configWindow.style.display = 'none');

    const audio = document.querySelector("audio");
    const volumeControl = document.getElementById("volume");
    volumeControl.addEventListener("input", () => audio.volume = volumeControl.value);

    //==================== RESET ====================
    const RESET = document.getElementById("reset");

    function reseta() {
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
        CLICK = 1;
        ascendvar = 0;
        escalamento = 1.25;


        setCookie("escalamentoValue",1.25);
        setCookie("clickValue",1);
        setCookie("globalbonusValue",1);
        setCookie("gobValue", 0);
        setCookie("cbtValue", 0);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("zllbonusValue", 7);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("rsValue", 0);
        setCookie("rosaValue", 0);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico


        setCookie("up1Value",0);
        setCookie("up2Value",0);
        setCookie("up3Value",0);
        setCookie("up4Value",0);
        setCookie("up5Value",0);
        setCookie("up6Value",0);
        setCookie("up7Value",0);
        setCookie("up8Value",0);

        setCookie("vcqt1Value",0);
        setCookie("vcqt2Value",0);
        setCookie("vcqt3Value",0);
        setCookie("vcqt4Value",0);
        setCookie("vcqt5Value",0);
        setCookie("vcqt6Value",0);
        setCookie("vcqt7Value",0);
        setCookie("totalcqtValue",0);

        setCookie("ascendValue",0);
        // Atualiza os elementos da tela
        document.getElementById("Goiabas").textContent = "Guavas: 0";
        document.getElementById("Chicos").textContent = "0 Chicos";
        document.getElementById("Chico").textContent = "+1 Chico 10 Guavas";
        document.getElementById("Zeleles").textContent = "0 Zeleles";
        document.getElementById("Zelele").textContent = "+1 Zelele 100 Guavas";
        document.getElementById("Rosinhas").textContent = "0 Rosinhas";
        document.getElementById("Rosinha").textContent = "+1 Rosinha 1000 Guavas";
        
        location.reload();
    }

    RESET.addEventListener("click", reseta);

    function ascend() {
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
        CLICK = 1 + (ascendvar + 1);
        objetivo = 0;

        setCookie("clickValue",CLICK);
        setCookie("globalbonusValue",1);
        setCookie("gobValue", 0);
        setCookie("cbtValue", 0);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("zllbonusValue", 7);
        setCookie("rsValue", 0);
        setCookie("rosaValue", 0);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico


        setCookie("up1Value",0);
        setCookie("up2Value",0);
        setCookie("up3Value",0);
        setCookie("up4Value",0);
        setCookie("up5Value",0);
        setCookie("up6Value",0);
        setCookie("up7Value",0);
        setCookie("up8Value",0);

        // Atualiza os elementos da tela
        document.getElementById("Goiabas").textContent = "Guavas: 0";
        document.getElementById("Chicos").textContent = "0 Chicos";
        document.getElementById("Chico").textContent = "+1 Chico 10 Guavas";
        document.getElementById("Zeleles").textContent = "0 Zeleles";
        document.getElementById("Zelele").textContent = "+1 Zelele 100 Guavas";
        document.getElementById("Rosinhas").textContent = "0 Rosinhas";
        document.getElementById("Rosinha").textContent = "+1 Rosinha 1000 Guavas";
        
        location.reload();
        
    }
});

 function showCustomAlert(message) {
    document.getElementById('customAlertMessage').textContent = message;
    document.getElementById('customAlertOverlay').style.display = 'flex';
  }

  function closeCustomAlert() {
    document.getElementById('customAlertOverlay').style.display = 'none';
  }