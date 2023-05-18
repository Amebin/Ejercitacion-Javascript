// ejercitacion Javascript variales, estructura if..

/*
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert ("un mensaje")
*/

/*
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World")
*/

/*
3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
alert(3 + 5)
*/

/*
4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 
input: Coder 
Output: Hola Coder

let nombreUsuario = prompt(`Ingresa tu nombre de usuario`)
document.write(`Hola ${nombreUsuario}`)*/

/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

let numeroUno = parseInt(prompt(`Ingresa un numero`))
let numeroDos = parseInt(prompt(`Ingresa otro numero`))
document.write(numeroUno + numeroDos)
*/

/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande

let numeroUno = prompt(`Ingresa un numero`)
let numeroDos = prompt(`Ingresa otro numero`)
document.write(`El ${Math. max(numeroUno, numeroDos)} es el número más grande`)
*/

/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande

let numeroUno = prompt(`Ingresa un numero`)
let numeroDos = prompt(`Ingresa un segundo numero`)
let numeroTres = prompt(`Ingresa un tercer numero`)
document.write(`El ${Math. max(numeroUno, numeroDos, numeroTres)} es el número más grande`)
*/

/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10  --> Output: El 10 es divisible por 2.
input: 15  --> Output: El 15 no es divisible por 2.

let numeroUno = prompt(`Ingresa un numero`)
if (numeroUno % 2 === 0){
    document.write(`El ${numeroUno} es divisible por 2`)
} else {
    document.write(`El ${numeroUno} no es divisible por 2`)
}
*/

/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo
Output: oauo

*/
let fraseUno = prompt(`Ingresa una frase`)
