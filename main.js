var rects = document.querySelector("#container");
var rect = document.querySelector(".rectangles");
var startValue = 0;
var windowWidth = window.innerWidth;
var rectWidth = rect.clientWidth;
var stopValue = (windowWidth - rectWidth); 
var increaser = 1;
function animator() {
    setInterval(function(){
    if (startValue === stopValue) {
        stopValue = 0;
        increaser = -1;
    } else {
        startValue += increaser;
        rects.style.marginLeft = startValue + 'px';
    }}, 16);
}

animator();

function reload() {
    window.location.reload(false); 
}

function toggleBars() {
    var bars = document.querySelector("#main");
    bars.classList.toggle("bars");
}