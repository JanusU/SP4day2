//var divs = document.getElementsByClassName("mydiv");
var outer = document.getElementById("outDiv");  

//divs[0].addEventListener("click",clickHandler);
//divs[1].addEventListener("click",clickHandler);
outer.addEventListener("click",clickHandler);

function clickHandler(evt){
    var realDiv = evt.target;
    document.getElementById("h3").innerText = "Hej jeg er " + realDiv.id;
}