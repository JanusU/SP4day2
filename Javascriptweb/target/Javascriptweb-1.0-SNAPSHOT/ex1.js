var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "blue";
}
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", clickHandler);

function clickHandler(evt) {
    var divs = document.getElementsByTagName("div");
    divs[0].style.backgroundColor = "red";
    divs[1].style.backgroundColor = "black";
    divs[2].style.backgroundColor = "yellow";
}
