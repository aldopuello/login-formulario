// const nombre =document.getElementById("nombre");
// const email =document.getElementById("correo");
// const password =document.getElementById("contraseña");
// const apellidos =document.getElementById("apellidos");
// const cedula =document.getElementById("cedula");
// const telefono =document.getElementById("telefono");
// const ciudad =document.getElementById("ciudad");
// const fecha_nacimiento =document.getElementById("fechaNacimiento");
// // const terminos_condiciones =document.getElementById("terminosYcondiciones");
// const listInputs = document.querySelectorAll(".input-box");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();  
//     let condicion = ValidarData();
//     if (condicion) {
//     EnviarFormulario();
//   }
//   });

//  function ValidarData() {
//     form.lastElementChild.innerHTML = "";
//     let condicion = true;
//     listInputs.forEach((element) => {
//       element.lastElementChild.innerHTML = "";
//     });

//     if (nombre.value.length < 1 || nombre.value.trim() == "") {
//         MensajeError("nombre", "Nombre no valido*");
//         condicion = false;
//       }

//       if (nombre.value.length < 1 || nombre.value.trim() == "") {
//         MensajeError("correo", "Nombre no valido*");
//         condicion = false;
//       }

//       if (nombre.value.length < 1 || nombre.value.trim() == "") {
//         MensajeError("contraseña", "Nombre no valido*");
//         condicion = false;
//       }

//       if (nombre.value.length < 1 || nombre.value.trim() == "") {
//         MensajeError("apellidos", "Nombre no valido*");
//         condicion = false;
//       }

//       if (cedula.value.length != 9 || cedula.value.trim() == "" ||isNaN(cedula.value)) {
//         MensajeError("cedula", "Nombre no valido*");
//         condicion = false;
//       }

//       if (telefono.value.length != 9 || telefono.value.trim() == "" ||isNaN(telefono.value)) {
//         MensajeError("telefono", "Nombre no valido*");
//         condicion = false;
//       }

//       if (nombre.value.length < 1 || nombre.value.trim() == "") {
//         MensajeError("fechaNacimiento", "Nombre no valido*");
//         condicion = false;
//       }

//     //   if (!terminos_condiciones.checked) {
//     //     MensajeError("terminosYcondiciones", "Nombre no valido*");
//     //   }else {
//     //     MensajeError("terminosYcondiciones", "");
//     //   condicion = true;
//     // }
// }
// function MensajeError(claseInput, mensaje) {
//     let elemento = document.querySelector(``);
//     elemento.lastElementChild.innerHTML = mensaje;
// }

// function EnviarFormulario() {
//     form.reset();
//     form.lastElementChild.innerHTML = "Listo !!";
// }