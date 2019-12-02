
const pushButton1 = document.querySelector(".pushButton1");

function Button1() {
    console.log("Huhu");
    var Bild = document.getElementsByClassName("Bild")[0];
    Bild.remove(Bild);
    
    var div1 = document.createElement("div");
    div1.className ="Div1";
    div1.innerHTML = "Hello";
    div1.style.width = "100px";
    div1.style.background = "red";
    document.getElementsByTagName("main")[0].appendChild(div1);

    var div2 = document.createElement("div");
    div2.className ="Div2";
    div2.innerHTML = "Hello";
    div2.style.width = "100px";
    div2.style.background = "green";
    document.getElementsByTagName("main")[0].appendChild(div2);

    var div4 = document.createElement("div");
    div4.className ="Div4";
    div4.innerHTML = "Hello";
    div4.style.width = "100px";
    div4.style.background = "yellow";
    document.getElementsByTagName("main")[0].appendChild(div4);

    var div5 = document.createElement("div");
    div5.className ="Div5";
    div5.innerHTML = "Hello";
    div5.style.width = "100px";
    div5.style.background = "orange";
    document.getElementsByTagName("main")[0].appendChild(div5);

    var div6 = document.createElement("div");
    div6.className ="Div6";
    div6.innerHTML = "Hello";
    div6.style.width = "100px";
    div6.style.background = "grey";
    document.getElementsByTagName("main")[0].appendChild(div6);

    var div7 = document.createElement("div");
    div7.className ="Div7";
    div7.innerHTML = "Hello";
    div7.style.width = "100px";
    div7.style.background = "black";
    document.getElementsByTagName("main")[0].appendChild(div7);
  
}
pushButton1.addEventListener('click', Button1);