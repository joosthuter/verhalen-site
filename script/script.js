/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// De code van regel 3 tot 17 zijn gebaseerd op de code van Rico Zethof, geraadpleegd op 1/12/2018
// padding: 12 px 20 px;

var zoek = document.getElementById("zoek");
var filterBtn = document.getElementById("filter-knop");
var verras = document.getElementById("verras");
var overzicht = document.getElementById("overzicht");
var mijnVerhalen = document.getElementById("mijnVerhalen");
var voorkeuren = document.getElementById("voorkeuren");
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var body = document.getElementById("body");
var yeet = 1;

function yote() {
    yeet = 2;
}



document.getElementById("filters").style.display = "none";

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

/*function zoekJeRot() {

    if (width <= 400) {
        voorkeuren.style.display = "none";
        mijnVerhalen.style.display = "none";
        overzicht.style.display = "none";
        yeet = 2;
    }
}

function komTerug() {

    console.log("yeet");
    voorkeuren.style.display = "block";
    mijnVerhalen.style.display = "block";
    overzicht.style.display = "block";

}

console.log(yeet);

if (yeet == 2) {
    yeet = 1;
    console.log("yeet-active");
    filterBtn.addEventListener("click", komTerug);

}
zoek.addEventListener("click", zoekJeRot);*/
filterBtn.addEventListener("click", showFilters);
filterBtn.addEventListener("click", bigButton);



if (width < 950) {
    document.getElementById("logo").src = "images/logo-mobile.svg";
}
