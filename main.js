var last_x,last_y;
mouseEvent="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="blue";
width=5;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e) {
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mouseMove);
function mouseMove(e) {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();        
    }
    last_x=current_x;
    last_y=current_y;
}
function mouseUp(e) {
    mouseEvent="mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup",mouseUp);
function mouseLeave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseleave",mouseLeave);