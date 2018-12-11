/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// De code van regel 3 tot 17 zijn gebaseerd op de code van Rico Zethof, geraadpleegd op 1/12/2018
// padding: 12 px 20 px;

var filterBtn = document.getElementById("filter-knop");
var verras = document.getElementById("verras");



document.getElementById("filters").style.display = "none";

function showFilters() {

    // deze functie is gebaseerd op de code van Rico Zethof, geraadpleegd op 1/12/2018
    // padding: 12 px 20 px;

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


filterBtn.addEventListener("click", showFilters);
filterBtn.addEventListener("click", bigButton);

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (w < 950) {
    document.getElementById("logo").src = "images/logo-mobile.svg"
}
