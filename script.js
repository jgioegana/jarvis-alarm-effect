var colQty = 10;
var imgsrc = "media/sampleimg.jpg";
var revealSpd = 0.2;
var opacitySpd = 0.5;
var coverColor = "black";
let col;
let cover = document.getElementById("cover");

window.onload = function() {
    setMedia();
}

for(let i = 0; i < colQty; i++){
    col = document.createElement('div');
    col.className = 'column';
    col.style.width = 100/colQty + "%";
    col.style.backgroundColor = coverColor;
    cover.appendChild(col);
}

function setMedia() {
    $("#media").css('background-image', 'url(' + imgsrc + ')');
    $("#media").css('background-repeat', 'no-repeat');
    $("#media").css('background-size', '100% 100%');
}

$(".column").click(function() {
    $(".column").off('click');
    TweenMax.staggerFromTo($(".column"), opacitySpd, {opacity: 1}, {opacity: 0}, revealSpd);
});