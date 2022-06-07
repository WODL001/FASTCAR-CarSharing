function pracownik(imie, nazwisko, placa, mail) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.placa = placa;
    this.mail = mail;
}

const tab_pracownikow = [];


tab_pracownikow[0] =
    new pracownik("Michał", "Filipiak", 31245, "michal.filipiak@put.poznan.pl");

tab_pracownikow[1] =
    new pracownik("Igor", "Kabat", 99999999, "igor.kabat@student.put.poznan.pl");

tab_pracownikow[2] =
    new pracownik("Wojciech", "Dlugosz", 9, "wojciech.dlugosz@student.put.poznan.pl");

function wyswietlTab(tablica) {
    let txt = "";
    for (var i = 0; i < tablica.length; i++) {
        txt += "<tr>";
        txt += "<td>" + i + "</td>";
        txt += "<td>" + tablica[i].imie + "</td>";
        txt += "<td>" + tablica[i].nazwisko + "</td>";
        txt += "<td>" + tablica[i].placa + "</td>";
        txt += "<td><a href=mailto:" + tablica[i].mail + ">" + tablica[i].mail + "</a ></td>";
        txt += "</tr>";
    }

    let element_tBody = document.getElementById("daneP");
    element_tBody.innerHTML = txt;

}
