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

Ejercicios para practicar la lógica de lo visto hasta ahora en el módulo 2
‌
1.
Solicita un nombre, la edad y nuestra por consola el mensaje "Hola ___, tienes ___ años y el año que viene tendrás ___ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.

let nombre = prompt(`indicanos tu nombre por favor `)
let edad = prompt(`indicanos tu edad por favor `)

console.log(`"Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${parseInt(edad) + 1} años"`)

2.
Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta
de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza switch para pedir los datos según la figura.
triangulo = b * h/2
rectangulo = b * h

const tiposPermitidos = ['T', 'R'];
let tipoFigura = '';

do {
    tipoFigura = prompt('Seleccione entre triángulo (T) y rectángulo (R):').toUpperCase();
} while(tiposPermitidos.includes(tipoFigura) === false)

function resultado (mensaje){
   console.log(mensaje)
}

switch(tipoFigura){
   case 'T':
      const baseT = prompt('Indique base del triangulo');
      const alturaT = prompt('Indique altura del triangulo');
      resultado(`La Superficie del triangulo es ${(baseT * alturaT) / 2}`)
      break;

   case 'R':
      const baseR = prompt('Indique base del rectangulo');
      const alturaR = prompt('Indique altura del rectangulo');
      resultado(`La Superficie del rectangulo es ${baseR * alturaR}`)
      break;
}

3.
Solicita un número e 
imprime todos los números pares e impares
desde 1 hasta ese número con el mensaje "es par" o "es impar"
Por ej, si el número es 5 el resultado debería ser:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar

let numero = parseInt(prompt(`indicanos un numero por favor`))
   
for(let i = 1; i < numero + 1; i++){
   if(i % 2 === 0){
      console.log(`${i} - es par`)
   } else{
      console.log(`${i} - es impar`)
   }
}


4.
Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.

let numero;
let limite = 50;
let suma = 0;
let contador = 0;

do {
   numero = parseInt(prompt(`Ingresa un numero por favor`))
   suma += numero;
   contador = contador + 1;
} while (suma < limite)

console.log(`Se ingresaron ${contador} numeros, sumando un total de ${suma}`)

5.
Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
pares y el tercero impares, ambos arrays estarán vacíos [ ]

Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10

Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
Mostrar por consola: array de pares e impares
Tip: se recomienda el uso de for

let numeros = ["20", "2", "15", "3", "7"]
let pares = []
let impares = []
let resultado = 0

function numeroAleatorio(){
   return Math.floor(Math.random() * 10) + 1;
}

function multiplicador(dato1, dato2){
   return dato1 * dato2
}

for (let i = 1; i <= numeros.length; i++){
   resultado = multiplicador(numeros[i - 1], numeroAleatorio())
   
   if (resultado % 2 === 0){
      pares.push(resultado)
   } else {
      impares.push(resultado)
   }
}

console.log(`Numeros pares obtenidos ${pares}
Numeros impares obtenidos ${impares}`)
*/