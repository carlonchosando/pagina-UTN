recetaCompleta = [];

function completaLaReceta() {
    recetaCompleta = [];
    for (var i = 1; i <= 5; i++) {
      ingrediente = prompt("Ingresa tu ingrediente Nº " + i + ":");
      recetaCompleta.push( ingrediente ); 
    }  
    document.getElementById("muestra_ingrediente").innerHTML = recetaCompleta.sort();  
}

