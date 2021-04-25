var retrievedData = sessionStorage.getItem("items");
var items2 = JSON.parse(retrievedData);

var count = items2.length;

document.getElementById("item-selected").innerText =
    "Number of items selected : " + count;

var container = document.getElementById("item-list"); 

for (var item of items2) {
    var list = document.createElement("li");
    list.innerHTML = item;
    container.appendChild(list);
}
