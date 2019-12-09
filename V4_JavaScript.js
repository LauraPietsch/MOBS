document.getElementById("Buttons").onclick = function() {   //irgendwas miot addeventlistener geht auch!!
    document.getElementById("Buttons").style.display = "none";
}


// Button Funnktionen
const Button1 = document.querySelector(".Button1");
function push1() {
    console.log("Huhu");
   
}
Button1.addEventListener('click', push1);

const Button2 = document.querySelector(".Button2");
function push2() {
    console.log("Huhu");
    
}
Button2.addEventListener('click', push2);

const Button3 = document.querySelector(".Button3");
function push3() {
    console.log("Huhu");

}
Button3.addEventListener('click', push3);

const Button4 = document.querySelector(".Button4");
function push4() {
    console.log("Huhu");
}
Button4.addEventListener('click', push4);

const Button5 = document.querySelector(".Button5");
function push5() {
    console.log("Huhu");
}
Button5.addEventListener('click', push5);

const Button6 = document.querySelector(".Button6");
function push6() {
    console.log("Huhu");
}
Button6.addEventListener('click', push6);


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












