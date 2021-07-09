
    var last_position_of_x, last_position_of_y;

canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="black";

radius = 20;

width_of_the_line= 0;

var width = screen.width - 100;

var height = screen.height - 70;

if (width < 992){

    document.getElementById("myCanvas").width = width;
    document.getElementById("myCanvas").height = height;
    document.body.style.overflow = hidden;

}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){

  console.log("my_touchstart");

  color = document.getElementById("color").value;

  width_of_the_line = document.getElementById("WOTL").value;

  radius = document.getElementById("radius").value;
  

  last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
  last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){

    current_position_of_touch_x= e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y= e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_the_line;
    ctx.arc(current_position_of_touch_x, current_position_of_touch_y,radius,0,2*Math.PI);
    ctx.stroke();
    

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y)
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current Position of x and y coordinates = ");
    console.log("x = "+ current_position_of_touch_x + "y = " + current_position_of_touch_y); 
    
    ctx.stroke();



last_position_of_x= current_position_of_touch_x;
last_position_of_y = current_position_of_touch_y;

}

function clearArea(){

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}



    