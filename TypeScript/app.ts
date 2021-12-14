const numPixels:number = 400;
const PENCIL:number = 0;
const ERASER:number = 1;
let color:string = "black";
let drawTool:number = 0;

let mouseDown:boolean = false;

const body:HTMLElement = document.getElementsByTagName("body")[0];
const sketchBoard:HTMLElement = document.getElementById("SketchBoard");
const clearBtn:HTMLElement = document.getElementById("ClearBtn");
const eraserBtn:HTMLElement = document.getElementById("EraserBtn");
const pencilBtn:HTMLElement = document.getElementById("PencilBtn");



sketchBoard.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup",() => mouseDown = false);
clearBtn.addEventListener("click", clearBoard);
eraserBtn.addEventListener("click",() => drawTool = ERASER);
pencilBtn.addEventListener("click", () => drawTool = PENCIL);

for(let i=0; i<numPixels; i++){
    let pixel:HTMLElement = document.createElement("div");
    pixel.classList.add("Pixel");
    pixel.addEventListener("mousemove", drawAction);
    sketchBoard.appendChild(pixel);
}

function drawAction(e:Event){
    if(mouseDown){
        if(drawTool == PENCIL){
            (e.target as HTMLElement).style.backgroundColor = color;
            return;
        }
        if(drawTool == ERASER){
            (e.target as HTMLElement).style.backgroundColor = "white";
        }
    }
}


function clearBoard(){
    let Pixels:HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("Pixel") as HTMLCollectionOf<HTMLElement>;
    for(let i=0; i<Pixels.length;i++){
        Pixels[i].style.backgroundColor = "white";
    }

}




    
