/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// De code van regel 3 tot 17 zijn gebaseerd op de code van Rico Zethof, geraadpleegd op 1/12/2018


var filterBtn = document.getElementById("filter-knop");
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var email = document.getElementById("email");
var huh = document.getElementById('huh');
var zwart = document.getElementById('black');
var blox = document.getElementById('blox');
var bloxLetters = document.getElementById('bloxLetters');
var images = document.querySelectorAll("img");
var yeet = 1;
var textOne = document.getElementById("textOne");
var textOneContent = document.getElementById("textOneContent");
var verhaalBtn = document.querySelector("article img.verhaalImg");
console.log("yeet");


function showFilters() {

    // deze functie is gebaseerd op de code van Rico Zethof, geraadpleegd op 1/12/2018


    var x = document.getElementById("filters");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
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
    verhaalBtn.src = "images/check2.gif";
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
        blox.style.marginTop = "-100em";
        huh.innerHTML = "hmm";


    } else if (yeet == 3) {

        yeet = 4;
        console.log(yeet);
        bloxLetters.classList.remove("background");
        bloxLetters.classList.add("backgroundYeet");
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
    }
}

if (huh) {
    huh.addEventListener("click", biemBiem);
}
filterBtn.addEventListener("click", showFilters);
filterBtn.addEventListener("click", bigButton);
verhaalBtn.addEventListener("click", rollGif);



if (width < 950) {
    document.getElementById("logo").src = "images/logo-mobile.svg";
    console.log("yeet!");
}


document.getElementById("filters").style.display = "none";
