// Buttons verstecken und Inhalt darstellen

const pushButton_fuel = document.querySelector(".Button_fuel");

function clearAndshow_fuel (){
    document.getElementById("Buttons").style.display ="none";
    var temp_fuel = document.getElementsByClassName("template_fuel")[0];
    var clon_fuel = temp_fuel.content.cloneNode(true);
    document.body.appendChild(clon_fuel);    
}
pushButton_fuel.addEventListener('click', clearAndshow_fuel);


const pushButton_music = document.querySelector(".Button_music"); //KEIN getById /byClassName... -> findet es nicht

function clearAndshow_music (){
    document.getElementById("Buttons").style.display ="none";
    var temp_music = document.getElementsByClassName("template_music")[0];
    var clon_music = temp_music.content.cloneNode(true);
    document.body.appendChild(clon_music);    
}
pushButton_music.addEventListener('click', clearAndshow_music);


const pushButton_speed = document.querySelector(".Button_speed"); 

function clearAndshow_speed (){
    document.getElementById("Buttons").style.display ="none";
    var temp_speed = document.getElementsByClassName("template_speed")[0];
    var clon_speed = temp_speed.content.cloneNode(true);
    document.body.appendChild(clon_speed);    
}
pushButton_speed.addEventListener('click', clearAndshow_speed);


const pushButton_navi = document.querySelector(".Button_navi"); 

function clearAndshow_navi (){
    document.getElementById("Buttons").style.display ="none";
    var temp_navi = document.getElementsByClassName("template_navi")[0];
    var clon_navi = temp_navi.content.cloneNode(true);
    document.body.appendChild(clon_navi);    
}
pushButton_navi.addEventListener('click', clearAndshow_navi);




/*zurückButton
const zurueckButton = document.querySelector(".Pfeilbutton");

function ButtonZurueck (){
    document.getElementById ("pfeil").style.display ="none";
    var home = document.getElementsByClassName("Buttonklasse")[0]; // was soll aufgerufen werden
    var clon_home = home.content.cloneNode(true);
    document.body.appendChild(clon_home);    
} 
zurueckButton.addEventListener('click', ButtonZurueck);//Aufruf ButtonZurueck klasse bei klick*/


//Uhrzeit und Datum
function DatumZeit() {
    var Tag, Monat, Jahr;
    var Stunden, Minuten;
    var StundenZahl, MinutenZahl;
    var Heute;
    

    Heute = new Date();
    Tag = Heute.getDate();
    Monat = Heute.getMonth()+1;
    Jahr = Heute.getFullYear();
    StundenZahl = Heute.getHours();
    MinutenZahl = Heute.getMinutes();
       
    if(Tag < 10) {
        Tag = '0'+ Tag;
    }
    if(Monat < 10) {
        Monat = '0'+ Monat;
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
