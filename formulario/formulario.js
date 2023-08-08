// creacion de const, vari, arrays, etc

const formulario = document.querySelector('form')

const nombreApellido = document.getElementById('nombreApellido')
const emailUsuario = document.getElementById('emailUsuario')
const clave = document.getElementById('clave')
const avisos = document.getElementById('avisos')
const botonCheck = document.getElementById('botonCheck')

const opcionesAviso = {
    inputNombre : 'El nombre y/o apellido utilizado no posee un formato valido',
    inputEmail : 'El mail utilizado no posee un formato valido',
    inputClave : 'La clave utilizada no posee un formato valido',
}

// creacion de funciones 
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    if (formulario.checkValidity()) { // El formulario está listo para procesar
       const contenido_frm = `Datos de formulario listos para procesar:<br>${nombreApellido.value}<br>${emailUsuario.value}<br>${clave.value}<br>`;
       avisos.innerHTML = contenido_frm;
       avisos.style.display = 'block';
    } else {
        avisos.innerHTML = 'Hay un error en los datos ingresados, chequealo por favor';
        avisos.style.display = 'block';
       nombreApellido.focus();
    }
 });

 clave.addEventListener('invalid', function (event) {
    event.preventDefault();
    
    avisos.innerText = 'Clave no válida (min 8, max 12 caracteres)';
    avisos.style.display = 'block';
 });

//declaracion de eventos


//flujo principal
