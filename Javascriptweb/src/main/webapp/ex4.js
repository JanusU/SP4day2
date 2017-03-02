var names = ["Yousef", "NotYousef", "DefinatelyNotYousef", "MostCertainlyNotYousef"];
var addBtn = document.getElementById("addBtn");

function listMaker(arr) {
    var lis = arr.map(function (name) {
        return "<li>" + name + "</li>";
    });
    return "<ul>" + lis.join("") + "</ul>";
}

document.getElementById("x").innerHTML = listMaker(names);

addBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    var nn = document.getElementById("nn").value;
    names.push(nn);
    document.getElementById("x").innerHTML = listMaker(names);
});