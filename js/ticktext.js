document.addEventListener("DOMContentLoaded", () => {

        setInterval(() => {

                const textos = {

                        en: {
                                FAZENDINHA: 'Little Farm',
                                totalcqtdiv: totalcqt + " of 15 achieved",
                                totalascension: formata(ascendvar) + " Ascensions giving:",
                                objetivoascender: "You need " + formata(objetivoascend) + " guavas to the next ascension",

                                acdb: [
                                        "+" + formata(ascendvar * 200) + " Start Guavas",
                                        "+" + formata(ascendvar * 50) + "% GVPS",
                                        "-" + (ascendvar * 0.02).toFixed(2) + " Scaling cost (capped at 1.1)",
                                        "+" + formata(ascendvar) + " Base Click",
                                        "x" + formata(GLOBAL_ROSA) + " RPS",
                                        "+" + formata(ascendvar * 5) + "% Horse bonus",
                                        "+" + formata(ascendvar * 3) + " Initial Chicos",
                                        "+" + formata(ascendvar) + " Initial Rosinhas"
                                ],

                                totaltranscend: formata(transcendvar) + " Transcendences giving:",
                                objetivotranscendhtml: "You need " + formata(objetivotranscend) + " ascensions for the next transcend",

                                tcd: [
                                        "x" + (1 - transcendvar * 0.07),
                                        "x" + (1 - transcendvar * 0.07),
                                        "+" + (transcendvar * 0.025).toFixed(3) + " Cost scaling",
                                        "+" + formata(transcendvar * 2) + " Ascensions needed"
                                ],

                                upgrades: [
                                        "Throw a guava party (2x Chico production)",
                                        "Jump in the river with Ze Lele (?)",
                                        "Spray insecticide to kill guava bugs (2x GBPS)",
                                        "Give roses to Chico (3x GBPS)",
                                        "Break Chico’s heart (10x GBPS!!!!!!!!!!!!!)",
                                        "Pick guavas with both hands (2x guavas per click)",
                                        "Punch the trees (10x guavas per click)",
                                        "Hunt the jaguar that ate Ze Lele (?)",
                                        "Feed the horses with guavas (10% more horse bonus)",
                                        "Create an enterprise and manage the chicos (+2% GBPS per chico)",
                                        "Invest the roses in the stockmarket (+1% GBPS per 10000 Roses)",
                                        "The Rosinhas start to work harder to impress the bulked chico (+3% RPS per Rosinha)"
                                ],

                                stt: [
                                        'Each Chico is producing ' + formata(CBTPSunitario) + ' GBPS totaling ' + formata(CBTPS) + ' GBPS',
                                        'Each Ze Lele is producing ' + formata(ZLLPSunitario) + ' GBPS totaling ' + formata(ZLLPS) + ' GBPS',
                                        'Each Rosinha is producing ' + formata(ROSADPSunitario) + ' RPS totaling ' + formata(ROSADPS) + ' RPS',
                                        'Each Horse is increasing GBPS by ' + formata(CVL_BONUS * 100) + '% totaling ' + formata(BONUSCAVALO * 100) + '% GBPS',
                                        'Each Spotted Chico is producing ' + formata(CBTMAPSunitario) + ' GBPS totaling ' + formata(CBTMAPS) + ' GBPS',
                                        'Each Monica is producing ' + formata(MONGPSunitario) + ' GBPS and ' + formata(MONRPSunitario) + ' RPS totalizing ' + formata(MONGPS) + ' GVPS and ' + formata(MONRPS) + ' RPS',
                                        '',
                                        ''
                                ],

                                CHICOS: formata(CBT) + " Chicos",
                                btnchicos: "+1 Chico " + formata(custochico) + " Guavas",
                                ZELELES: formata(ZLL) + " Ze leles",
                                btnZELELES: "+1 Ze lele " + formata(custozelele) + " Guavas",
                                ROSINHAS: formata(RS) + " Rosinhas",
                                btnrosinha: "+1 Rosinha " + formata(custorosinha) + " Guavas",
                                CAVALOS: formata(CVL) + " Horses",
                                btncavalo: "+1 Horse " + formata(custocavalo) + " Roses",
                                CHICOSMA: formata(CBTMA) + " Chico Bulked",
                                btnchicosMA: "+1 Chico bulked " + formata(custochicomalhado) + " Guavas",
                                MONICAS: formata(MON) + " Monicas",
                                btnmonica: "+1 Monica " + formata(customonica) + " Roses",
                                CEBOLINHAS: formata(CEB) + " Cebolinhas",
                                btncebolinha: "+1 Cebolinha " + formata(custocebolinha) + " Monicas",

                                GOIABAS: "Guavas: " + formata(GOB),
                                GOIABASDPS: "Guavas per second: " + formata(GOBDPS),
                                ROSAS: "Roses: " + formata(ROSA),
                                ROSASDPS: "Roses per second: " + formata(ROSACALCDPS)
                        },

                        pt: {
                                FAZENDINHA: 'Fazendinha',
                                totalcqtdiv: totalcqt + " de 15 alcançados",
                                totalascension: formata(ascendvar) + " Ascensões dando:",
                                objetivoascender: "Você precisa de " + formata(objetivoascend) + " goiabas para a próxima ascensão",

                                acdb: [
                                        "+" + formata(ascendvar * 200) + " Goiabas Iniciais",
                                        "+" + formata(ascendvar * 50) + "% GBPS",
                                        "-" + (ascendvar * 0.02).toFixed(2) + " Escalonamento de custo (Limitado a 1.1)",
                                        "+" + formata(ascendvar) + " Clique base",
                                        "x" + formata(GLOBAL_ROSA) + " RPS",
                                        "+" + formata(ascendvar * 5) + "% Bônus do cavalo",
                                        "+" + formata(ascendvar * 3) + " Chicos Iniciais",
                                        "+" + formata(ascendvar) + " Rosinhas Iniciais"
                                ],

                                totaltranscend: formata(transcendvar) + " Transcendências dando:",
                                objetivotranscendhtml: "Você precisa de " + formata(objetivotranscend) + " ascensões para a próxima transcendência",

                                tcd: [
                                        "x" + (1 - transcendvar * 0.07),
                                        "x" + (1 - transcendvar * 0.07),
                                        "+" + (transcendvar * 0.025).toFixed(3) + " Escalonamento de custo",
                                        "+" + formata(transcendvar * 2) + " Ascensões necessárias"
                                ],

                                upgrades: [
                                        'Dê uma festa de goiabas (2x Produção de Chico)',
                                        'Pular no rio com o Ze lele (?)',
                                        'Passar inseticida para matar os bichos da goiaba (2x GBPS)',
                                        'Dar rosas para o Chico (3x GBPS)',
                                        'Quebre o coração do chico (10x GBPS!!!!!!!!!!!!!)',
                                        'Pegar goiabas com as duas mãos (2x goiabas por clique)',
                                        'Socar as árvores (10x goiabas por clique)',
                                        'Caçar a onça que comeu o Ze lele (?)',
                                        'Alimentar os cavalos com goiabas (10% aumento no bônus do cavalo)',
                                        'Criar uma empresa e administrar os chicos (+2% GBPS por chico)',
                                        'Investir as rosas na bolsa (+1% GBPS por 10000 Rosas)',
                                        'As rosinhas começam a trabalhar mais para impressionar os chicos malhados (+3% RPS por Rosinha)'
                                ],

                                stt: [
                                        'Cada Chico está produzindo ' + formata(CBTPSunitario) + ' GBPS totalizando ' + formata(CBTPS) + ' GBPS',
                                        'Cada Ze lele está produzindo ' + formata(ZLLPSunitario) + ' GBPS totalizando ' + formata(ZLLPS) + ' GBPS',
                                        'Cada Rosinha está produzindo ' + formata(ROSADPSunitario) + ' RPS totalizando ' + formata(ROSADPS) + ' RPS',
                                        'Cada Cavalo está aumentando ' + formata(CVL_BONUS * 100) + '% o GBPS totalizando ' + formata(BONUSCAVALO * 100) + '% GBPS',
                                        'Cada Chico Malhado está produzindo ' + formata(CBTMAPSunitario) + ' GBPS totalizando ' + formata(CBTMAPS) + ' GBPS',
                                        'Cada Monica está produzindo ' + formata(MONGPSunitario) + ' GBPS e ' + formata(MONRPSunitario) + ' RPS totalizando ' + formata(MONGPS) + ' GBPS e ' + formata(MONRPS) + ' RPS',
                                        '',
                                        ''
                                ],

                                CHICOS: formata(CBT) + " Chicos",
                                btnchicos: "+1 Chico " + formata(custochico) + " Goiabas",
                                ZELELES: formata(ZLL) + " Ze leles",
                                btnZELELES: "+1 Ze lele " + formata(custozelele) + " Goiabas",
                                ROSINHAS: formata(RS) + " Rosinhas",
                                btnrosinha: "+1 Rosinha " + formata(custorosinha) + " Goiabas",
                                CAVALOS: formata(CVL) + " Cavalos",
                                btncavalo: "+1 Cavalo " + formata(custocavalo) + " Rosas",
                                CHICOSMA: formata(CBTMA) + " Chicos Malhados",
                                btnchicosMA: "+1 Chico malhado " + formata(custochicomalhado) + " Goiabas",
                                MONICAS: formata(MON) + " Monicas",
                                btnmonica: "+1 Monica " + formata(customonica) + " Rosas",
                                CEBOLINHAS: formata(CEB) + " Cebolinhas",
                                btncebolinha: "+1 Cebolinha " + formata(custocebolinha) + " Monicas",

                                GOIABAS: "Goiabas: " + formata(GOB),
                                GOIABASDPS: "Goiabas por segundo: " + formata(GOBDPS),
                                ROSAS: "Rosas: " + formata(ROSA),
                                ROSASDPS: "Rosas por segundo: " + formata(ROSACALCDPS)
                        }
                };
                const personagens = {
                        Chico: document.getElementById("Chico"),
                        Chicos: document.getElementById("Chicos"),

                        Zelele: document.getElementById("Zelele"),
                        Zeleles: document.getElementById("Zeleles"),

                        Rosinha: document.getElementById("Rosinha"),
                        Rosinhas: document.getElementById("Rosinhas"),

                        cavalo: document.getElementById("cavalo"),
                        cavalos: document.getElementById("cavalos"),

                        chicomalhado: document.getElementById("chicomalhado"),
                        chicomalhados: document.getElementById("chicomalhados"),

                        monica: document.getElementById("monica"),
                        monicas: document.getElementById("monicas"),

                        cebolinha: document.getElementById("cebolinha"),
                        cebolinhas: document.getElementById("cebolinhas"),

                        sansao: document.getElementById("sansao"),
                        sansaos: document.getElementById("sansaos"),
                };

                const lang = textos[lingua];

                // Textos principais
                FAZENDINHA.textContent = lang.FAZENDINHA;
                totalcqtdiv.textContent = lang.totalcqtdiv;
                totalascension.textContent = lang.totalascension;
                objetivoascender.textContent = lang.objetivoascender;
                lang.acdb.forEach((txt, i) => {
                        const el = document.getElementById(`acdbonus${i + 1}`);
                        if (el) el.textContent = txt;
                });
                lang.tcd.forEach((txt, i) => {
                        const el = document.getElementById(`tcdbonus${i + 1}`);
                        if (el) el.textContent = txt;
                });
                totaltranscend.textContent = lang.totaltranscend;
                objetivotranscendhtml.textContent = lang.objetivotranscendhtml;
                lang.upgrades.forEach((txt, i) => {
                        const el = document.getElementById(`upgrade${i + 1}`);
                        if (el) el.textContent = txt;
                });
                lang.stt.forEach((txt, i) => {
                        const el = document.getElementById(`stt${i + 1}`);
                        if (el) el.textContent = txt;
                });
                personagens.Chico.textContent = lang.btnchicos;
                personagens.Chicos.textContent = lang.CHICOS;

                personagens.Zelele.textContent = lang.btnZELELES;
                personagens.Zeleles.textContent = lang.ZELELES;

                personagens.Rosinha.textContent = lang.btnrosinha;
                personagens.Rosinhas.textContent = lang.ROSINHAS;

                personagens.cavalo.textContent = lang.btncavalo;
                personagens.cavalos.textContent = lang.CAVALOS;

                personagens.chicomalhado.textContent = lang.btnchicosMA;
                personagens.chicomalhados.textContent = lang.CHICOSMA;

                personagens.monica.textContent = lang.btnmonica;
                personagens.monicas.textContent = lang.MONICAS;

                personagens.cebolinha.textContent = lang.btncebolinha;
                personagens.cebolinhas.textContent = lang.CEBOLINHAS;

                personagens.sansao.textContent = lang.btnsansao;
                personagens.sansaos.textContent = lang.SANSAO;

                GOIABAS.textContent = lang.GOIABAS;
                GOIABASDPS.textContent = lang.GOIABASDPS;
                ROSAS.textContent = lang.ROSAS;
                ROSASDPS.textContent = lang.ROSASDPS;

        }, 500);
});