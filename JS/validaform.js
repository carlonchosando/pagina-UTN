const nombre = document.getElementById('nombre');
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

function validarIngreso() {
    nombre.addEventListener("input", validaNombre)
    apellido.addEventListener("input", validaApellido)
    email.addEventListener("input", validaEmail)
    mensaje.addEventListener("input", validaMensaje)

    validaNombre();
    validaApellido();
    validaEmail();
}

function validaNombre() {
    if (nombre.value.trim() == "") {
        nombre.setCustomValidity("ingresá tu nombre de pila ")
        nombre.style.backgroundColor = "#f2b183"
    } else {
        nombre.setCustomValidity("")
        nombre.style.backgroundColor = "#467cf2"

    }
}

function validaApellido() {
    if (apellido.value.trim() == "") {
        apellido.setCustomValidity("ingresa tu apellido familiar")
        apellido.style.backgroundColor = "#f2b183"
    } else {
        apellido.setCustomValidity("")
        apellido.style.backgroundColor = "#467cf2"

    }
}

function validaEmail() {
    if (email.value.trim() == "") {
        email.setCustomValidity("ingresa tu correo electónico más utilizado ")
        email.style.backgroundColor = "#f2b183"
    } else {
        email.setCustomValidity("")
        email.style.backgroundColor = "#467cf2"

    }

}
function validaMensaje() {
    if (mensaje.value.trim() == "") {
        mensaje.setCustomValidity("ingresa tu correo electónico más utilizado ")
        mensaje.style.backgroundColor = "#f2b183"
    } else {
        mensaje.setCustomValidity("")
        mensaje.style.backgroundColor = "#467cf2"
    }
}
window.addEventListener("load", validarIngreso);