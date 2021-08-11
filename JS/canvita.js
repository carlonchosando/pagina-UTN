var mi_canvas = document.getElementById("canva");
var contexto = mi_canvas.getContext("2d");
var svgPan = new Image();
var xposicion = -20;
var yposicion = 0;
var velocidad = 03;


function animacion_con_canvas(){ 
  svgPan.src ="./imagenes/pancito.svg";  
  svgPan.addEventListener('load', animar_imagen, false);
  function animar_imagen() {
  var animacion = requestAnimationFrame(animar_imagen);
  contexto.fillStyle = "#ffffff";
  contexto.fillRect(0, 0, 450, 100); 
  contexto.drawImage(svgPan, xposicion, yposicion );   
  if(xposicion > 400)
  xposicion = -50;
  yposicion = 0;
      
    xposicion = xposicion + velocidad;    
 }
}
animacion_con_canvas();