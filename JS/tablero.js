function registrar() {
  var b = document.querySelector("#aceptar");
  aceptar.addEventListener("click", lista);
  mostrardatos();
}
function lista() {
  var recetaid = document.querySelector("#id").value;
  var ejecucionfecha = document.querySelector("#fecha").value;
  var texto = document.querySelector("#aporte").value;
  var conformidad = document.querySelector("#conformidad").value;

  var agregar = [recetaid, ejecucionfecha, texto, conformidad];
  localStorage.setItem(recetaid, agregar);
  location.reload();
  mostrardatos();
}
function mostrardatos() {
  var datos = document.querySelector("#Datos");
  for (var i = 0; i < localStorage.length; i++) {
    var recetaid = localStorage.key(i);
    var reseñas = localStorage.getItem(recetaid);

    datos.innerHTML += "<P> Reseña:" + reseñas + "</p>";
  }
}
function borrar() {
  localStorage.clear();
  location.reload();
  alert("Usted a eliminado una nota");
}
window.addEventListener("load", registrar);
