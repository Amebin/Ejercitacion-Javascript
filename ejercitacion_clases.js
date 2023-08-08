/*let frutas = ["banana","manzana","pera","tomate","uva"]
let verduras = ["lechuga","rúcula","zanahoria","cebolla","papa"]


console.log(frutas)
console.log(verduras)


frutas.forEach(i => console.log(i))
verduras.forEach(i => console.log(i))

frutas.push("ciruela")
console.log(frutas)

verduras.splice(1,1)
console.log(verduras)

console.log(frutas[2])

verduras.splice(1,1)
console.log(verduras)


let alimentos = frutas.concat(verduras)
console.log(alimentos)
*/

/*
1) Generar un array con listado de alimentos (puede aprovecharse el array concatenado de la parte I).

2) Generar otro array vacío para guardar los items del pedido.

3) Simular un pedido. La cantidad de items a cargar en el pedido se debe elegir al azar entre 1 y 10. Se puede utilizar esta fórmula: Math.floor(Math.random() * 10) + 1;

4) Generar un ciclo hasta esa cantidad, y en cada iteración del ciclo, elegir también al azar un item
   del array de alimentos (el subíndice al azar puede obtenerse con Math.floor(Math.random() * nombre_array.length))
   y una cantidad entre 1 y 10.

   Ir agregando al array del pedido cada nuevo item (push), que estará compuesto en este caso por un objeto:
   { producto: "pera", cantidad: 12 }
   el nombre del producto debe obtener del array de alimentos usando el subíndice al azar del paso previo, y la
   cantidad es directamente la ya generada al azar.

5) Mostrar finalmente por consola la cantidad de items en el pedido y el listado de items, uno por uno.

6) Qué problema podemos observar al probar varios pedidos?.

----------------------------------------------------------------
// FORMULARIOS javascript

//constantes, variables, arrays 

const formulario = document.querySelector('form')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña')
const mensaje = document.getElementById('mensaje')
const formacion = document.getElementById('formacion')
const postgrado = document.getElementById('postgrado')

const opcionesFormacion = ['Primario', 'Secundario', 'universitario']

// declaracion de funciones

function cargar_Formacion(){
   for (let i = 0; i < opcionesFormacion.length; i++){
      const opcion = document.createElement('option');
      opcion.text = opcionesFormacion[i];
      opcion.value = opcionesFormacion[i].toLowerCase();
      formacion.add(opcion);
   }
};

//declaracion de eventos 
formulario.addEventListener('submit', function(event){
   event.preventDefault();
   
   if (formulario.checkValidity()) { // El formulario está listo para procesar
      const contenido_frm = `Datos de formulario listos para procesar:<br>${formacion.value}<br>${nombre.value}<br>${apellido.value}<br>${usuario.value}<br>${clave.value}<br>${postgrado.checked}`;
      mensaje2.innerHTML = contenido_frm;
      mensaje2.style.display = 'block';
   } else {
      console.log('Formulario ERROR');
      formacion.focus();
   }
});

contraseña.addEventListener('invalid', function (event) {
   event.preventDefault();
   
   mensaje.innerText = 'Clave no válida (min 8, max 12 caracteres)';
   mensaje.style.display = 'block';
});

postgrado.addEventListener('click', function (event) {
   if (postgrado.checked && (formacion.value === 'primario' || formacion.value === 'secundario')) {
      mensaje.innerText = 'Se requiere como mínimo Universitario para aplicar a postgrado';
      mensaje.style.display = 'block';
   } else if (!postgrado.checked) {
      mensaje.style.display = 'none';
   }
})


//flujo principal 
cargar_Formacion();

*/


/*
Reproducir lógica del tradicional juego piedra / papel / tijera, utilizando un array para las opciones
y un par de funciones para solicitar juego del participante y elegir jugada del bot (computadora).

Recordar:
    1) igual elección: empate
    2) TIJERA corta PAPEL
    3) PIEDRA rompe TIJERA
    4) PAPEL envuelve PIEDRA
*/

const personaObj = {
   nombre : "Franco",
   edad : 27,
   dni : 22266688,
   domicilio : "avenida siempre viva xxx",
   hijos : 0,
   profesion : "none",
}

let personaArray = [
   {
      nombre : "Franco",
      edad : 27,
      dni : 22266688,
      domicilio : "avenida siempre viva xxx",
      hijos : 0,
      profesion : "none",
   }
]

console.log(`${personaArray.nombre} y un ${personaObj.nombre}`)