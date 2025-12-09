document.addEventListener("DOMContentLoaded", () => {


        setInterval(() => {

                        const textos = {
                en: {
                        FAZENDINHA: 'Little Farm',
                        totalcqtdiv: totalcqt + " of 15 achieved",
                        totalascension: formata(ascendvar) + " Ascensions giving:",
                        objetivoascender: "You need " + formata(objetivoascend) + " guavas to the next ascension",
                        acdb1: "+" + formata(ascendvar * 200) + " Start Guavas",
                        acdb2: "+" + formata(ascendvar * 50) + "% GVPS",
                        acdb3: "-" + (ascendvar * 0.02).toFixed(2) + " Scaling cost (capped at 1.1)",
                        acdb4: "+" + formata(ascendvar * 1) + " Base Click",
                        acdb5: "x" + formata(GLOBAL_ROSA) + " RPS",
                        acdb6: "+" + formata(ascendvar * 5) + "% Horse bonus",
                        acdb7: "+" + formata(ascendvar * 3) + " Initial Chicos",
                        acdb8: "+" + formata(ascendvar) + " Initial Rosinhas",

                        totaltranscend: formata(transcendvar) + " Transcendences giving:",
                        objetivotranscendhtml: "You need " + formata(objetivotranscend) + " ascensions for the next transcend",
                        tcd1: "x" + (1 - (transcendvar * 0.07)),
                        tcd2: "x" + (1 - (transcendvar * 0.07)),
                        tcd3: "+" + (transcendvar * 0.025).toFixed(3) + " Cost scaling",
                        tcd4: "+" + formata(transcendvar * 2) + " Ascensions needed",

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
                                "Create a enterprise and manage the chicos (+2% GBPS per chico)",
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
                        objetivoascender: "Você precisa de " + formata(objetivoascend) + " goiabas para a proxima ascensão",
                        acdb1: "+" + formata(ascendvar * 200) + " Goiabas Iniciais",
                        acdb2: "+" + formata(ascendvar * 50) + "% GBPS",
                        acdb3: "-" + (ascendvar * 0.02).toFixed(2) + " Escalonamento de custo (Limitado a 1.1)",
                        acdb4: "+" + formata(ascendvar * 1) + " Clique base",
                        acdb5: "x" + formata(GLOBAL_ROSA) + " RPS",
                        acdb6: "+" + formata(ascendvar * 5) + "% Bonus do cavalo",
                        acdb7: "+" + formata(ascendvar * 3) + " Chicos Iniciais",
                        acdb8: "+" + formata(ascendvar) + " Rosinhas Iniciais",

                        totaltranscend: formata(transcendvar) + " Transcendencias dando:",
                        objetivotranscendhtml: "Você precisa de " + formata(objetivotranscend) + " ascensoes para a proxima transcendencia",
                        tcd1: "x" + (1 - (transcendvar * 0.07)),
                        tcd2: "x" + (1 - (transcendvar * 0.07)),
                        tcd3: "+" + (transcendvar * 0.025).toFixed(3) + " Escalonamento de custo",
                        tcd4: "+" + formata(transcendvar * 2) + " Ascensoes nescessarias",

                        upgrades: [
                                'De uma festa de goiabas (2x Produção Chico)',
                                'Pular no rio com o Ze lele (?)',
                                'Passar inseticida para matar os bixos da goiaba (2x GBPS)',
                                'De rosas para o Chico (3x GBPS)',
                                'Quebre o coração do chico (10x GBPS!!!!!!!!!!!!!)',
                                'Pegue goiabas com as duas mãos (2x goiabas por clique)',
                                'Soque as arvores (10x goiabas por clique)',
                                'Caçar a onça que comeu o Ze lele (?)',
                                'Alimentar os cavalos com goiabas (10% aumento no bonus dos cavalos)',
                                'Criar uma empresa e administrar os chicos (+2% GBPS per chico)',
                                'Investir as rosas na bolsa (+1% GBPS por 10000 Rosas)',
                                'As rosinhas começam a trabalhar mais pra impressionar os chicos malhados (+3% RPS per Rosinha)'
                        ],

                        stt: [
                                'Cada Chico esta produzindo ' + formata(CBTPSunitario) + ' GBPS totalizando ' + formata(CBTPS) + ' GBPS',
                                'Cada Ze lele esta produzindo ' + formata(ZLLPSunitario) + ' GBPS totalizando ' + formata(ZLLPS) + ' GBPS',
                                'Cada Rosinha esta produzindo ' + formata(ROSADPSunitario) + ' RPS totalizando ' + formata(ROSADPS) + ' RPS',
                                'Cada Cavalo esta aumentando em  ' + formata(CVL_BONUS * 100) + '% o GBPS totalizando ' + formata(BONUSCAVALO * 100) + '% GBPS',
                                'Cada Chico Malhado esta produzindo ' + formata(CBTMAPSunitario) + ' GBPS totalizando ' + formata(CBTMAPS) + ' GBPS',
                                'Cada Monica esta produzindo ' + formata(MONGPSunitario) + ' GBPS e ' + formata(MONRPSunitario) + ' RPS totalizando ' + formata(MONGPS) + ' GBPS e ' + formata(MONRPS) + ' RPS',
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


                const lang = textos[lingua];

                FAZENDINHA.textContent = lang.FAZENDINHA;
                totalcqtdiv.textContent = lang.totalcqtdiv;
                totalascension.textContent = lang.totalascension;
                objetivoascender.textContent = lang.objetivoascender;
                acdb1.textContent = lang.acdb1;
                acdb2.textContent = lang.acdb2;
                acdb3.textContent = lang.acdb3;
                acdb4.textContent = lang.acdb4;
                acdb5.textContent = lang.acdb5;
                acdb6.textContent = lang.acdb6;
                acdb7.textContent = lang.acdb7;
                acdb8.textContent = lang.acdb8;

                totaltranscend.textContent = lang.totaltranscend;
                objetivotranscendhtml.textContent = lang.objetivotranscendhtml;
                tcd1.textContent = lang.tcd1;
                tcd2.textContent = lang.tcd2;
                tcd3.textContent = lang.tcd3;
                tcd4.textContent = lang.tcd4;

                // upgrades
                upgrade1.textContent = lang.upgrades[0];
                upgrade2.textContent = lang.upgrades[1];
                upgrade3.textContent = lang.upgrades[2];
                upgrade4.textContent = lang.upgrades[3];
                upgrade5.textContent = lang.upgrades[4];
                upgrade6.textContent = lang.upgrades[5];
                upgrade7.textContent = lang.upgrades[6];
                upgrade8.textContent = lang.upgrades[7];
                upgrade9.textContent = lang.upgrades[8];
                upgrade10.textContent = lang.upgrades[9];
                upgrade11.textContent = lang.upgrades[10];
                upgrade12.textContent = lang.upgrades[11];

                // stt
                stt1.textContent = lang.stt[0];
                stt2.textContent = lang.stt[1];
                stt3.textContent = lang.stt[2];
                stt4.textContent = lang.stt[3];
                stt5.textContent = lang.stt[4];
                stt6.textContent = lang.stt[5];
                stt7.textContent = lang.stt[6];
                stt8.textContent = lang.stt[7];

                // personagens e botões
                CHICOS.textContent = lang.CHICOS;
                btnchicos.textContent = lang.btnchicos;
                ZELELES.textContent = lang.ZELELES;
                btnZELELES.textContent = lang.btnZELELES;
                ROSINHAS.textContent = lang.ROSINHAS;
                btnrosinha.textContent = lang.btnrosinha;
                CAVALOS.textContent = lang.CAVALOS;
                btncavalo.textContent = lang.btncavalo;
                CHICOSMA.textContent = lang.CHICOSMA;
                btnchicosMA.textContent = lang.btnchicosMA;
                MONICAS.textContent = lang.MONICAS;
                btnmonica.textContent = lang.btnmonica;
                CEBOLINHAS.textContent = lang.CEBOLINHAS;
                btncebolinha.textContent = lang.btncebolinha;

                GOIABAS.textContent = lang.GOIABAS;
                GOIABASDPS.textContent = lang.GOIABASDPS;
                ROSAS.textContent = lang.ROSAS;
                ROSASDPS.textContent = lang.ROSASDPS;

        }, 500);
});