document.addEventListener("DOMContentLoaded", () => {
    toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    });

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

    if (RS > 0) rosasdiv.style.display = 'block';


    //==================== INITIAL ALERT ====================
    if (lingua == 'en') {
        showCustomAlert("You are just a guava thief farmer dreaming of " + objetivoascend.toLocaleString('en-US') + " guavas, this is your goal");
    }
    if (lingua == 'pt') {
        showCustomAlert("Você é só um ladrão de goiabas com um sonho de  " + objetivoascend.toLocaleString('pt-BR') + " goiabas, essa é sua meta");
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

        const audio = "mp3/click_satisfatorio.wav";
        audioPlayer.src = audio;
        audioPlayer.volume = volumeControl.value * 0.85;
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

        ROSADPS = Math.trunc(RS * GLOBAL_ROSA);
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

setInterval(() => {
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

totaltranscend.textContent = transcendvar + " Transcendencias giving:";
objetivotranscendhtml.textContent = "You need " + objetivotranscend.toLocaleString('en') + " ascensions for the next transcend";
tcd1.textContent = "x" + (1 - (transcendvar * 0.07)) + " GVPS";
tcd2.textContent = "x" + (1 - (transcendvar * 0.07)) + " RPS";
tcd3.textContent = "+" + transcendvar * 0.025 + " Cost scaling";
tcd4.textContent = "+" + transcendvar * 2 + " Ascensions nedeed";

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

        setCookie("ascendValue",ascendvar);
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
        setCookie("rsValue", RS);
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico
        setCookie("zllValue", 0);
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("zllbonusValue", 7);
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