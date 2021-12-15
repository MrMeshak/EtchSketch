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
const redBtn:HTMLElement = document.getElementById("RedBtn");
const orangeBtn:HTMLElement = document.getElementById("OrangeBtn");
const yellowBtn:HTMLElement = document.getElementById("YellowBtn");
const greenBtn:HTMLElement = document.getElementById("GreenBtn");
const blueBtn:HTMLElement = document.getElementById("BlueBtn");
const indigoBtn:HTMLElement = document.getElementById("IndigoBtn");
const violetBtn:HTMLElement = document.getElementById("VioletBtn");
const whiteBtn:HTMLElement = document.getElementById("WhiteBtn");
const blackBtn:HTMLElement = document.getElementById("BlackBtn");



sketchBoard.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup",() => mouseDown = false);

for(let i=0; i<numPixels; i++){
    let pixel:HTMLElement = document.createElement("div");
    pixel.classList.add("Pixel");
    pixel.addEventListener("mousemove", drawAction);
    sketchBoard.appendChild(pixel);
}

clearBtn.addEventListener("click", clearBoard);
eraserBtn.addEventListener("click",() => drawTool = ERASER);
pencilBtn.addEventListener("click", () => drawTool = PENCIL);
redBtn.addEventListener("click",() => color = "red");
orangeBtn.addEventListener("click",() => color = "orange");
yellowBtn.addEventListener("click",() => color = "yellow");
greenBtn.addEventListener("click",() => color = "green");
blueBtn.addEventListener("click",() => color = "blue");
indigoBtn.addEventListener("click",() => color = "indigo");
violetBtn.addEventListener("click",() => color = "violet");
whiteBtn.addEventListener("click", () => color = "white" );
blackBtn.addEventListener("click", () => color = "black" );


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




    
