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
        setCookieBIG("gobValue", GOB);

        const audio = "mp3/click_satisfatorio.wav";
        audioPlayer.src = audio;
        audioPlayer.volume = volumeControl.value * 0.85;
        audioPlayer.play();
    };

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
        setCookie("up13Value", 0);
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
        setCookie("custocebolinhaValue",15);
        setCookie("cebolinhaValue",0)
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
        setCookieBIG("gobValue", 0);
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