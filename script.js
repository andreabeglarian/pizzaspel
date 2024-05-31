
let buttonTomaten = document.getElementById("buttonTomaten")
let sausImage = document.getElementById("saus")
buttonTomaten.addEventListener("click", klik);


let buttonKaas = document.getElementById("buttonKaas")
let kaasoppizzaImage = document.getElementById("kaasoppizza")
buttonKaas.addEventListener("click", klikKaas);


let buttonOlijf = document.getElementById("buttonOlijven")
let olijfImage = document.getElementById("olijfgesneden")
buttonOlijven.addEventListener("click", klikOlijf);

let buttonUi = document.getElementById("buttonUi")
let uiImage = document.getElementById("uienringen")
buttonUi.addEventListener("click", klikUi);

let buttonSalami = document.getElementById("buttonSalami")
let salamiImage = document.getElementById("plakjesalami")
buttonSalami.addEventListener("click", klikSalami);


function klik() {
    sausImage.hidden = !sausImage.hidden;
}


function klikKaas() {
    kaasoppizzaImage.hidden = !kaasoppizzaImage.hidden;
}


function klikOlijf() {
    olijfImage.hidden = !olijfImage.hidden;
}


function klikUi() {
    uiImage.hidden = !uiImage.hidden;
}

function klikSalami() {
    salamiImage.hidden = !salamiImage.hidden;
}


