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



    // Buttons verstecken und Inhalt darstellen

    const pushButton_fuel = document.querySelector(".Button_fuel");

    function clearAndshow_fuel() {
        document.getElementById("Buttons").style.display = "none";
        var temp_fuel = document.getElementsByClassName("template_fuel")[0];
        var clon_fuel = temp_fuel.content.cloneNode(true);
        document.body.appendChild(clon_fuel);
    }
    pushButton_fuel.addEventListener('click', clearAndshow_fuel);


    const pushButton_music = document.querySelector(".Button_music"); //KEIN getById /byClassName... -> findet es nicht

    function clearAndshow_music() {
        document.getElementById("Buttons").style.display = "none";
        var temp_music = document.getElementsByClassName("template_music")[0];
        var clon_music = temp_music.content.cloneNode(true);
        document.body.appendChild(clon_music);
    }
    pushButton_music.addEventListener('click', clearAndshow_music);

    const pushButton_temperatur = document.querySelector(".Button_temperatur");
    function clearAndshow_temperatur() {
        document.getElementById("Buttons").style.display = "none";
        var temp_temperatur = document.getElementsByClassName("template_temperatur")[0];
        var clon_temperatur = temp_temperatur.content.cloneNode(true);
        document.body.appendChild(clon_temperatur);
    }
    pushButton_temperatur.addEventListener('click', clearAndshow_temperatur);


    const pushButton_speed = document.querySelector(".Button_speed");

    function clearAndshow_speed() {
        document.getElementById("Buttons").style.display = "none";
        var temp_speed = document.getElementsByClassName("template_speed")[0];
        var clon_speed = temp_speed.content.cloneNode(true);
        document.body.appendChild(clon_speed);
    }
    pushButton_speed.addEventListener('click', clearAndshow_speed);


    const pushButton_navi = document.querySelector(".Button_navi");
    function clearAndshow_navi() {
        document.getElementById("Buttons").style.display = "none";
        var temp_navi = document.getElementsByClassName("template_navi")[0];
        var clon_navi = temp_navi.content.cloneNode(true);
        document.body.appendChild(clon_navi);
    }
    pushButton_navi.addEventListener('click', clearAndshow_navi);

    const pushButton_window = document.querySelector(".Button_window");
    function clearAndshow_window() {
        document.getElementById("Buttons").style.display = "none";
        var temp_window = document.getElementsByClassName("template_window")[0];
        var clon_window = temp_window.content.cloneNode(true);
        document.body.appendChild(clon_window);
    }
    pushButton_window.addEventListener('click', clearAndshow_window);

    const pushButton_lock = document.querySelector(".Button_lock");
    function clearAndshow_lock() {
        document.getElementById("Buttons").style.display = "none"; // dann keine templates verwenden sondern divs
        var temp_lock = document.getElementsByClassName("template_lock")[0];
        var clon_lock = temp_lock.content.cloneNode(true);
        document.body.appendChild(clon_lock); // nur bei template Lösung sonst display block   
    }
    pushButton_lock.addEventListener('click', clearAndshow_lock);

    //zurueck Button

    const pushButton_zurueck = document.querySelector(".Pfeilbutton")
    function zurueckButton() {
        console.log("Huhu");
        document.getElementById("fuel_t").style.display = "none"; // was muss man machen dass es wirklich "removed"; gibt es eine Möglichkeit, dass man das nicht für jeden ZurückButton machen muss?
        var temp_zurueck = document.getElementsByClassName("template_F")[0];
        var clon_zurueck = temp_zurueck.content.cloneNode(true);
        document.body.appendChild(clon_zurueck);
    }
    pushButton_zurueck.addEventListener("click", zurueckButton);



    //Uhrzeit und Datum
    function DatumZeit() {
        var Tag, Monat, Jahr;
        var Stunden, Minuten;
        var StundenZahl, MinutenZahl;
        var Heute;
        var Anzeige;


        Heute = new Date();
        Tag = Heute.getDate();
        Monat = Heute.getMonth() + 1;
        Jahr = Heute.getFullYear();
        StundenZahl = Heute.getHours();
        MinutenZahl = Heute.getMinutes();

        if (Tag < 10) {
            Tag = '0' + Tag;
        }
        if (Monat < 10) {
            Monat = '0' + Monat;
        }

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

        Anzeige = Tag + "." + Monat + "." + Jahr + " - " + Stunden + ":" + Minuten
        datumzeit.innerHTML = Anzeige;
        window.setTimeout("DatumZeit();", 1000);
    }
    window.onload = DatumZeit;
