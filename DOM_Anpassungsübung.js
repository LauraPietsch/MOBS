//Änderung Main
document.getElementsByClassName("item")[0].innerHTML = "Hakuna Matata...";
document.getElementsByClassName("item")[0].style.backgroundColor = "orange";
document.getElementsByClassName("item")[0].style.borderColor = "#4a9b34a2";
document.getElementsByClassName("item")[1].innerHTML = "...diesen Spruch sag ich gern!";
document.getElementsByClassName("item")[1].style.backgroundColor = "green";
document.getElementsByClassName("item")[2].innerHTML = "Hakuna Matata gilt stets als modern :)";
document.getElementsByClassName("item")[2].style.backgroundColor = "green";
document.getElementsByTagName("main")[0].style.backgroundColor = "grey";


/* Style für mehrere Elemente
var x = document.getElementsByTagName("P");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}
*/ 

//Änderung drumherum
document.getElementsByTagName("header")[0].innerHTML = "Kopf";
document.getElementsByTagName("nav")[0].innerHTML = "Navigation: <ul><li>eins</li><li>zwei</li></ul>";
const eins = "eins"
document.getElementsByTagName("aside")[0].innerHTML = "Seite";
document.getElementsByTagName("footer")[0].innerHTML = "Fuß";
document.getElementsByTagName("body")[0].fontFamily = "Arial";

//Hinzufügen Liste
var Navigationsliste = document.createElement("ul");
document.nav.appendChild(Navigationsliste);

//Löschen aus Main


//Klick auf li
const guessSubmit = document.querySelector('.guessSubmit');
guessSubmit.addEventListener('click', checkGuess);