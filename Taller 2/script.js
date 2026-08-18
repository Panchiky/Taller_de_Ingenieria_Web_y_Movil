// =====================================================
// Configuración del formulario y uso del evento "submit"
// =====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value; // se agrego la configuracion de edad al formulario
  if (edad <= 0) {
    document.getElementById("resultado-formulario").textContent = "La edad debe ser mayor que 0";
  } // Validar que la edad se mayor que 0
  const email = document.getElementById("email").value;
  const carrera = document.getElementById("carrera").value;

  document.getElementById("resultado-formulario").textContent =
    "Nombre: " + nombre + " | Edad: " + edad + " | Correo: " + email + " | Carrera: " + carrera;
}); // se agrego la edad al resultado

// =====================================================
// 2. Utilizar LocalStorage para almacenar información
// =====================================================
function guardarLocal() {
  const nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    document.getElementById("resultado-local").textContent = "Primero escribe un nombre.";
    return;
  }

  localStorage.setItem("nombreUsuario", nombre);
  document.getElementById("resultado-local").textContent = "Nombre guardado correctamente.";
}

function leerLocal() {
  const nombre = localStorage.getItem("nombreUsuario");

  if (nombre === null) {
    document.getElementById("resultado-local").textContent = "No hay ningún nombre guardado.";
  } else {
    document.getElementById("resultado-local").textContent = "Nombre guardado: " + nombre;
  }
}

function borrarLocal() {
  localStorage.removeItem("nombreUsuario");
  document.getElementById("resultado-local").textContent = "Nombre eliminado.";
}

// =====================================================
// 3. Utilizar sessionStorage para almacenar información
// =====================================================
function guardarSesion() {
  const carrera = document.getElementById("carrera").value;
  sessionStorage.setItem("carreraSeleccionada", carrera);
  document.getElementById("resultado-sesion").textContent = "Carrera guardada en la sesión.";
}

function leerSesion() {
  const carrera = sessionStorage.getItem("carreraSeleccionada");

  if (carrera === null) {
    document.getElementById("resultado-sesion").textContent = "No hay ninguna carrera guardada.";
  } else {
    document.getElementById("resultado-sesion").textContent = "Carrera guardada: " + carrera;
  }
}

function borrarSesion() {
  sessionStorage.removeItem("carreraSeleccionada");
  document.getElementById("resultado-sesion").textContent = "Carrera eliminada de la sesión.";
}

// =====================================================
// 4. Formulario + JSON
// =====================================================
function guardarFormulario() {
  const datos = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    carrera: document.getElementById("carrera").value
  };

  localStorage.setItem("datosFormulario", JSON.stringify(datos));
  document.getElementById("resultado-guardado").textContent = "Formulario guardado como objeto JSON.";
}

function recuperarFormulario() {
  const datosGuardados = localStorage.getItem("datosFormulario");

  if (datosGuardados === null) {
    document.getElementById("resultado-guardado").textContent = "No existen datos guardados.";
    return;
  }

  const datos = JSON.parse(datosGuardados);

  document.getElementById("nombre").value = datos.nombre;
  document.getElementById("email").value = datos.email;
  document.getElementById("carrera").value = datos.carrera;

  document.getElementById("resultado-guardado").textContent = "Datos recuperados y cargados en el formulario.";
}

function limpiarFormularioGuardado() {
  localStorage.removeItem("datosFormulario");
  document.getElementById("resultado-guardado").textContent = "Datos guardados eliminados.";
}
