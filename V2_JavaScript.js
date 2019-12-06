function Uhrzeit(){
    var Stunden, Minuten, Sekunden;
    var StundenZahl, MinutenZahl, SekundenZahl;
    var Heute;
    
   
    Heute = new Date();
    StundenZahl = Heute.getHours();
    MinutenZahl = Heute.getMinutes();
    SekundenZahl = Heute.getSeconds();
   
    Stunden = StundenZahl+":";
    if (MinutenZahl < 10) {Minuten = "0" + MinutenZahl + ":";}
      else {Minuten = MinutenZahl + ":";}
    if (SekundenZahl < 10) {Sekunden = "0" + SekundenZahl + " ";}
      else {Sekunden = SekundenZahl + " ";}
    Zeit = Stunden + Minuten + Sekunden ;
    uhr.innerHTML = Zeit;
   
    window.setTimeout("Uhrzeit();", 1000);
  }
   
  window.onload = Uhrzeit;

function Datum() {
    var Tag, Monat, Jahr;

    heute = new Date();
    Tag = heute.getDay()+1;
    Monat = heute.getMonth()+1;
    Jahr = heute.getFullYear();

    if(Tag < 10) {
    Tag = '0'+ Tag;
    }
    if(Monat < 10) {
     Monat = '0'+ Monat;
    }
    heute = Tag + '.' + Monat + '.' + Jahr;
    datum.innerHTML = heute;
}
    window.onload = Datum;   