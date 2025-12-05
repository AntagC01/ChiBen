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

        MONGPS = Math.trunc(MON * MONICA_BONUS_G * GLOBAL * BONUSCAVALO);
        MONGPSunitario = Math.trunc(1 * MONICA_BONUS_G * GLOBAL * BONUSCAVALO);


        if (up10 == 1) {
            CBTPS = Math.trunc(CBTPS * (1 + (CBT * 0.02)));
            ZLLPS = Math.trunc(ZLLPS * (1 + (CBT * 0.02)));
            CBTMAPS = Math.trunc(CBTMAPS * (1 + (CBT * 0.02)));
            MONGPS = Math.trunc(MONGPS * (1 + (CBT * 0.02)));
            CBTPSunitario = Math.trunc(CBTPSunitario * (1 + (CBT * 0.02)));
            ZLLPSunitario = Math.trunc(ZLLPSunitario * (1 + (CBT * 0.02)));
            CBTMAPSunitario = Math.trunc(CBTMAPSunitario * (1 + (CBT * 0.02)));
            MONGPSunitario = Math.trunc(MONGPSunitario * (1 + (CBT * 0.02)));
        }
        if (up11 == 1) {
            CBTPS = Math.trunc(CBTPS * (1 + (ROSA * 0.000001)));
            ZLLPS = Math.trunc(ZLLPS * (1 + (ROSA * 0.000001)));
            CBTMAPS = Math.trunc(CBTMAPS * (1 + (ROSA * 0.000001)));
            MONGPS = Math.trunc(MONGPS * (1 + (ROSA * 0.000001)));
            CBTPSunitario = Math.trunc(CBTPSunitario * (1 + (ROSA * 0.000001)));
            ZLLPSunitario = Math.trunc(ZLLPSunitario * (1 + (ROSA * 0.000001)));
            CBTMAPSunitario = Math.trunc(CBTMAPSunitario * (1 + (ROSA * 0.000001)));
            MONGPSunitario = Math.trunc(MONGPSunitario * (1 + (ROSA * 0.000001)));
        }

        GOBDPS = (CBTPS + ZLLPS + CBTMAPS + MONGPS) * MULTTRANS;
        GOB += GOBDPS;

        setCookie("gobValue", GOB);

        ROSADPS = Math.trunc(RS * GLOBAL_ROSA);
        MONRPS = Math.trunc(MON * MONICA_BONUS_R * GLOBAL_ROSA);
        ROSADPSunitario = 1 * GLOBAL_ROSA;
        MONRPSunitario = Math.trunc(1 * MONICA_BONUS_R * GLOBAL_ROSA)

        if (up12 == 1) {
            ROSADPS = Math.trunc(ROSADPS * (1 + (CBTMA * 0.03)))
            ROSADPSunitario = Math.trunc(ROSADPSunitario * (1 + (CBTMA * 0.03)))
        }
        ROSA += Math.trunc((ROSADPS + MONRPS) * MULTTRANS);

        setCookie("rosaValue", ROSA);
    }, 1000);

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

    document.getElementById("ascend").onclick = function () {
        ascendvar += 1;
        setCookie("ascendValue", ascendvar);
        btnascend.style.display = 'none';
        ascend();
    }

    document.getElementById("transcend").onclick = function () {
        transcendvar += 1;
        setCookie("transcendValue", transcendvar);
        btntranscend.style.display = 'none';
        transcend();
    }

    //==================== CONFIG ====================
    btnConfig.addEventListener('click', () => configWindow.style.display = 'block');
    closeConfig.addEventListener('click', () => configWindow.style.display = 'none');
    btnlingua.addEventListener('click', () => {
        if (lingua == 'en') {
            setCookie("lingua", "pt");
            lingua = "pt";
        }
        else if (lingua == 'pt') {
            setCookie("lingua", "en");
            lingua = "en";
        }
    });

    //==================== RESET ====================
    const RESET = document.getElementById("reset");
    RESET.addEventListener("click", reseta);

    function resetaupgrades() {
        setCookie("up1Value", 0);
        setCookie("up2Value", 0);
        setCookie("up3Value", 0);
        setCookie("up4Value", 0);
        setCookie("up5Value", 0);
        setCookie("up6Value", 0);
        setCookie("up7Value", 0);
        setCookie("up8Value", 0);
        setCookie("up9Value", 0);
        setCookie("up10Value", 0);
        setCookie("up11Value", 0);
        setCookie("up12Value", 0);
    }
    function resetaachievements() {
        setCookie("vcqt1Value", 0);
        setCookie("vcqt2Value", 0);
        setCookie("vcqt3Value", 0);
        setCookie("vcqt4Value", 0);
        setCookie("vcqt5Value", 0);
        setCookie("vcqt6Value", 0);
        setCookie("vcqt7Value", 0);
        setCookie("vcqt8Value", 0);
        setCookie("vcqt9Value", 0);
        setCookie("vcqt10Value", 0);
        setCookie("vcqt11Value", 0);
        setCookie("vcqt12Value", 0);
        setCookie("vcqt13Value", 0);
        setCookie("vcqt14Value", 0);
        setCookie("vcqt15Value", 0);
        setCookie("totalcqtValue", 0);
    }
    function resetacustosebonus() {
        setCookie("custochicoValue", 10); // valor inicial do Chico
        setCookie("cbtbonusValue", 1); // valor inicial do Chico 
        setCookie("custozeleleValue", 100); // valor inicial do Chico
        setCookie("zllbonusValue", 7);
        setCookie("custorosinhaValue", 1000); // valor inicial do Chico
        setCookie("custochicomalhadoValue", 10000000);
        setCookie("cbtmabonusValue", 100);
        setCookie("custocavaloValue", 35);
        setCookie("monicaValue", 0);
        setCookie("customonicaValue", 10000);
        setCookie("monicabonusGValue", 250);
        setCookie("monicabonusRValue", 7);
    }
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

        setCookie("multtransValue",1)
        setCookie("transcendValue", transcendvar);
        setCookie("objetivotranscendValue", 10)
        setCookie("globalbonusrosaValue", 1)
        setCookie("cvlbonusValue", 0.1);
        setCookie("cvlValue", 0);
        setCookie("escalamentoValue", 1.25);
        setCookie("clickValue", 1);
        setCookie("globalbonusValue", 1);
        setCookie("gobValue", 0);
        setCookie("rsValue", 0);
        setCookie("rosaValue", 0);
        setCookie("cbtValue", 0);
        setCookie("zllValue", 0);
        setCookie("cbtmaValue", 0);

        resetacustosebonus();
        resetaupgrades();
        resetaachievements();

        setCookie("ascendValue", 0);
        setCookie("objetivoascendValue", 10000000)
        location.reload();
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
        objetivoascend = objetivoascend * 5;
        CVL_BONUS = 0.1 + (ascendvar * 0.05);
        GLOBAL_ROSA = ascendvar * 2;


        setCookie("globalbonusrosaValue", GLOBAL_ROSA)
        setCookie("cvlbonusValue", CVL_BONUS);
        setCookie("cvlValue", 0);
        setCookie("custocavaloValue", 35);
        setCookie("escalamentoValue", escalamento);
        setCookie("clickValue", CLICK);
        setCookie("globalbonusValue", GLOBAL);
        setCookie("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("zllValue", 0);
        setCookie("rsValue", RS);
        setCookie("rosaValue", 0);
        setCookie("cbtmaValue", 0);
        setCookie("objetivoascendValue", objetivoascend)

        resetacustosebonus();
        resetaupgrades();

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
        GLOBAL = 1; //bonus
        CLICK = 1 + (ascendvar); //bonus
        objetivo = 0;
        escalamento = 1.25 + (transcendvar * 0.025); //bonus
        CVL = 0;
        custocavalo = 35;
        objetivoascend = 10000000;
        CVL_BONUS = 0.1 + (ascendvar * 0.05);
        GLOBAL_ROSA = 1;
        MULTTRANS = 1 * (1 - (transcendvar * 0.07));

        setCookie("multtransValue",MULTTRANS);
        setCookie("ascendValue", ascendvar);
        setCookie("objetivotranscendValue", objetivotranscend)
        setCookie("globalbonusrosaValue", GLOBAL_ROSA)
        setCookie("cvlbonusValue", CVL_BONUS);
        setCookie("escalamentoValue", escalamento);
        setCookie("clickValue", CLICK);
        setCookie("globalbonusValue", GLOBAL);
        setCookie("gobValue", GOB);
        setCookie("cbtValue", CBT);
        setCookie("rsValue", RS);
        setCookie("cvlValue", 0);
        setCookie("zllValue", 0);
        setCookie("rosaValue", 0);
        setCookie("cbtmaValue", 0);
        setCookie("objetivoascendValue", objetivoascend);



        resetacustosebonus();
        resetaupgrades();

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

        reader.onload = function (e) {
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