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
sketchBoard.addEventListener("mousedown", function () { return mouseDown = true; });
body.addEventListener("mouseup", function () { return mouseDown = false; });
clearBtn.addEventListener("click", clearBoard);
eraserBtn.addEventListener("click", function () { return drawTool = ERASER; });
pencilBtn.addEventListener("click", function () { return drawTool = PENCIL; });
for (var i = 0; i < numPixels; i++) {
    var pixel = document.createElement("div");
    pixel.classList.add("Pixel");
    pixel.addEventListener("mousemove", drawAction);
    sketchBoard.appendChild(pixel);
}
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
