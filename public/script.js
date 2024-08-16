import { iniciarSesion, registrarUsuario } from "../controller/ControllerUsuario.js";

document.querySelector('#btnRegistro').addEventListener('click', registrarUsuario)
document.querySelector('#btnIniciar').addEventListener('click', iniciarSesion)

let inputs = document.querySelectorAll("input");
let user = /^[A-Z]{4,10}$/;
let password = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).{5,10}$/;
let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validarCampos = (e) => {
  switch (e.target.name) {
    case "usuario":
      if (user.test(e.target.value)) {
        console.log("Pasó la validación del usuario");
        document.getElementById("usuario").style.borderColor = "green";
        document.getElementById("usuario").nextSibling.textContent = "";
      } else {
        document.getElementById("usuario").style.borderColor = "red";
        document.getElementById("usuario").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
    case "contrasena":
      if (password.test(e.target.value)) {
        document.getElementById("contrasena").style.borderColor = "green";
        document.getElementById("contrasena").nextSibling.textContent = "";
      } else {
        document.getElementById("contrasena").style.borderColor = "red";
        document.getElementById("contrasena").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
    case "registro-usuario":
      if (user.test(e.target.value)) {
        document.getElementById("registro-usuario").style.borderColor = "green";
        document.getElementById("registro-usuario").nextSibling.textContent =
          "";
      } else {
        document.getElementById("registro-usuario").style.borderColor = "red";
        document.getElementById("registro-usuario").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
    case "registro-contrasena":
      if (password.test(e.target.value)) {
        document.getElementById("registro-contrasena").style.borderColor =
          "green";
        document.getElementById("registro-contrasena").nextSibling.textContent =
          "";
      } else {
        document.getElementById("registro-contrasena").style.borderColor =
          "red";
        document.getElementById("registro-contrasena").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
    case "registro-correo":
      if (correo.test(e.target.value)) {
        document.getElementById("registro-correo").style.borderColor = "green";
        document.getElementById("registro-correo").nextSibling.textContent = "";
      } else {
        document.getElementById("registro-correo").style.borderColor = "red";
        document.getElementById("registro-correo").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarCampos);
});
console.log(inputs);

document
  .getElementById("boton-registro")
  .addEventListener("click", mostrarRegistro);
document.getElementById("boton-login").addEventListener("click", mostrarLogin);

function mostrarLogin() {
  console.log("Formulario Login");
  document.getElementById("form-title").textContent = "Iniciar Sesión";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}
function mostrarRegistro() {
  console.log("Formulario Registro");
  document.getElementById("form-title").textContent = "Registrar Usuario";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}
