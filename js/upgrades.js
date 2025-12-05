document.addEventListener("DOMContentLoaded", () => {

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
    },2500)


    document.getElementById("Upgrade1").onclick = function () {
        upgrade1Func();
        somupgrade();
    };

    document.getElementById("Upgrade2").onclick = function () {
        upgrade2Func();
        somupgrade();
    };

    document.getElementById("Upgrade3").onclick = function () {
        upgrade3Func();
        somupgrade();
    };

    document.getElementById("Upgrade4").onclick = function () {
        upgrade4Func();
        somupgrade();
    };

    document.getElementById("Upgrade5").onclick = function () {
        upgrade5Func();
        somupgrade();
    };

    document.getElementById("Upgrade6").onclick = function () {
        upgrade6Func();
        somupgrade();
    };

    document.getElementById("Upgrade7").onclick = function () {
        upgrade7Func();
        somupgrade();
    };

    document.getElementById("Upgrade8").onclick = function () {
        upgrade8Func();
        somupgrade();
    };

    document.getElementById("Upgrade9").onclick = function () {
        upgrade9Func();
        somupgrade();
    };

    document.getElementById("Upgrade10").onclick = function () {
        upgrade10Func();
        somupgrade();
    };

    document.getElementById("Upgrade11").onclick = function () {
        upgrade11Func();
        somupgrade();
    };
    document.getElementById("Upgrade12").onclick = function () {
        upgrade12Func();
        somupgrade();
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
somupgrade();
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

function somupgrade()
{
        audioPlayer.src = "mp3/upgrade.mp3";
        audioPlayer.volume = volumeControl.value;
        audioPlayer.play();
}
});
