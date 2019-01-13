/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var filterBtn = document.getElementById("filter-knop");
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var email = document.getElementById("email");
var verras = document.getElementById("verras");
var huh = document.getElementById('huh');
var zwart = document.getElementById('black');
var blox = document.getElementById('blox');
var bloxLetters = document.getElementById('bloxLetters');
var images = document.querySelector("img");
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




function showFilters() {

    // deze functie is gebaseerd op de code van Rico Zethof, geraadpleegd op 1/12/2018


    var x = document.getElementById("filters");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
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
        /*zwart.classList.remove("one");
        zwart.classList.add("oneBlind");*/
        zwart.style.height = "0";
        blox.classList.remove("twoBlind");
        blox.classList.add("two");
        bloxLetters.classList.remove("backgroundBlind");
        bloxLetters.classList.add("background");
        huh.innerHTML = "wat?";
        console.log(yeet);

    } else if (yeet == 2) {

        yeet = 3;
        console.log(yeet);
        blox.style.marginTop = "-120em";

        huh.innerHTML = "hmm";


    } else if (yeet == 3) {

        yeet = 4;
        console.log(yeet);
        bloxLetters.classList.remove("background");
        bloxLetters.classList.add("backgroundYeet");
        bodyHaiku.style.backgroundColor = "white";
        huh.innerHTML = "gek zeg";
    } else if (yeet == 4) {

        yeet = 5;
        bloxLetters.classList.remove("backgroundYeet");
        bloxLetters.classList.add("backgroundLast");
        huh.innerHTML = "ehhm..?";
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
        textOneContent.style.fontFamily = "Times";

    }
}

if (huh) {
    huh.addEventListener("click", biemBiem);
}



filterBtn.addEventListener("click", showFilters);
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


document.getElementById("filters").style.display = "none";
