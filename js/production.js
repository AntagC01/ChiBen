document.addEventListener("DOMContentLoaded", () => {
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

        setCookieBIG("gobValue", GOB);

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
});