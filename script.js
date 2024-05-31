
let buttonTomaten = document.getElementById("buttonTomaten").addEventListener("click", klik);
let sausImage = document.getElementById("saus")

function klik() {
    sausImage.hidden = !sausImage.hidden;
}

let buttonKaas = document.getElementById("buttonKaas").addEventListener("click", klikKaas);
let kaasoppizzaImage = document.getElementById("kaasoppizza")

function klikKaas() {
    kaasoppizzaImage.hidden = !kaasoppizzaImage.hidden;
}

let buttonOlijf = document.getElementById("buttonOlijven").addEventListener("click", klikOlijf);
let olijfImage = document.getElementById("olijfgesneden")

function klikOlijf() {
    olijfImage.hidden = !olijfImage.hidden;
}

let buttonUi = document.getElementById("buttonUi").addEventListener("click", klikUi);
let uiImage = document.getElementById("uienringen")

function klikUi() {
    uiImage.hidden = !uiImage.hidden;
}

let buttonSalami = document.getElementById("buttonSalami").addEventListener("click", klikSalami);
let salamiImage = document.getElementById("plakjesalami")

function klikSalami() {
    salamiImage.hidden = !salamiImage.hidden;
}


