// Startseite
document.getElementById("menue").style.display ="lock";
document.getElementById("musik").style.display = "none";
document.getElementById("geschwindigkeit").style.display = "none";
document.getElementById("aussendaten").style.display = "none";
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


fetch("http://192.168.0.69:5000/music")
.then(response => response.json())
.then(function(Playlist) {
    console.log("Playlist", Playlist);

document.getElementsByClassName("Daten_Musik")[0].append(Playlist[0].artist, " - ", Playlist[0].title);
document.getElementsByClassName("Daten_Musik")[1].append(Playlist[1].artist, " - ", Playlist[1].title);
document.getElementsByClassName("Daten_Musik")[2].append(Playlist[2].artist, " - ", Playlist[2].title)

});

var song = document.getElementById("audio");
const pushButton_play = document.querySelector(".Button_play");
function audio_play() {
    song.play()
};
pushButton_play.addEventListener('click', audio_play);

const pushButton_pause = document.querySelector(".Button_pause");
function audio_pause() {
    song.pause()
};
pushButton_pause.addEventListener('click', audio_pause);


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
document.getElementById("aussendaten").style.display="block";
}
pushButton_Temperatur.addEventListener('click', clearAndshow_Temperatur);

const zurueckButton_Temperatur = document.querySelector(".Button_Home");
function zurueck_Temperatur() {
document.getElementById("aussendaten").style.display = "none";
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


//Fenster-Seite - "Coupé-Version nur Fenster vorne links und rechts vorhanden"
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

const pushButton_runter_rechts = document.querySelector(".Button_runter_rechts");
function open_window_rechts() {
    fetch('http://192.168.0.69:5000/window/down')
            .then(console.log("done open"));
}
pushButton_runter_rechts.addEventListener('click', open_window_rechts);


const pushButton_hoch_rechts = document.querySelector(".Button_hoch_rechts");
function close_window_rechts() {
    fetch('http://192.168.0.69:5000/window/up')
        .then(console.log("done close"));
}
pushButton_hoch_rechts.addEventListener('click', close_window_rechts);

const pushButton_runter_links = document.querySelector(".Button_runter_links");
function open_window_links() {
    fetch('http://192.168.0.69:5000/window/down')
        .then(console.log("done open"));
}
pushButton_runter_links.addEventListener('click', open_window_links);


const pushButton_hoch_links = document.querySelector(".Button_hoch_links");
function close_window_links() {
    fetch('http://192.168.0.69:5000/window/up')
        .then(console.log("done close"));
}
pushButton_hoch_links.addEventListener('click', close_window_links);

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


//Schliessen Seite - Funktion Buttons
const pushButton_open = document.querySelector(".Button_auf");

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
pushButton_close.addEventListener('click', close_car);


//Daten von Pi
"use strict";

var Interval = setInterval(fetchData, 1000);

function fetchData () {

        
fetch("http://192.168.0.69:5000/status").then(function (response) {
    response.text().then(function (text) {
        console.log(text);
    
        var daten = text.split(",");
        var Verbrauchsdaten = daten[0].split(":");
        var Feuchtigkeitsdaten = daten[1].substr(15, 5);
        var Druckdaten = daten[2].substr(15, 6);
        var Geschwindigkeitsdaten = daten[3].split(":");
        var Temperaturdaten = daten[4].substr(12, 4);

        var Geschwindigkeitsanzeige = document.getElementsByClassName("Geschwindigkeit")[0];
        Geschwindigkeitsanzeige.innerHTML = ("Geschwindigkeit: " + Geschwindigkeitsdaten [1] + " km/h");
        
        var Datenanzeige1 = document.getElementsByClassName("Daten_Temperatur")[0]
        Datenanzeige1.innerHTML = ("Temperatur: " + Temperaturdaten + " °C");

        var Datenanzeige2 = document.getElementsByClassName("Daten_Feuchtigkeit")[0]
        Datenanzeige2.innerHTML = ("Feuchtigkeit: " + Feuchtigkeitsdaten + " g/m³");

        var Datenanzeige3 = document.getElementsByClassName("Daten_Druck")[0]
        Datenanzeige3.innerHTML = ("Druck: " + Druckdaten + " Pa");

        var Verbrauchsanzeige = document.getElementsByClassName("Kraftstoff")[0]
        Verbrauchsanzeige.innerHTML = ("Verbrauch: " + Verbrauchsdaten[1] + " l/km");
    });
});
}



//Uhrzeit und Datum
function Zeit(){
var Stunden, Minuten;
var StundenZahl, MinutenZahl;
var HeuteZeit;
var Anzeige;
    
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
    Anzeige = Stunden + ":" + Minuten;
    zeit.innerHTML = Anzeige;
    window.setTimeout("Zeit();", 1000);
}
window.onload = Zeit;
   
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
       