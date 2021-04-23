canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
MouseEvent="empty";
color="blue";
lineWidth=2;
var last_x, last_y;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){

    color=document.getElementById("color").value;
    lineWidth=document.getElementById("lineWidth").value;
    MouseEvent="mouseDown";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    MouseEvent="mouseUp";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    MouseEvent="mouseLeave";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(MouseEvent=="mouseDown"){
       
        color=document.getElementById("color").value;
        lineWidth=2;
        lineWidth=document.getElementById("lineWidth").value;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;

        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();

    
    }
    last_x=current_x;
    last_y=current_y;


}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    console.log("end");

}
