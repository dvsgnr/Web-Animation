var rectangles = document.querySelector("#container");
var rectangle = document.querySelector(".rectangle");
var positionX = 0;
var windowWidth = window.innerWidth;
var rectWidth = rectangle.clientWidth;
var stopValue = (windowWidth - rectWidth); 
const steps = 1;
const timer = 16;
let intervID;
function animator() {
    intervID = setInterval(function(){
    if (positionX === stopValue) {
        stopValue = 0;
        steps = -1;
    } else {
        positionX += steps;
        rectangles.style.marginLeft = positionX + 'px';
    }}, timer);
}

animator();

function pauseAnimation() {
    clearInterval(intervID);
}

function reload() {
    window.location.reload(false); 
}

function toggleBars() {
    var bars = document.querySelector("#main");
    bars.classList.toggle("bars");
}