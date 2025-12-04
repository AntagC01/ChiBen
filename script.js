document.addEventListener("DOMContentLoaded", () => {

    let lingua = getCookie("lingua") || 'en';
    const btnlingua = document.getElementById("trocalingua");
    
    const btnmult = document.getElementById("multcompra");
    //==================== ELEMENTS ====================
    const FAZENDINHA = document.getElementById("fazendinha")
    const GOIABAS = document.getElementById("Goiabas");
    const GOIABASDPS = document.getElementById("Goiabasdps");
    const CHICOS = document.getElementById("Chicos");
    const btnchicos = document.getElementById("Chico");
    const ZELELES = document.getElementById("Zeleles");
    const btnZELELES = document.getElementById("Zelele");
    const ROSINHAS = document.getElementById("Rosinhas");
    const btnrosinha = document.getElementById("Rosinha");
    const CAVALOS = document.getElementById("cavalos");
    const btncavalo = document.getElementById("cavalo");

    const MONICABLOCK = document.getElementById("MONICABLOCK");
    const MONICAS = document.getElementById("monicas");
    const btnmonica = document.getElementById("monica");

    const CBMABLOCK = document.getElementById("CBMABLOCK");
    const CHICOSMA = document.getElementById("chicomalhados");
    const btnchicosMA = document.getElementById("chicomalhado");

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

    const paginastats = document.getElementById("paginastats");
    const btnstats = document.getElementById("btnstats");
    const fecharstats = document.getElementById("fecharstats");

    const paginatranscend = document.getElementById("paginatranscend");
    const btntranscend = document.getElementById("btntranscend");
    const fechartranscend = document.getElementById("fechartranscend");

    //Transcend
    const btntranscender = document.getElementById("transcend");
    const totaltranscend = document.getElementById("totaltranscend");
    const objetivotranscendhtml = document.getElementById("objetivotranscender");
    const tcd1 = document.getElementById("tcdbonus1");
    const tcd2 = document.getElementById("tcdbonus2");
    const tcd3 = document.getElementById("tcdbonus3");
    const tcd4 = document.getElementById("tcdbonus4");


    //Ascension
    const btnascend = document.getElementById("ascend");
    const totalascension = document.getElementById("totalascension");
    const objetivoascender = document.getElementById("objetivoascender");
    const acdb1 = document.getElementById("acdbonus1");
    const acdb2 = document.getElementById("acdbonus2");
    const acdb3 = document.getElementById("acdbonus3");
    const acdb4 = document.getElementById("acdbonus4");
    const acdb5 = document.getElementById("acdbonus5");
    const acdb6 = document.getElementById("acdbonus6");
    const acdb7 = document.getElementById("acdbonus7");
    const acdb8 = document.getElementById("acdbonus8");

    // Upgrades
    const upgrade1 = document.getElementById("Upgrade1");
    const upgrade2 = document.getElementById("Upgrade2");
    const upgrade3 = document.getElementById("Upgrade3");
    const upgrade4 = document.getElementById("Upgrade4");
    const upgrade5 = document.getElementById("Upgrade5");
    const upgrade6 = document.getElementById("Upgrade6");
    const upgrade7 = document.getElementById("Upgrade7");
    const upgrade8 = document.getElementById("Upgrade8");
    const upgrade9 = document.getElementById("Upgrade9");
    const upgrade10 = document.getElementById("Upgrade10");
    const upgrade11 = document.getElementById("Upgrade11");
    const upgrade12 = document.getElementById("Upgrade12");

    //stats
    const stt1 = document.getElementById("stt1");
    const stt2 = document.getElementById("stt2");
    const stt3 = document.getElementById("stt3");
    const stt4 = document.getElementById("stt4");
    const stt5 = document.getElementById("stt5");
    const stt6 = document.getElementById("stt6");
    const stt7 = document.getElementById("stt7");
    const stt8 = document.getElementById("stt8");

    let BONUSCAVALO = 0;
    let CBTPSunitario = 0;
    let CBTPS = 0;
    let ZLLPS = 0;
    let ZLLPSunitario = 0;
    let CBTMAPS = 0;
    let CBTMAPSunitario = 0;
    let ROSADPS = 0;
    let ROSADPSunitario = 0;


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
    const cqt8 = document.getElementById("cqt8");
    const cqt9 = document.getElementById("cqt9");
    const cqt10 = document.getElementById("cqt10");
    const cqt11 = document.getElementById("cqt11");
    const cqt12 = document.getElementById("cqt12");
    const cqt13 = document.getElementById("cqt13");
    const cqt14 = document.getElementById("cqt14");
    const cqt15 = document.getElementById("cqt15");
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

    btnstats.addEventListener("click", () => {
    paginastats.classList.add("show");
    });

    fecharstats.addEventListener("click", () => {
    paginastats.classList.remove("show");
    });

    btntranscend.addEventListener("click", () => {
    paginatranscend.classList.add("show");
    });

    fechartranscend.addEventListener("click", () => {
    paginatranscend.classList.remove("show");
    });
    //==================== COOKIES ====================
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";")[0];
        return null;
    }

    function setCookie(name, value) {
    const anos = 10;
    const maxAge = anos * 365 * 24 * 60 * 60; 
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
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

    let CVL = parseInt(getCookie("cvlValue")) || 0;
    let custocavalo = parseInt(getCookie("custocavaloValue")) || 35;
    let CVL_BONUS = parseFloat(getCookie("cvlbonusValue")) || 0.1;

    let CBTMA = parseInt(getCookie("cbtmaValue")) || 0;
    let custochicomalhado = parseInt(getCookie("custochicomalhadoValue")) || 10000000;
    let CBTMA_BONUS = parseInt(getCookie("cbtmabonusValue")) || 100;

    let GLOBAL = parseFloat(getCookie("globalbonusValue")) || 1;
    let GLOBAL_ROSA = parseFloat(getCookie("globalbonusrosaValue")) || 1;
    let CLICK = parseInt(getCookie("clickValue")) || 1;

    let escalamento = parseFloat(getCookie("escalamentoValue")) || 1.25;

    let ascendvar = parseInt(getCookie("ascendValue")) || 0;
    let transcendvar = parseInt(getCookie("transcendValue")) || 0;

    // Upgrades active
    let up1 = parseInt(getCookie("up1Value")) || 0;
    let up2 = parseInt(getCookie("up2Value")) || 0;
    let up3 = parseInt(getCookie("up3Value")) || 0;
    let up4 = parseInt(getCookie("up4Value")) || 0;
    let up5 = parseInt(getCookie("up5Value")) || 0;
    let up6 = parseInt(getCookie("up6Value")) || 0;
    let up7 = parseInt(getCookie("up7Value")) || 0;
    let up8 = parseInt(getCookie("up8Value")) || 0;
    let up9 = parseInt(getCookie("up9Value")) || 0;
    let up10 = parseInt(getCookie("up10Value")) || 0;
    let up11 = parseInt(getCookie("up11Value")) || 0;
    let up12 = parseInt(getCookie("up12Value")) || 0;

    // Achievements
    let vcqt1 = parseInt(getCookie("vcqt1Value")) || 0;
    let vcqt2 = parseInt(getCookie("vcqt2Value")) || 0;
    let vcqt3 = parseInt(getCookie("vcqt3Value")) || 0;
    let vcqt4 = parseInt(getCookie("vcqt4Value")) || 0;
    let vcqt5 = parseInt(getCookie("vcqt5Value")) || 0;
    let vcqt6 = parseInt(getCookie("vcqt6Value")) || 0;
    let vcqt7 = parseInt(getCookie("vcqt7Value")) || 0;
    let vcqt8 = parseInt(getCookie("vcqt8Value")) || 0;
    let vcqt9 = parseInt(getCookie("vcqt9Value")) || 0;
    let vcqt10 = parseInt(getCookie("vcqt10Value")) || 0;
    let vcqt11 = parseInt(getCookie("vcqt11Value")) || 0;
    let vcqt12 = parseInt(getCookie("vcqt12Value")) || 0;
    let vcqt13 = parseInt(getCookie("vcqt13Value")) || 0;
    let vcqt14 = parseInt(getCookie("vcqt14Value")) || 0;
    let vcqt15 = parseInt(getCookie("vcqt15Value")) || 0;
    let totalcqt = parseInt(getCookie("totalcqtValue")) || 0;
    let objetivo = 0;
    let objetivot = 0;
    let objetivoascend = parseInt(getCookie("objetivoascendValue")) || 10000000;
    let objetivotranscend = parseInt(getCookie("objetivotranscendValue")) || 10;
    let multcompra = 1;


    if (RS > 0) rosasdiv.style.display = 'block';


    //==================== INITIAL ALERT ====================
    if (lingua == 'en') {
        showCustomAlert("You are just a guava thief farmer dreaming of " + objetivoascend.toLocaleString('en-US') + " guavas, this is your goal");
    }
    if (lingua == 'pt') {
        showCustomAlert("Você é só um ladrão de goiabas com um sonho de  " + objetivoascend.toLocaleString('pt-BR') + " goiabas, essa é sua meta");
    }
        


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
    //==================== CLICKS ====================
    document.getElementById("Aperta").onclick = function () {
        GOB += CLICK;
        if (lingua == 'en') {
        GOIABAS.textContent = "Guavas: " + GOB.toLocaleString('en');
        }
        if (lingua == 'pt') {
        GOIABAS.textContent = "Goiabas: " + GOB.toLocaleString('pt-BR');
        }
        setCookie("gobValue", GOB);

        const audio = escolherAudioPonderado(audios);
        audioPlayer.src = audio;
        audioPlayer.volume = volumeControl.value * 0.85;
        audioPlayer.play();
    };

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

        if (lingua == 'en') {
        CHICOS.textContent = CBT + " Chicos";
        btnchicos.textContent = "+1 Chico " + custochico.toLocaleString('en') + " Guavas";
        }
        if (lingua == 'pt') {
        CHICOS.textContent = CBT + " Chicos";
        btnchicos.textContent = "+1 Chico " + custochico.toLocaleString('pt-BR') + " Goiabas";
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
        
        if (lingua == 'en') {
        ZELELES.textContent = ZLL + " Ze leles";
        btnZELELES.textContent = "+1 Ze lele " + custozelele.toLocaleString('en') + " Guavas";
        }
        if (lingua == 'pt') {
        ZELELES.textContent = ZLL + " Ze leles";
        btnZELELES.textContent = "+1 Ze lele " + custozelele.toLocaleString('pt-BR') + " Goiabas";
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

        if (lingua == 'en') {
        ROSINHAS.textContent = RS + " Rosinhas";
        btnrosinha.textContent = "+1 Rosinha " + custorosinha.toLocaleString('en') + " Guavas";
        }
        if (lingua == 'pt') {
        ROSINHAS.textContent = RS + " Rosinhas";
        btnrosinha.textContent = "+1 Rosinha " + custorosinha.toLocaleString('pt-BR') + " Goiabas";
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

        if (lingua == 'en') {
        CAVALOS.textContent = CVL + " Cavalos";
        btncavalo.textContent = "+1 Cavalo " + custocavalo.toLocaleString('en') + " Roses";
        }
        if (lingua == 'pt') {
        CAVALOS.textContent = CVL + " Cavalos";
        btncavalo.textContent = "+1 Cavalo " + custocavalo.toLocaleString('pt-BR') + " Rosas";
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

        if (lingua == 'en') {
        CHICOSMA.textContent = CBTMA + " Chicos Bulked";
        btnchicosMA.textContent = "+1 Chico Bulked " + custochicomalhado.toLocaleString('en') + " Guavas";
        }
        if (lingua == 'pt') {
        CHICOSMA.textContent = CBTMA + " Chicos Malhados";
        btnchicosMA.textContent = "+1 Chico malhado " + custochicomalhado.toLocaleString('pt-BR') + " Goiabas";
        }

        setCookie("gobValue", GOB);
        setCookie("cbtmaValue", CBTMA);
        setCookie("custochicomalhadoValue", custochicomalhado);
        }
        audioPlayer.src = "mp3/compra.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();

    };

    //==================== AUTOMATIC PRODUCTION ====================
    setInterval(() => {

        BONUSCAVALO = 1 + (CVL * CVL_BONUS);

        CBTPS = Math.trunc(CBT * CBT_BONUS * GLOBAL * BONUSCAVALO);
        CBTPSunitario = Math.trunc(1 * CBT_BONUS * GLOBAL * BONUSCAVALO);

        ZLLPS = Math.trunc(ZLL * ZLL_BONUS * GLOBAL * BONUSCAVALO);
        ZLLPSunitario = Math.trunc(1 * ZLL_BONUS * GLOBAL * BONUSCAVALO);

        CBTMAPS = Math.trunc(CBTMA * CBTMA_BONUS * GLOBAL * BONUSCAVALO);
        CBTMAPSunitario = Math.trunc(1 * CBTMA_BONUS * GLOBAL * BONUSCAVALO);
        
        
        if (up10 == 1){
            CBTPS = Math.trunc(CBTPS * (1 + (CBT * 0.02)));
            ZLLPS = Math.trunc(ZLLPS * (1 + (CBT * 0.02)));
            CBTMAPS = Math.trunc(CBTMAPS * (1 + (CBT * 0.02)));
            CBTPSunitario = Math.trunc(CBTPSunitario * (1 + (CBT * 0.02)));
            ZLLPSunitario = Math.trunc(ZLLPSunitario * (1 + (CBT * 0.02)));
            CBTMAPSunitario = Math.trunc(CBTMAPSunitario * (1 + (CBT * 0.02)));
        }
        if (up11 == 1){
            CBTPS = Math.trunc(CBTPS * (1 + (ROSA * 0.000001)));
            ZLLPS = Math.trunc(ZLLPS * (1 + (ROSA * 0.000001)));
            CBTMAPS = Math.trunc(CBTMAPS * (1 + (ROSA * 0.000001)));
            CBTPSunitario = Math.trunc(CBTPSunitario * (1 + (ROSA * 0.000001)));
            ZLLPSunitario = Math.trunc(ZLLPSunitario * (1 + (ROSA * 0.000001)));
            CBTMAPSunitario = Math.trunc(CBTMAPSunitario * (1 + (ROSA * 0.000001)));
        }

        let GOBDPS = CBTPS + ZLLPS + CBTMAPS;
        GOB += GOBDPS;

        if (lingua == 'en') {
        GOIABAS.textContent = "Guavas: " + GOB.toLocaleString('en');
        GOIABASDPS.textContent = "Guavas per second: " + GOBDPS.toLocaleString('en');
        }
        if (lingua == 'pt') {
        GOIABAS.textContent = "Goiabas: " + GOB.toLocaleString('pt-BR');
        GOIABASDPS.textContent = "Goiabas por segundo: " + GOBDPS.toLocaleString('pt-BR');
        }

        setCookie("gobValue", GOB);

        ROSADPS = RS * GLOBAL_ROSA;
        ROSADPSunitario = 1 * GLOBAL_ROSA;

        if(up12 == 1){
            ROSADPS = Math.trunc(ROSADPS * (1 + (CBTMA * 0.03)))
            ROSADPSunitario = Math.trunc(ROSADPSunitario * (1 + (CBTMA * 0.03)))
        }
        ROSA += Math.trunc(ROSADPS);

        if (lingua == 'en') {
        ROSAS.textContent = "Roses: " + ROSA.toLocaleString('pt-BR');
        ROSASDPS.textContent = "Roses per second: " + ROSADPS.toLocaleString('en');
        }
        if (lingua == 'pt') {
        ROSAS.textContent = "Rosas: " + ROSA.toLocaleString('pt-BR');
        ROSASDPS.textContent = "Rosas por segundo: " + ROSADPS.toLocaleString('pt-BR');
        }

        setCookie("rosaValue", ROSA);

        if (lingua == 'en') {
        CHICOS.textContent = CBT + " Chicos";
        btnchicos.textContent = "+1 Chico " + custochico.toLocaleString('en') + " Guavas";
        ZELELES.textContent = ZLL + " Ze leles";
        btnZELELES.textContent = "+1 Ze lele " + custozelele.toLocaleString('en') + " Guavas";
        ROSINHAS.textContent = RS + " Rosinhas";
        btnrosinha.textContent = "+1 Rosinha " + custorosinha.toLocaleString('en') + " Guavas";
        CAVALOS.textContent = CVL + " Cavalos";
        btncavalo.textContent = "+1 Cavalo " + custocavalo.toLocaleString('en') + " Roses";
        CHICOSMA.textContent = CBTMA + " Chico Bulked";
        btnchicosMA.textContent = "+1 Chico bulked " + custochicomalhado.toLocaleString('en') + " Guavas";
        }
        if (lingua == 'pt') {
        CHICOS.textContent = CBT + " Chicos";
        btnchicos.textContent = "+1 Chico " + custochico.toLocaleString('pt-BR') + " Goiabas";
        ZELELES.textContent = ZLL + " Ze leles";
        btnZELELES.textContent = "+1 Ze lele " + custozelele.toLocaleString('pt-BR') + " Goiabas";
        ROSINHAS.textContent = RS + " Rosinhas";
        btnrosinha.textContent = "+1 Rosinha " + custorosinha.toLocaleString('pt-BR') + " Goiabas";
        CAVALOS.textContent = CVL + " Cavalos";
        btncavalo.textContent = "+1 Cavalo " + custocavalo.toLocaleString('pt-BR') + " Rosas";
        CHICOSMA.textContent = CBTMA + " Chicos Malhados";
        btnchicosMA.textContent = "+1 Chico malhado " + custochicomalhado.toLocaleString('pt-BR') + " Goiabas";
        }
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
if (GOB >= objetivoascend && objetivo != 1)
{
    if (lingua == 'en') {
    showCustomAlert("Congratulations, you ate so many guavas that you exploded and everything ended. Now you must ASCEND!!!!!");
    }
    if (lingua == 'pt') {
    showCustomAlert("Parabéns, você comeu tantas goiabas que explodiu e tudo acabou. Agora você deve ASCENDER!!!!!");
    }
    btnascend.style.display = 'block';
    objetivo = 1;
}
if (ascendvar >= objetivotranscend && objetivot != 1)
{
    if (lingua == 'en') {
    showCustomAlert("You reached something only a few dudes ever reached. Now you must TRANSCEND!!!!!");
    }
    if (lingua == 'pt') {
    showCustomAlert("Você alcançou algo que apenas alguns alcançaram. Agora você deve TRANSCENDER!!!!!");
    }
    btntranscender.style.display = 'block';
    objetivot = 1;
}
if (ZLL >= 15 && up8 == 0 && up2 == 1){
    upgrade8.style.display = 'block';
}
if (GOB >= 100000 && up9 == 0){
    upgrade9.style.display = 'block';
}
if (CBT >= 60 && up10 == 0){
    upgrade10.style.display = 'block';
}
if (ROSA >= 100000 && up11 == 0){
    upgrade11.style.display = 'block';
}
if (CBTMA >= 25 && up12 == 0){
    upgrade12.style.display = 'block';
}
if(GOB >= 1 || vcqt1 == 1){
    cqt1.style.display = 'block';
    if(vcqt1 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("First little guava");
        }
        if (lingua == 'pt') {
        mostrarConquista("Primeira goiabinha");
        }

        vcqt1 = 1;
        setCookie("vcqt1Value",1)
    }
}
if(CBT >= 1 || vcqt2 == 1){
    cqt2.style.display = 'block';
    if(vcqt2 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Cloning chicos");
        }
        if (lingua == 'pt') {
        mostrarConquista("Clonando chicos");
        }
        vcqt2 = 1;
        setCookie("vcqt2Value",1)
    }
}
if(ZLL >= 1 || vcqt3 == 1){
    cqt3.style.display = 'block';
    if(vcqt3 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Best Friend");
        }
        if (lingua == 'pt') {
        mostrarConquista("Melhor amigo");
        }
        vcqt3 = 1;
        setCookie("vcqt3Value",1)
    }
}
if(up2 == 1 || vcqt4 == 1){
    cqt4.style.display = 'block';
    if(vcqt4 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Goodbye best friend :(");
        }
        if (lingua == 'pt') {
        mostrarConquista("Adeus melhor amigo :(");
        }
        vcqt4 = 1;
        setCookie("vcqt4Value",1)
    }
}
if(up8 == 1 || vcqt5 == 1){
    cqt5.style.display = 'block';
    if(vcqt5 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Welcome back Ze lele");
        }
        if (lingua == 'pt') {
        mostrarConquista("Bem vindo de volta Ze lele");
        }
        vcqt5 = 1;
        setCookie("vcqt5Value",1)
    }
}
if(RS >= 1 || vcqt6 == 1){
    cqt6.style.display = 'block';
    if(vcqt6 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("First little rose");
        }
        if (lingua == 'pt') {
        mostrarConquista("Primeira rosinha");
        }
        vcqt6 = 1;
        setCookie("vcqt6Value",1)
    }
}
if(RS >= 10 || vcqt7 == 1){
    cqt7.style.display = 'block';
    if(vcqt7 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Roses for days");
        }
        if (lingua == 'pt') {
        mostrarConquista("Rosas pra mais de metro");
        }
        vcqt7 = 1;
        setCookie("vcqt7Value",1)
    }
}
if(CVL >= 1 || vcqt8 == 1){
    cqt8.style.display = 'block';
    if(vcqt8 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Welcome, chestnut horse!");
        }
        if (lingua == 'pt') {
        mostrarConquista("Seja bem vindo Alazão");
        }
        vcqt8 = 1;
        setCookie("vcqt8Value",1)
    }
}
if(GOB >= 100000 || vcqt9 == 1){
    cqt9.style.display = 'block';
    if(vcqt9 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("A bunch os guavas");
        }
        if (lingua == 'pt') {
        mostrarConquista("Um punhado de goiabas");
        }
        vcqt9 = 1;
        setCookie("vcqt9Value",1)
    }
}
if(GOB >= 100000000 || vcqt10 == 1){
    cqt10.style.display = 'block';
    if(vcqt10 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("A lot of guavas");
        }
        if (lingua == 'pt') {
        mostrarConquista("MUITAS GOIABAS");
        }
        vcqt10 = 1;
        setCookie("vcqt10Value",1)
    }
}
if(GOB >= 100000000000 || vcqt11 == 1){
    cqt11.style.display = 'block';
    if(vcqt11 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("A dozen of guavas for everyone on earth");
        }
        if (lingua == 'pt') {
        mostrarConquista("Uma duzia de goiabas pra todo mundo na terra");
        }
        vcqt11 = 1;
        setCookie("vcqt11Value",1)
    }
}
if(ascendvar >= 1 || vcqt12 == 1){
    cqt12.style.display = 'block';
    if(vcqt12 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("You fell the power");
        }
        if (lingua == 'pt') {
        mostrarConquista("Você sente o poder");
        }
        vcqt12 = 1;
        setCookie("vcqt12Value",1)
    }
}
if(ascendvar >= 2 || vcqt13 == 1){
    cqt13.style.display = 'block';
    if(vcqt13 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("Here we go again");
        }
        if (lingua == 'pt') {
        mostrarConquista("E lá vamos nós");
        }
        vcqt13 = 1;
        setCookie("vcqt13Value",1)
    }
}
if(ascendvar >= 3 || vcqt14 == 1){
    cqt14.style.display = 'block';
    if(vcqt14 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("How much farther we need to go?");
        }
        if (lingua == 'pt') {
        mostrarConquista("O quão longe ainda temos que ir?");
        }
        vcqt14 = 1;
        setCookie("vcqt14Value",1)
    }
}
if(ascendvar >= 10 || vcqt15 == 1){
    cqt15.style.display = 'block';
    if(vcqt15 == 0){
        totalcqt += 1;
        setCookie("totalcqtValue",totalcqt);
        if (lingua == 'en') {
        mostrarConquista("It has benn a long journey");
        }
        if (lingua == 'pt') {
        mostrarConquista("Tem sido uma jornada longa");
        }
        vcqt15 = 1;
        setCookie("vcqt15Value",1)
    }
}

if (ascendvar >= 2){
    CBMABLOCK.style.display = 'flex';
}
if (transcendvar >= 1){
    MONICABLOCK.style.display = 'flex';
}

if (lingua == 'en') {
FAZENDINHA.textContent = 'Little Farm'

totalcqtdiv.textContent = totalcqt + " of 15 achieved";
totalascension.textContent = ascendvar + " Ascensions giving:";
objetivoascender.textContent = "You need " + objetivoascend.toLocaleString('en') + " guavas to the next ascension";
acdb1.textContent = "+" + ascendvar * 200 + " Start Guavas";
acdb2.textContent = "+" + ascendvar * 50 + "% GVPS";
acdb3.textContent = "-" + ascendvar * 0.02 + " Scaling cost (capped at 1.1)";
acdb4.textContent = "+" + ascendvar * 1 + " Base Click";
acdb5.textContent = "x" + GLOBAL_ROSA + " RPS";
acdb6.textContent = "+" + ascendvar * 5 + "% Horse bonus";
acdb7.textContent = "+" + ascendvar * 3 + " Initial Chicos";
acdb8.textContent = "+" + ascendvar + " Initial Rosinhas";

upgrade1.textContent = "Throw a guava party (2x Chico production)";
upgrade2.textContent = "Jump in the river with Ze Lele (?)";
upgrade3.textContent = "Spray insecticide to kill guava bugs (2x GBPS)";
upgrade4.textContent = "Give roses to Chico (3x GBPS)";
upgrade5.textContent = "Break Chico’s heart (10x GBPS!!!!!!!!!!!!!)";
upgrade6.textContent = "Pick guavas with both hands (2x guavas per click)";
upgrade7.textContent = "Punch the trees (10x guavas per click)";
upgrade8.textContent = "Hunt the jaguar that ate Ze Lele (?)";
upgrade9.textContent = "Feed the horses with guavas (10% more horse bonus)";
upgrade10.textContent = 'Create a enterprise and manage the chicos (+2% GBPS per chico)'
upgrade11.textContent = 'Invest the roses in the stockmarket (+1% GBPS per 10000 Roses)'
upgrade12.textContent = 'The Rosinhas start to work harder to impress the bulked chico (+3% RPS per Rosinha)';

stt1.textContent = 'Each Chico is producing ' + CBTPSunitario.toLocaleString('en-US') + ' GBPS totaling ' + CBTPS.toLocaleString('en-US') + ' GBPS';
stt2.textContent = 'Each Ze Lele is producing ' + ZLLPSunitario.toLocaleString('en-US') + ' GBPS totaling ' + ZLLPS.toLocaleString('en-US') + ' GBPS';
stt3.textContent = 'Each Rosinha is producing ' + ROSADPSunitario.toLocaleString('en-US') + ' RPS totaling ' + ROSADPS.toLocaleString('en-US') + ' RPS';
stt4.textContent = 'Each Horse is increasing GBPS by ' + (CVL_BONUS * 100).toLocaleString('en-US') + '% totaling ' + (BONUSCAVALO * 100).toLocaleString('en-US') + '% GBPS';
stt5.textContent = 'Each Spotted Chico is producing ' + CBTMAPSunitario.toLocaleString('en-US') + ' GBPS totaling ' + CBTMAPS.toLocaleString('en-US') + ' GBPS';
stt6.textContent = '';
stt7.textContent = '';
stt8.textContent = '';
}
if (lingua == 'pt') {
FAZENDINHA.textContent = 'Fazendinha';

totalcqtdiv.textContent = totalcqt + " de 15 alcançados";
totalascension.textContent = ascendvar + " Ascensões dando:";
objetivoascender.textContent = "Você precisa de " + objetivoascend.toLocaleString('pt-BR') + " goiabas para a proxima ascensão";
acdb1.textContent = "+" + ascendvar * 200 + " Goiabas Iniciais";
acdb2.textContent = "+" + ascendvar * 50 + "% GBPS";
acdb3.textContent = "-" + ascendvar * 0.02 + " Escalonamento de custo (Limitado a 1.1)";
acdb4.textContent = "+" + ascendvar * 1 + " Clique base";
acdb5.textContent = "x" + GLOBAL_ROSA + " RPS";
acdb6.textContent = "+" + ascendvar * 5 + "% Bonus do cavalo";
acdb7.textContent = "+" + ascendvar * 3 + " Chicos Iniciais";
acdb8.textContent = "+" + ascendvar + " Rosinhas Iniciais";

totaltranscend.textContent = transcendvar + " Transcendencias dando:";
objetivotranscendhtml.textContent = "Você precisa de " + objetivotranscend.toLocaleString('pt-BR') + " ascensoes para a proxima transcendencia";
tcd1.textContent = "x" + (1 - (transcendvar * 0.07)) + " GBPS";
tcd2.textContent = "x" + (1 - (transcendvar * 0.07)) + " RPS";
tcd3.textContent = "+" + transcendvar * 0.025 + " Escalonamento de custo";
tcd4.textContent = "+" + transcendvar * 2 + " Ascensoes nescessarias";

upgrade1.textContent = 'De uma festa de goiabas (2x Produção Chico)';
upgrade2.textContent = 'Pular no rio com o Ze lele (?)';
upgrade3.textContent = 'Passar inseticida para matar os bixos da goiaba (2x GBPS)';
upgrade4.textContent = 'De rosas para o Chico (3x GBPS)';
upgrade5.textContent = 'Quebre o coração do chico (10x GBPS!!!!!!!!!!!!!)';
upgrade6.textContent = 'Pegue goiabas com as duas mãos (2x goiabas por clique)';
upgrade7.textContent = 'Soque as arvores (10x goiabas por clique)';
upgrade8.textContent = 'Caçar a onça que comeu o Ze lele (?)';
upgrade9.textContent = 'Alimentar os cavalos com goiabas (10% aumento no bonus dos cavalos)';
upgrade10.textContent = 'Criar uma empresa e administrar os chicos (+2% GBPS per chico)';
upgrade11.textContent = 'Investir as rosas na bolsa (+1% GBPS por 10000 Rosas)';
upgrade12.textContent = 'As rosinhas começam a trabalhar mais pra impressionar os chicos malhados (+3% RPS per Rosinha)';

stt1.textContent = 'Cada Chico esta produzindo ' + CBTPSunitario.toLocaleString('pt-BR') + ' GBPS totalizando '+ CBTPS.toLocaleString('pt-BR') + ' GBPS';
stt2.textContent = 'Cada Ze lele esta produzindo ' + ZLLPSunitario.toLocaleString('pt-BR') + ' GBPS totalizando '+ ZLLPS.toLocaleString('pt-BR') + ' GBPS';
stt3.textContent = 'Cada Rosinha esta produzindo ' + ROSADPSunitario.toLocaleString('pt-BR') + ' RPS totalizando '+ ROSADPS.toLocaleString('pt-BR') + ' RPS';
stt4.textContent = 'Cada Cavalo esta aumentando em  ' + (CVL_BONUS * 100).toLocaleString('pt-BR') + '% o GBPS totalizando '+ (BONUSCAVALO * 100).toLocaleString('pt-BR') + '% GBPS';
stt5.textContent = 'Cada Chico Malhado esta produzindo ' + CBTMAPSunitario.toLocaleString('pt-BR') + ' GBPS totalizando '+ CBTMAPS.toLocaleString('pt-BR') + ' GBPS';
stt6.textContent = '';
stt7.textContent = '';
stt8.textContent = '';
}
    }, 2500);

    document.getElementById("Upgrade1").onclick = function () {
        upgrade1Func();
    };

    document.getElementById("Upgrade2").onclick = function () {
        upgrade2Func();
    };

    document.getElementById("Upgrade3").onclick = function () {
        upgrade3Func();
    };

    document.getElementById("Upgrade4").onclick = function () {
        upgrade4Func();
    };

    document.getElementById("Upgrade5").onclick = function () {
        upgrade5Func();
    };

    document.getElementById("Upgrade6").onclick = function () {
        upgrade6Func();
    };

    document.getElementById("Upgrade7").onclick = function () {
        upgrade7Func();
    };

    document.getElementById("Upgrade8").onclick = function () {
        upgrade8Func();
    };

    document.getElementById("Upgrade9").onclick = function () {
        upgrade9Func();
    };

    document.getElementById("Upgrade10").onclick = function () {
        upgrade10Func();
    };

    document.getElementById("Upgrade11").onclick = function () {
        upgrade11Func();
    };
    document.getElementById("Upgrade12").onclick = function () {
        upgrade12Func();
    };

function upgrade1Func() {
    if (GOB >= 80 && up1 == 0){
        setCookie("up1Value", 1);
        setCookie("cbtbonusValue", CBT_BONUS * 2);
        CBT_BONUS *= 2;
        up1 = 1;
        upgrade1.style.display = 'none';
    }
}

function upgrade2Func() {
    if (ZLL >= 1 && up2 == 0){
        setCookie("up2Value", 1);
        setCookie("zllValue", ZLL - 1);
        ZLL -= 1;
        up2 = 1;
        upgrade2.style.display = 'none';
        ZELELES.textContent = ZLL + " Ze leles";
        if (lingua == 'en') showCustomAlert("A jaguar came and ate Ze Lele :(");
        if (lingua == 'pt') showCustomAlert("Uma onça veio e cumeu o Ze lele :(");
    }
}

function upgrade3Func() {
    if (GOB >= 500 && up3 == 0){
        GOB -= 500;
        setCookie("up3Value", 1);
        setCookie("globalbonusValue", GLOBAL * 2);
        GLOBAL *= 2;
        up3 = 1;
        upgrade3.style.display = 'none';
    }
}

function upgrade4Func() {
    if (ROSA >= 50  && up4 == 0){
        ROSA -= 50;
        setCookie("up4Value", 1);
        setCookie("globalbonusValue", GLOBAL * 3);
        GLOBAL *= 3;
        up4 = 1;
        upgrade4.style.display = 'none';
    }
}

function upgrade5Func() {
    if (RS >= 10 && up5 == 0){
        setCookie("up5Value", 1);
        setCookie("globalbonusValue", GLOBAL * 10);
        GLOBAL *= 10;
        up5 = 1;
        upgrade5.style.display = 'none';
    }
}

function upgrade6Func() {
    if (GOB >= 30 && up6 == 0){
        GOB -= 30;
        setCookie("up6Value", 1);
        setCookie("clickValue", CLICK * 2);
        CLICK *= 2;
        up6 = 1;
        upgrade6.style.display = 'none';
    }
}

function upgrade7Func() {
    if (GOB >= 750 && up7 == 0){
        GOB -= 750;
        setCookie("up7Value", 1);
        setCookie("clickValue", CLICK * 10);
        CLICK *= 10;
        up7 = 1;
        upgrade7.style.display = 'none';
    }
}

function upgrade8Func() {
    if (ZLL >= 15 && up8 == 0){
        setCookie("zllValue", ZLL + 1);
        ZLL += 1;
        setCookie("up8Value", 1);
        ZLL_BONUS *= 2;
        setCookie("zllbonusValue", ZLL_BONUS);
        up8 = 1;
        upgrade8.style.display = 'none';
        if (lingua == 'en') showCustomAlert("You beat the jaguar until it spit Ze Lele back :) (2x Ze Lele production)");
        if (lingua == 'pt') showCustomAlert("Você bate na onça até ela cuspir o Ze lele de volta :) (2x Ze Lele produção)");
    }
}

function upgrade9Func() {
    if (GOB >= 100000 && up9 == 0){
        CVL_BONUS += 0.1;
        setCookie("cvlbonusValue", CVL_BONUS);
        setCookie("up9Value", 1);
        up9 = 1;
        upgrade9.style.display = 'none';
    }
}

function upgrade10Func() {
    if (CBT >= 60  && up10 == 0){
        setCookie("up10Value", 1);
        up10 = 1;
        upgrade10.style.display = 'none';
    }
}

function upgrade11Func() {
    if (ROSA >= 100000 && up11 == 0){
        setCookie("up11Value", 1);
        up11 = 1;
        upgrade11.style.display = 'none';
    }
}

function upgrade12Func() {
    if (CBTMA >= 25 && up12 == 0){
        setCookie("up12Value", 1);
        up12 = 1;
        upgrade12.style.display = 'none';
    }
}

document.getElementById("ApplyAllButton").onclick = function () {
upgreideiatudo();
}

// Função para chamar todos os upgrades
function upgreideiatudo() {
    upgrade1Func();
    upgrade2Func();
    upgrade3Func();
    upgrade4Func();
    upgrade5Func();
    upgrade6Func();
    upgrade7Func();
    upgrade8Func();
    upgrade9Func();
    upgrade10Func();
    upgrade11Func();
    upgrade12Func();
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
        btnascend.style.display = 'none';
        ascend();
    }

    document.getElementById("transcend").onclick = function () {
        transcendvar += 1;
        setCookie("transcendValue",transcendvar);
        btntranscend.style.display = 'none';
        transcend();
    }

    //==================== CONFIG ====================
    btnConfig.addEventListener('click', () => configWindow.style.display = 'block');
    closeConfig.addEventListener('click', () => configWindow.style.display = 'none');
    btnlingua.addEventListener('click', () => {
    if(lingua == 'en')
    {
    setCookie("lingua", "pt");
    lingua = "pt"; 
    }
    else if(lingua == 'pt')
    {
    setCookie("lingua", "en");
    lingua = "en";  
    }
    });

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
        CBTMA = 0;
        CBTMA_BONUS = 100;
        custochicomalhado = 10000000;
        GLOBAL = 1;
        CLICK = 1;
        ascendvar = 0;
        escalamento = 1.25;
        CVL = 0;
        custocavalo = 35;
        objetivoascend = 10000000;
        CVL_BONUS = 0.1;
        GLOBAL_ROSA = 1;
        objetivot = 0;
        transcendvar = 0;
        
        setCookie("transcendValue",transcendvar);
        setCookie("objetivotranscendValue",10)
        setCookie("globalbonusrosaValue",1)
        setCookie("cvlbonusValue",0.1);
        setCookie("cvlValue",0);
        setCookie("custocavaloValue",35);
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
        setCookie("cbtmaValue", 0);
        setCookie("custochicomalhadoValue", 10000000);
        setCookie("cbtmabonusValue", 100);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico


        setCookie("up1Value",0);
        setCookie("up2Value",0);
        setCookie("up3Value",0);
        setCookie("up4Value",0);
        setCookie("up5Value",0);
        setCookie("up6Value",0);
        setCookie("up7Value",0);
        setCookie("up8Value",0);
        setCookie("up9Value",0);
        setCookie("up10Value",0);
        setCookie("up11Value",0);
        setCookie("up12Value",0);

        setCookie("vcqt1Value",0);
        setCookie("vcqt2Value",0);
        setCookie("vcqt3Value",0);
        setCookie("vcqt4Value",0);
        setCookie("vcqt5Value",0);
        setCookie("vcqt6Value",0);
        setCookie("vcqt7Value",0);
        setCookie("vcqt8Value",0);
        setCookie("vcqt9Value",0);
        setCookie("vcqt10Value",0);
        setCookie("vcqt11Value",0);
        setCookie("vcqt12Value",0);
        setCookie("vcqt13Value",0);
        setCookie("vcqt14Value",0);
        setCookie("vcqt15Value",0);
        setCookie("totalcqtValue",0);

        setCookie("ascendValue",0);
        setCookie("objetivoascendValue",10000000)
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
        if (escalamento < 1.1)
        {
            escalamento = 1.1;
        }
        CVL = 0;
        custocavalo = 35;
        objetivoascend = objetivoascend * 5;
        CVL_BONUS = 0.1 + (ascendvar * 0.05);
        GLOBAL_ROSA = ascendvar * 2;

        
        setCookie("globalbonusrosaValue",GLOBAL_ROSA)
        setCookie("cvlbonusValue",CVL_BONUS);
        setCookie("cvlValue",0);
        setCookie("custocavaloValue",35);
        setCookie("escalamentoValue",escalamento);
        setCookie("clickValue",CLICK);
        setCookie("globalbonusValue",GLOBAL);
        setCookie("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("zllbonusValue", 7);
        setCookie("rsValue", RS);
        setCookie("rosaValue", 0);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico
        setCookie("cbtmaValue", 0);
        setCookie("custochicomalhadoValue", 10000000);
        setCookie("cbtmabonusValue", 100);
        setCookie("objetivoascendValue",objetivoascend)


        setCookie("up1Value",0);
        setCookie("up2Value",0);
        setCookie("up3Value",0);
        setCookie("up4Value",0);
        setCookie("up5Value",0);
        setCookie("up6Value",0);
        setCookie("up7Value",0);
        setCookie("up8Value",0);
        setCookie("up9Value",0);
        setCookie("up10Value",0);
        setCookie("up11Value",0);
        setCookie("up12Value",0);

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
        GLOBAL = 1 * (1 - (transcendvar * 0.07)); //bonus
        CLICK = 1 + (ascendvar); //bonus
        objetivo = 0;
        escalamento = 1.25 + (transcendvar * 0.025); //bonus
        CVL = 0;
        custocavalo = 35;
        objetivoascend = 10000000;
        CVL_BONUS = 0.1 + (ascendvar * 0.05);
        GLOBAL_ROSA = 1 * (1 - (transcendvar * 0.07));

        
        setCookie("objetivotranscendValue",objetivotranscend)
        setCookie("globalbonusrosaValue",GLOBAL_ROSA)
        setCookie("cvlbonusValue",CVL_BONUS);
        setCookie("cvlValue",0);
        setCookie("custocavaloValue",35);
        setCookie("escalamentoValue",escalamento);
        setCookie("clickValue",CLICK);
        setCookie("globalbonusValue",GLOBAL);
        setCookie("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("zllbonusValue", 7);
        setCookie("rsValue", RS);
        setCookie("rosaValue", 0);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico
        setCookie("cbtmaValue", 0);
        setCookie("custochicomalhadoValue", 10000000);
        setCookie("cbtmabonusValue", 100);
        setCookie("objetivoascendValue",objetivoascend)


        setCookie("up1Value",0);
        setCookie("up2Value",0);
        setCookie("up3Value",0);
        setCookie("up4Value",0);
        setCookie("up5Value",0);
        setCookie("up6Value",0);
        setCookie("up7Value",0);
        setCookie("up8Value",0);
        setCookie("up9Value",0);
        setCookie("up10Value",0);
        setCookie("up11Value",0);
        setCookie("up12Value",0);

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

    document.getElementById("exporta").onclick = function () {
        exportsave();
    }

    document.getElementById("importa").onclick = function () {
        importsave();
    }

    function exportsave() {
    const cookies = document.cookie.split("; ").join("\n");

    const blob = new Blob([cookies], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "save.txt";
    link.click();
    }

    function importsave() {
    const fileInput = document.getElementById("cookieFile");
    const file = fileInput.files[0];

    if (!file) {
        showCustomAlertalert("Selecione um arquivo TXT primeiro!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const conteudo = e.target.result;

        // cada linha é um cookie
        const linhas = conteudo.split("\n").map(l => l.trim()).filter(l => l.length > 0);

        linhas.forEach(linha => {
            const [nome, ...valorPartes] = linha.split("=");
            const valor = valorPartes.join("=");

            if (nome && valor) {
                setCookie(nome, valor);
            }
        });

        location.reload();
    };

    reader.readAsText(file);
}
});

 function showCustomAlert(message) {
    document.getElementById('customAlertMessage').textContent = message;
    document.getElementById('customAlertOverlay').style.display = 'flex';
  }

  function closeCustomAlert() {
    document.getElementById('customAlertOverlay').style.display = 'none';
  }