var tabla= [
    {
        id:'1',
        nombre:'aaa',
        usuario:'usuarioo',
        apellidos:'apellidoos',
        correo:'correoo',
        contraseña:'12345',
        cedula:'3232223',
        telefono:'12222',
        ciudad:'ciudadaa',
        nacimiento:'fecha_nacimiento'
    },
    {
        id:'1',
        nombre:'bbbb',
        usuario:'ccccccc',
        apellidos:'apellidoos',
        correo:'correoo',
        contraseña:'12345',
        cedula:'3232223',
        telefono:'12222',
        ciudad:'ciudadaa',
        nacimiento:'fecha_nacimiento'
    },
    {
        id:'1',
        nombre:'bbb',
        usuario:'bbbbbbb',
        apellidos:'apellidoos',
        correo:'correoo',
        contraseña:'12345',
        cedula:'3232223',
        telefono:'12222',
        ciudad:'ciudadaa',
        nacimiento:'fecha_nacimiento'
    }
];

let contenidoTabla=document.getElementById('tabla-usuario')
function Listar() {
    let listado="";
    for (let i = 0; i < tabla.length; i++) {
        listado+=`<tr><th scope="row">'${(i+1)}</th><td>${tabla[i].nombre}</td><td>${tabla[i].usuario}</td><td>${tabla[i].apellidos}</td><td>${tabla[i].correo}</td><td>${tabla[i].contraseña}</td><td>${tabla[i].cedula}</td><td>${tabla[i].telefono}</td><td>${tabla[i].ciudad}</td><td>${tabla[i].nacimiento}</td></tr>`
    }
    contenidoTabla.innerHTML=listado
}

function guardarData() {
    let usuario=document.getElementById('usuario').value;
    let nombre=document.getElementById('nombre').value;
    let apellidos=document.getElementById('apellidos').value;
    let correo=document.getElementById('correo').value;
    let contraseña=document.getElementById('contraseña').value;
    let cedula=document.getElementById('cedula').value;
    let telefono=document.getElementById('telefono').value;
    let ciudad=document.getElementById('ciudad').value;
    let nacimiento=document.getElementById('nacimiento').value;
    if (!usuario) {
        alert('Ingrese la identificacion')
        return
    }
    if(!nombre) {
        alert('Ingrese el nombre')
        return
    }
    if (!apellidos) {
        alert('Ingrese el apellido')
        return
    }
    if (!correo) {
        alert('Ingrese la dirección')
        return
    }
    if(!contraseña) {
        alert('Ingrese el correo')
        return
    }
    if (!cedula) {
        alert('Ingrese el telefono')
        return
    }
    if (!telefono) {
        alert('Ingrese su pais')
        return
    }
    if (!ciudad) {
        alert('Ingrese su fecha de nacimiento')
        return
    }
    if (!nacimiento) {
        alert('Ingrese su fecha de nacimiento')
        return
    }
    contenidoTabla.innerHTML+=`<tr><th scope="row">'${(i+1)}</th><td>${nombre}</td><td>${usuario}</td><td>${apellidos}</td><td>${correo}</td><td>${contraseña}</td><td>${cedula}</td><td>${telefono}</td><td>${ciudad}</td><td>${nacimiento}</td></tr>`
    
    let nuevo={nombre:nombre,usuario:usuario,apellidos:apellidos,correo:correo,contraseña:contraseña,cedula:cedula,telefono:telefono,ciudad:ciudad,nacimiento:nacimiento}
     tabla.push(nuevo)
     alert('registrado')

    // '<tr><th scope="row">'+(i+1)+'</th><td>'+nombre+'</td><td>'+usuario+'</td><td>'+apellidos+'</td><td>'+correo+'</td><td>'+contraseña+'</td><td>'+cedula+'</td><td>'+telefono+'</td><td>'+ciudad+'</td><td>'+fechaNacimiento+'</td></tr>'
}