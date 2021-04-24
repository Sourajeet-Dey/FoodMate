// var counter=0;
var counter = JSON.parse(sessionStorage.getItem("items")).length;
$('.badge-count').text(counter);


function add_item(str) {
    // counter++;
    var items = JSON.parse(sessionStorage.getItem('items') || '[]');
    var item = str;
    items.push(item);
    sessionStorage.setItem('items', JSON.stringify(items));
    var counter = JSON.parse(sessionStorage.getItem("items")).length;
    $('.badge-count').text(counter);
    // const btn = document.querySelector('button');
    // btn.disabled = true;
};

function disable(){
    const btn = document.querySelector('button');
    btn.disabled = true;
}
