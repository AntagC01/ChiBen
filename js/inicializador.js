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
const upgrade13 = document.getElementById("Upgrade13");

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
let up13 = parseInt(getCookie("up13Value")) || 0;



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

const CEBOLINHABLOCK = document.getElementById("CEBOLINHABLOCK");
const CEBOLINHAS = document.getElementById("cebolinhas");
const btncebolinha = document.getElementById("cebolinha");

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
let MONGPS = 0;
let MONGPSunitario = 0;
let MONRPS = 0;
let MONRPSunitario = 0;

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

//==================== INITIAL VARIABLES ====================
let GOB = Number(getCookie("gobValue")) || 0;
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

let MON = parseInt(getCookie("monicaValue")) || 0;
let customonica = parseInt(getCookie("customonicaValue")) || 10000;
let MONICA_BONUS_G = parseInt(getCookie("monicabonusGValue")) || 250;
let MONICA_BONUS_R = parseInt(getCookie("monicabonusRValue")) || 7;

let CEB = parseInt(getCookie("cebolinhaValue")) || 0;
let custocebolinha = parseInt(getCookie("custocebolinhaValue")) || 15;
let CEB_BONUS = parseInt(getCookie("cebolinhabonusValue")) || 1;

let GLOBAL = parseFloat(getCookie("globalbonusValue")) || 1;
let GLOBAL_ROSA = parseFloat(getCookie("globalbonusrosaValue")) || 1;
let CLICK = parseInt(getCookie("clickValue")) || 1;

let escalamento = parseFloat(getCookie("escalamentoValue")) || 1.25;

let ascendvar = parseInt(getCookie("ascendValue")) || 0;
let transcendvar = parseInt(getCookie("transcendValue")) || 0;

let MULTTRANS = parseFloat(getCookie("multtransValue")) || 1;
let ROSACALCDPS = 0;

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
let objetivoascend = Number(getCookie("objetivoascendValue")) || 10000000;
let objetivotranscend = parseInt(getCookie("objetivotranscendValue")) || 10;
let multcompra = 1;

let GOBDPS = 0;
const audio = document.querySelector("audio");
const volumeControl = document.getElementById("volume");
volumeControl.addEventListener("input", () => audio.volume = volumeControl.value);

const audios = [
    { src: "mp3/click_satisfatorio.wav", peso: 2 }
    //{ src: "mp3/ui-1763986055146.mp3", peso: 2 },
];






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

function setCookieBIG(name, value) {
    const anos = 10;
    const maxAge = anos * 365 * 24 * 60 * 60;
    document.cookie = `${name}=${value.toExponential(2)}; path=/; max-age=${maxAge}`;
}

function showCustomAlert(message) {
    document.getElementById('customAlertMessage').textContent = message;
    document.getElementById('customAlertOverlay').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlertOverlay').style.display = 'none';
}

//==================== INITIAL ALERT ====================
if (lingua == 'en') {
    showCustomAlert("You are just a guava thief farmer dreaming of " + objetivoascend.toLocaleString('en-US') + " guavas, this is your goal");
}
if (lingua == 'pt') {
    showCustomAlert("Você é só um ladrão de goiabas com um sonho de  " + objetivoascend.toLocaleString('pt-BR') + " goiabas, essa é sua meta");
}