document.addEventListener("DOMContentLoaded", () => {

        setInterval(() => {
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
                        tcd3.textContent = "+" + (transcendvar * 0.025).toFixed(3) + " Cost scaling";
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
                        stt6.textContent = 'Each Monica is producing ' + MONGPSunitario.toLocaleString('en-US') + ' GBPS and ' + MONRPSunitario.toLocaleString('en-US') + ' RPS totalizing ' + MONGPS.toLocaleString('en-US') + ' GVPS and ' + MONRPS.toLocaleString('en-US') + ' RPS';
                        stt7.textContent = '';
                        stt8.textContent = '';


                        CHICOS.textContent = CBT + " Chicos";
                        btnchicos.textContent = "+1 Chico " + custochico.toLocaleString('en') + " Guavas";

                        ZELELES.textContent = ZLL + " Ze leles";
                        btnZELELES.textContent = "+1 Ze lele " + custozelele.toLocaleString('en') + " Guavas";

                        ROSINHAS.textContent = RS + " Rosinhas";
                        btnrosinha.textContent = "+1 Rosinha " + custorosinha.toLocaleString('en') + " Guavas";

                        CAVALOS.textContent = CVL + " Horses";
                        btncavalo.textContent = "+1 Horse " + custocavalo.toLocaleString('en') + " Roses";

                        CHICOSMA.textContent = CBTMA + " Chico Bulked";
                        btnchicosMA.textContent = "+1 Chico bulked " + custochicomalhado.toLocaleString('en') + " Guavas";

                        MONICAS.textContent = MON + " Monicas";
                        btnmonica.textContent = "+1 Monica " + customonica.toLocaleString('en') + " Roses";

                        CEBOLINHAS.textContent = CEB + " Cebolinhas";
                        btncebolinha.textContent = "+1 Cebolinha " + custocebolinha.toLocaleString('en') + " Monicas";

                        GOIABAS.textContent = "Guavas: " + GOB.toLocaleString('en');
                        GOIABASDPS.textContent = "Guavas per second: " + GOBDPS.toLocaleString('en');


                        ROSAS.textContent = "Roses: " + ROSA.toLocaleString('en');
                        ROSASDPS.textContent = "Roses per second: " + ROSACALCDPS.toLocaleString('en');
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
                        tcd3.textContent = "+" + (transcendvar * 0.025).toFixed(3) + " Escalonamento de custo";
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

                        stt1.textContent = 'Cada Chico esta produzindo ' + CBTPSunitario.toLocaleString('pt-BR') + ' GBPS totalizando ' + CBTPS.toLocaleString('pt-BR') + ' GBPS';
                        stt2.textContent = 'Cada Ze lele esta produzindo ' + ZLLPSunitario.toLocaleString('pt-BR') + ' GBPS totalizando ' + ZLLPS.toLocaleString('pt-BR') + ' GBPS';
                        stt3.textContent = 'Cada Rosinha esta produzindo ' + ROSADPSunitario.toLocaleString('pt-BR') + ' RPS totalizando ' + ROSADPS.toLocaleString('pt-BR') + ' RPS';
                        stt4.textContent = 'Cada Cavalo esta aumentando em  ' + (CVL_BONUS * 100).toLocaleString('pt-BR') + '% o GBPS totalizando ' + (BONUSCAVALO * 100).toLocaleString('pt-BR') + '% GBPS';
                        stt5.textContent = 'Cada Chico Malhado esta produzindo ' + CBTMAPSunitario.toLocaleString('pt-BR') + ' GBPS totalizando ' + CBTMAPS.toLocaleString('pt-BR') + ' GBPS';
                        stt6.textContent = 'Cada Monica esta produzindo ' + MONGPSunitario.toLocaleString('pt-BR') + ' GBPS e ' + MONRPSunitario.toLocaleString('pt-BR') + ' RPS totalizando ' + MONGPS.toLocaleString('pt-BR') + ' GBPS e ' + MONRPS.toLocaleString('pt-BR') + ' RPS';
                        stt7.textContent = '';
                        stt8.textContent = '';


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

                        MONICAS.textContent = MON + " Monicas";
                        btnmonica.textContent = "+1 Monica " + customonica.toLocaleString('pt-BR') + " Rosas";

                        CEBOLINHAS.textContent = CEB + " Cebolinhas";
                        btncebolinha.textContent = "+1 Cebolinha " + custocebolinha.toLocaleString('pt-BR') + " Monicas";


                        GOIABAS.textContent = "Goiabas: " + GOB.toLocaleString('pt-BR');
                        GOIABASDPS.textContent = "Goiabas por segundo: " + GOBDPS.toLocaleString('pt-BR');


                        ROSAS.textContent = "Rosas: " + ROSA.toLocaleString('pt-BR');
                        ROSASDPS.textContent = "Rosas por segundo: " + ROSACALCDPS.toLocaleString('pt-BR');
                }
        }, 500);
});