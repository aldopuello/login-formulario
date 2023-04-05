var tabla= [
    {
        id:'1',
        nombre:'aaa',
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
        listado+=`<tr><th scope="row">'${(i+1)}</th><td>${tabla[i].nombre}</td><td>${tabla[i].apellidos}</td><td>${tabla[i].correo}</td><td>${tabla[i].contraseña}</td><td>${tabla[i].cedula}</td><td>${tabla[i].telefono}</td><td>${tabla[i].ciudad}</td><td>${tabla[i].nacimiento}</td></tr>`
    }
    contenidoTabla.innerHTML=listado
}

function guardarData() {
    let nombre=document.getElementById('nombre').value;
    let apellidos=document.getElementById('apellidos').value;
    let correo=document.getElementById('correo').value;
    let contraseña=document.getElementById('contraseña').value;
    let cedula=document.getElementById('cedula').value;
    let telefono=document.getElementById('telefono').value;
    let ciudad=document.getElementById('ciudad').value;
    let nacimiento=document.getElementById('nacimiento').value;

    if(!nombre) {
        alert('Ingrese el nombre')
        return
    }
    if (!apellidos) {
        alert('Ingrese el apellido')
        return
    }
    if (!correo) {
        alert('Ingrese la correo')
        return
    }
    if(!contraseña) {
        alert('Ingrese el contraseña')
        return
    }
    if (!cedula) {
        alert('Ingrese el cedula')
        return
    }
    if (!telefono) {
        alert('Ingrese su telefono')
        return
    }
    if (!ciudad) {
        alert('Ingrese su ciudad')
        return
    }
    if (!nacimiento) {
        alert('Ingrese su fecha de nacimiento')
        return
    }
  //  contenidoTabla.innerHTML+=`<tr><th scope="row">'${(i+1)}</th><td>${nombre}</td><td>${apellidos}</td><td>${correo}</td><td>${contraseña}</td><td>${cedula}</td><td>${telefono}</td><td>${ciudad}</td><td>${nacimiento}</td></tr>`
    
    let nuevo={nombre:nombre,apellidos:apellidos,correo:correo,contraseña:contraseña,cedula:cedula,telefono:telefono,ciudad:ciudad,nacimiento:nacimiento}
     tabla.push(nuevo)
     alert('registrado')
     Listar()
     event.preventDefault()
    // '<tr><th scope="row">'+(i+1)+'</th><td>'+nombre+'</td><td>'+usuario+'</td><td>'+apellidos+'</td><td>'+correo+'</td><td>'+contraseña+'</td><td>'+cedula+'</td><td>'+telefono+'</td><td>'+ciudad+'</td><td>'+fechaNacimiento+'</td></tr>'

}
