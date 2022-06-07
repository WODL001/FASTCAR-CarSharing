function czas() {
    const obiektCzas = new Date();
    let godzina = obiektCzas.getHours();
    let minuta = obiektCzas.getMinutes();
    let sekunda = obiektCzas.getSeconds();
    let wartosc_czasu = "" + (godzina > 12) ? godzina - 12 : godzina;
    if (wartosc_czasu == 0) wartosc_czasu = 12;
    wartosc_czasu += (minuta < 10) ? ":0" : ":" + minuta;
    wartosc_czasu += (sekunda < 10) ? ":0" : ":" + sekunda;
    wartosc_czasu += (godzina > 12) ? "pm" : "am" + godzina;

    let elementCzas = document.getElementById("zegar");
    elementCzas.value = wartosc_czasu;
    setTimeout(czas, 1);
}

//instrukcja warunkowa
//if (true) {

//} else { }

//operator warunlkowy
// (warunek) ? true:false


var sekundy = 0;
var ms = 0;
var timerID = null;
function stoper() {
    if (ms >= 9) {
        sekundy += 1;
        ms = 0;
    }
    else {
        ms += 1;
    }
    let elem = document.getElementById("stoper");
    elem.value = sekundy + "." + ms;
}

function startStoper() {
    timerID = setInterval(stoper, 100);


}

function stopStoper() {
    if (timerID != null) {
        clearInterval(timerID);
    }
}
//funkcja stop dokonczyc