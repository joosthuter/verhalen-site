/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var filterBtn = document.getElementById("filter-knop");
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var verras = document.getElementById("verras");
var huh = document.getElementById('huh');
var zwart = document.getElementById('black');
var blox = document.getElementById('blox');
var bloxLetters = document.getElementById('bloxLetters');
var yeet = 1;
var textOne = document.getElementById("textOne");
var textOneContent = document.getElementById("textOneContent");
var verhaalBtn = document.querySelector("article img.verhaalImg");
var error = document.getElementById("error");
var errorMessage = document.getElementById("popUpErr");
var titel = document.querySelector("span.titel");
var verhaalIcon = document.getElementById("verhaalIcon");
var verhaalLink = document.getElementById("verhaalLink");
var popUp = document.getElementById("popUp");
var stinkert = document.querySelector("footer div img.stinker");
var bodyHaiku = document.getElementById("bodyHaiku");
var toepassen = document.getElementById("toepassen");
var filters = document.getElementById("filters");
var deadDiv = document.getElementById("divOfDeath");

var dab = 0;



/*function showFilter() {
    if (filters.style.display === "flex") {

        filters.classList.add("hide");
        filters.style.display = "none";
    } else {
        filters.classList.remove("hide");
        filters.classList.add("show");
        filters.style.display = "flex";
    }
}*/

/*function showFilter() {
    if (dab == 1) {
        dab = 0;
        filters.classList.remove("show");
        filters.classList.add("hide");
        filters.style.display = "flex";
    } else if (dab == 0) {
        dab = 1;
        filters.classList.remove("hide");
        filters.classList.add("show");
        filters.style.display = "flex";
    }
}*/

function index() {
    filters.style.zIndex = 18;
    console.log(dab);
}

function showFilter() {

    if (dab == 1) {
        dab = 0;
        deadDiv.style.height = "12em";
        filters.style.top = "-40em";
        filters.style.zIndex = -1;
    } else if (dab === 0) {
        dab = 1;
        deadDiv.style.height = "45em";
        filters.style.top = "0em";
        window.setTimeout(index, 1000);
    }
}

function bigButton() {
    if (filterBtn.classList.contains("filter-knop")) {
        filterBtn.classList.remove("filter-knop");
        filterBtn.classList.add("filter-actief");
        verras.style.display = "none";

    } else {
        filterBtn.classList.remove("filter-actief");
        filterBtn.classList.add("filter-knop");
        verras.style.display = "inline";
    }
}

function rollGif() {
    popUp.classList.remove("popdown");
    popUp.classList.add("popup");
    verhaalIcon.src = "images/animatie-999.gif";
    verhaalBtn.src = "images/animatie-2000.gif";
    verhaalLink.href = "verhalen/mijn-full.html";
}


function errorYeet() {
    errorMessage.classList.remove("popdown");
    errorMessage.classList.add("popupErr");
}

function stinkAway() {
    popUp.classList.remove("popdown");
    popUp.classList.add("popdown");
}



function biemBiem() {

    if (yeet == 1) {
        yeet = 2;

        zwart.style.height = "0";
        blox.classList.remove("twoBlind");
        blox.classList.add("two");
        bloxLetters.classList.remove("backgroundBlind");
        bloxLetters.classList.add("background");

        console.log(yeet);

    } else if (yeet == 2) {

        yeet = 3;
        console.log(yeet);
        blox.style.marginTop = "-120em";




    } else if (yeet == 3) {

        yeet = 4;
        console.log(yeet);
        bloxLetters.classList.remove("background");
        bloxLetters.classList.add("backgroundYeet");
        bodyHaiku.style.backgroundColor = "white";

    } else if (yeet == 4) {

        yeet = 5;
        bloxLetters.classList.remove("backgroundYeet");
        bloxLetters.classList.add("backgroundLast");

    } else if (yeet == 5) {

        yeet = 6;
        bloxLetters.classList.remove("backgroundLast");
        bloxLetters.classList.add("backgroundBlind");
        textOne.style.display = "flex";
    } else if (yeet == 6) {

        yeet = 7;
        textOneContent.style.display = "flex";
        textOneContent.style.flexDirection = "column";
        textOneContent.style.letterSpacing = "0";
        titel.style.fontSize = "7vw";
        textOneContent.style.fontSize = "5vw";
        textOneContent.style.textTransform = "none";
    } else if (yeet == 7) {

        yeet = 8;
        console.log(yeet);
        textOneContent.style.fontWeight = "100";
        textOneContent.style.fontFamily = "Georgia";
        huh.style.display = "none";
    }
}

if (huh) {
    huh.addEventListener("click", biemBiem);
}



filterBtn.addEventListener("click", showFilter);
filterBtn.addEventListener("click", bigButton);
verhaalBtn.addEventListener("click", rollGif);
error.addEventListener("click", errorYeet);
stinkert.addEventListener("click", stinkAway);
toepassen.addEventListener('submit', function (event) {
    event.preventDefault();
    return false;

}, false);



if (width < 816) {
    document.getElementById("logo").src = "../images/logo-mobile.svg";
    if (filterBtn) {
        document.getElementById("logo").src = "images/logo-mobile.svg";
    }

}
