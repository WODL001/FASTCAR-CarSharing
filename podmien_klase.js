//alert("ok");

function zmienKlase(idObiektu,nazwaKlasy) {
    let element = document.getElementById(idObiektu);
    element.className = nazwaKlasy;
}

var napis = "ruchomy tekst.....";
var dziala = false;

function ruchomy() {
    let element = document.getElementById('rTekst');
    element.value = napis;
    napis = napis.substring(1, napis.length) + napis.substring(0, 1);

    //uchomy tekst.....r

    
    element.value = napis;

    if (dziala) {
        setTimeout('ruchomy()', 200);
    }

}