const logreBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
// const resgisterLink = document.querySelector('.register-link');

resgisterLink.addEventListener('click',() =>{
    logreBox.classList.add('active');
});

loginLink.addEventListener('click',() =>{
    logreBox.classList.remove('active');
});

// var boton= document.getElementById('guardar');
// var data= [];
// var cant= 0;

// boton.addEventListener("click",guardarData);
// function guardarData() {
//     var nombre=document.getElementById('nombre').value;
//     var usuario=document.getElementById('usuario').value;
//     var apellidos=document.getElementById('apellidos').value;
//     var correo=document.getElementById('correo').value;
//     var cedula=document.getElementById('cedula').value;
//     var telefono=document.getElementById('telefono').value;
//     var ciudad=document.getElementById('ciudad').value;
//     var fecha_nacimiento=document.getElementById('fecha de Nacimiento').value;

//     data.push(
//         {
//             "id":cant,
//             "nombre":nombre,
//             "usuario":usuario,
//             "apellidos":apellidos,
//             "correo":correo,
//             "cedula":cedula,
//             "telefono":telefono,
//             "ciudad":ciudad,
//             "fecha de Nacimiento":fecha_nacimiento
//         }
//     );
//     var id_row ='row'+cant;
//     var fila= '<tr id='+id_row+'><td>'+nombre+'</td><td>'+usuario+'</td><td>'+apellidos+'</td><td>'+correo+'</td><td>'+cedula+'</td><td>'+telefono+'</td><td>'+ciudad+'</td><td>'+fecha_nacimiento+'</td><td><a href="#" class="btn btn-danger" onclik="guardar('+cant+')";</td>';
//     $("#lista").append(fila);
//     $("#nombre").val('');
//     $("#usuario").val('');
//     $("#apellidos").val('');
//     $("#correo").val('');
//     $("#cedula").val('');
//     $("#telefono").val('');
//     $("#fecha de Nacimiento").val('');
//     cant++;
// }
