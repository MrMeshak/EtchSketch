var numPixels = 400;
var PENCIL = 0;
var ERASER = 1;
var color = "black";
var drawTool = 0;
var mouseDown = false;
var body = document.getElementsByTagName("body")[0];
var sketchBoard = document.getElementById("SketchBoard");
var clearBtn = document.getElementById("ClearBtn");
var eraserBtn = document.getElementById("EraserBtn");
var pencilBtn = document.getElementById("PencilBtn");
var redBtn = document.getElementById("RedBtn");
var orangeBtn = document.getElementById("OrangeBtn");
var yellowBtn = document.getElementById("YellowBtn");
var greenBtn = document.getElementById("GreenBtn");
var blueBtn = document.getElementById("BlueBtn");
var indigoBtn = document.getElementById("IndigoBtn");
var violetBtn = document.getElementById("VioletBtn");
var whiteBtn = document.getElementById("WhiteBtn");
var blackBtn = document.getElementById("BlackBtn");
sketchBoard.addEventListener("mousedown", function () { return mouseDown = true; });
body.addEventListener("mouseup", function () { return mouseDown = false; });
for (var i = 0; i < numPixels; i++) {
    var pixel = document.createElement("div");
    pixel.classList.add("Pixel");
    pixel.addEventListener("mousemove", drawAction);
    sketchBoard.appendChild(pixel);
}
clearBtn.addEventListener("click", clearBoard);
eraserBtn.addEventListener("click", function () { return drawTool = ERASER; });
pencilBtn.addEventListener("click", function () { return drawTool = PENCIL; });
redBtn.addEventListener("click", function () { return color = "red"; });
orangeBtn.addEventListener("click", function () { return color = "orange"; });
yellowBtn.addEventListener("click", function () { return color = "yellow"; });
greenBtn.addEventListener("click", function () { return color = "green"; });
blueBtn.addEventListener("click", function () { return color = "blue"; });
indigoBtn.addEventListener("click", function () { return color = "indigo"; });
violetBtn.addEventListener("click", function () { return color = "violet"; });
whiteBtn.addEventListener("click", function () { return color = "white"; });
blackBtn.addEventListener("click", function () { return color = "black"; });
function drawAction(e) {
    if (mouseDown) {
        if (drawTool == PENCIL) {
            e.target.style.backgroundColor = color;
            return;
        }
        if (drawTool == ERASER) {
            e.target.style.backgroundColor = "white";
        }
    }
}
function clearBoard() {
    var Pixels = document.getElementsByClassName("Pixel");
    for (var i = 0; i < Pixels.length; i++) {
        Pixels[i].style.backgroundColor = "white";
    }
}
