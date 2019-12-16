// Startseite
document.getElementById("menue").style.display ="lock";
document.getElementById("musik").style.display = "none";
document.getElementById("geschwindigkeit").style.display = "none";
document.getElementById("temperatur").style.display = "none";
document.getElementById("navi").style.display = "none";
document.getElementById("kraftstoff").style.display = "none";
document.getElementById("fenster").style.display = "none";
document.getElementById("schliessen").style.display = "none";
    
//Musik-Seite
const pushButton_Musik= document.querySelector(".Button_Musik");
function clearAndshow_Musik() {
document.getElementById("menue").style.display = "none";
document.getElementById("musik").style.display="block";
}
pushButton_Musik.addEventListener('click', clearAndshow_Musik);

const zurueckButton_Musik= document.querySelector(".Button_Home");
function zurueck_Musik() {
document.getElementById("musik").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Musik.addEventListener('click', zurueck_Musik);

//Geschwindigkeit-Seite
const pushButton_Geschwindigkeit= document.querySelector(".Button_Geschwindigkeit");
function clearAndshow_Geschwindigkeit() {
document.getElementById("menue").style.display = "none";
document.getElementById("geschwindigkeit").style.display="block";
}
pushButton_Geschwindigkeit.addEventListener('click', clearAndshow_Geschwindigkeit);

const zurueckButton_Geschwindigkeit = document.querySelector(".Button_Home");
function zurueck_Geschwindigkeit() {
document.getElementById("geschwindigkeit").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Geschwindigkeit.addEventListener('click', zurueck_Geschwindigkeit);

//Temperatur-Seite
const pushButton_Temperatur= document.querySelector(".Button_Temperatur");
function clearAndshow_Temperatur() {
document.getElementById("menue").style.display = "none";
document.getElementById("temperatur").style.display="block";
}
pushButton_Temperatur.addEventListener('click', clearAndshow_Temperatur);

const zurueckButton_Temperatur = document.querySelector(".Button_Home");
function zurueck_Temperatur() {
document.getElementById("temperatur").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Temperatur.addEventListener('click', zurueck_Temperatur);

//Navi-Seite
const pushButton_Navi= document.querySelector(".Button_Navi");
function clearAndshow_Navi() {
document.getElementById("menue").style.display = "none";
document.getElementById("navi").style.display="block";
}
pushButton_Navi.addEventListener('click', clearAndshow_Navi);

const zurueckButton_Navi = document.querySelector(".Button_Home");
function zurueck_Navi() {
document.getElementById("navi").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Navi.addEventListener('click', zurueck_Navi);

//Kraftstoff-Seite
const pushButton_Tanken = document.querySelector(".Button_Tanken");
function clearAndshow_Tanken() {
document.getElementById("menue").style.display = "none";
document.getElementById("kraftstoff").style.display="block";
}
pushButton_Tanken.addEventListener('click', clearAndshow_Tanken);

const zurueckButton_Tanken = document.querySelector(".Button_Home");
function zurueck_Tanken() {
document.getElementById("kraftstoff").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Tanken.addEventListener('click', zurueck_Tanken);

//Fenster-Seite
const pushButton_Fenster = document.querySelector(".Button_Fenster");
function clearAndshow_Fenster() {
document.getElementById("menue").style.display = "none";
document.getElementById("fenster").style.display="block";
}
pushButton_Fenster.addEventListener('click', clearAndshow_Fenster);

const zurueckButton_Fenster = document.querySelector(".Button_Home");
function zurueck_Fenster() {
document.getElementById("fenster").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Fenster.addEventListener('click', zurueck_Fenster);
    
//Schliessen-Seite
const pushButton_Schliessen = document.querySelector(".Button_Schloss");
function clearAndshow_Schliessen() {
document.getElementById("menue").style.display = "none";
document.getElementById("schliessen").style.display="block";
}
pushButton_Schliessen.addEventListener('click', clearAndshow_Schliessen);

const zurueckButton_Schliessen = document.querySelector(".Button_Home");
function zurueck_Schliessen() {
document.getElementById("schliessen").style.display = "none";
document.getElementById("menue").style.display="block";
}
zurueckButton_Schliessen.addEventListener('click', zurueck_Schliessen);


//Pi Anbindung
"use strict";

fetch("http://192.168.0.69:5000/status").then(function (response) {
    response.text().then(function (text) {
        console.log(text);

        var daten = text.split(",");
        var Ver = daten[0].split(":");
        var Feucht = daten[1].substr(15, 6);
        var Dru = daten[2].substr(15, 6);
        var Gesch = daten[3].split(":");
        var Temp = daten[4].substr(12, 4);

        document.getElementsByClassName("Daten")[0].append(Gesch[1] + " km/h");
        document.getElementsByClassName("Daten")[1].append(Ver[1] + " l");
        document.getElementsByClassName("Daten")[2].append(Dru + " Pa");
        document.getElementsByClassName("Daten")[3].append(Temp + " °C");
        document.getElementsByClassName("Daten")[4].append(Feucht[1] + " g/m³");
    });
});

/*const pushButton_open = document.querySelector(".Button_auf");

function open_car() {
    fetch('http://192.168.0.69:5000/action/unlock')
        .then(console.log("done unlock"));
}
pushButton_open.addEventListener('click', open_car);


const pushButton_close = document.querySelector(".Button_zu");

function close_car() {
    fetch('http://192.168.0.69:5000/action/lock')
        .then(console.log("done lock"));
}
pushButton_close.addEventListener('click', close_car);*/

//Uhrzeit und Datum
function Zeit(){
var Stunden, Minuten;
var StundenZahl, MinutenZahl;
var HeuteZeit;
    
HeuteZeit = new Date();
StundenZahl = HeuteZeit.getHours();
MinutenZahl = HeuteZeit.getMinutes();

    if (StundenZahl < 10) {
        Stunden = "0" + StundenZahl;
    }
    else {
         Stunden = StundenZahl;
    }
    if (MinutenZahl < 10) {
        Minuten = "0" + MinutenZahl;
    }
    else {
        Minuten = MinutenZahl;
    }
    HeuteZeit = Stunden + ":" + Minuten;
    return HeuteZeit;
    }

var ZeitAusgabe = Zeit();
document.getElementById("zeit").textContent += ZeitAusgabe;
   

   
function Datum() {
    var Tag, Monat, Jahr;
    var HeuteDatum;
       
    HeuteDatum = new Date();
    Tag = HeuteDatum.getDate();
    Monat = HeuteDatum.getMonth() + 1;
    Jahr = HeuteDatum.getFullYear();
        
    if (Tag < 10) {
        Tag = '0' + Tag;
        }
    if (Monat < 10) {
        Monat = '0' + Monat;
        }
       
    HeuteDatum = Tag + "." + Monat + "." + Jahr;
    return HeuteDatum;
    }

var DatumAusgabe = Datum();
document.getElementById("datum").textContent += DatumAusgabe;
       