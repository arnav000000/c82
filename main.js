canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_postion_of_x,last_postion_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("muosedown",my_muosedown);
function my_muosedown(e)
{
    mouseEvent="mouseDown";

}
canvas.addEventListener("muoseup",my_muoseup);
function my_muoseup(e)
{
    mouseEvent="mouseUp";


}
canvas.addEventListener("muoseleave",my_muoseleave);
function my_muoseleave(e)
{
    mouseEvent="mouseLeave";

}
canvas.addEventListener("muosemove",my_muosemove);
function my_muosemove(e)
{
    current_postion_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postion_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last postion of x and y coordinates= ");
        console.log("x= "+last_postion_of_x+" y= "+last_postion_of_y);
        ctx.moveTo(last_postion_of_x,last_postion_of_y);
        console.log("current potion of x and y coordinates= ");
        console.log("x= "+current_postion_of_mouse_x+" y= "+current_postion_of_mouse_y);
        ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
        ctx.stroke();

    }
    last_postion_of_x=current_postion_of_mouse_x;
    last_postion_of_y=current_postion_of_mouse_y;
    
}