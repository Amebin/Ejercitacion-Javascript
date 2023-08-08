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

let frase = prompt(`ingresa tu frase aqui`)
let longitud = 0
let vocales = []

for (longitud = 0; longitud < frase.length; longitud++) {
    if (frase.charAt(longitud) === "a") {
        vocales.push("a")
    } if (frase.charAt(longitud) === "e") {
        vocales.push("e")
    } if (frase.charAt(longitud) === "i") {
        vocales.push("i")
    }
    if (frase.charAt(longitud) === "o") {
        vocales.push("o")
    }
    if (frase.charAt(longitud) === "u") {
        vocales.push("u")
    } else {
        console.log(`no hay vocales en esta posicion`)
    }
}
document.write(`${vocales} son las vocales, ${longitud - vocales.length} son consonantes de 
${frase.length} letras de la frase ingresada`)
*/

/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20
Output: El 20 es divisible por 2.

let numero = prompt(`ingresa un numero para verificar si es divisible`)

if (numero % 2 === 0){
    document.write(`El numero ${numero} es perfectamente divisible por 2`)
} else if (numero % 3 === 0){
    document.write(`El numero ${numero} es perfectamente divisible por 3`)
} else if (numero % 5 === 0){
    document.write(`El numero ${numero} es perfectamente divisible por 5`)
} else if (numero % 7 === 0){
    document.write(`El numero ${numero} es perfectamente divisible por 7`)
} else {
    document.write(`El numero ${numero} no es perfectamente divisible por 2, 3, 5 o 7`)
}
*/

/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20       Output: El 20 es divisible por 2 y por 5.
input: 210      Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let numero = prompt(`ingresa un numero para verificar si es divisible`)
let esDivisible = []

function divisible(numero){
    if (numero % 2 === 0) {
        esDivisible.push(`2`)
    } 
    if (numero % 3 === 0) {
        esDivisible.push(`3`)
    } if (numero % 5 === 0) {
        esDivisible.push(`5`)
    } if (numero % 7 === 0) {
        esDivisible.push(`7`)
    }
    
    if (esDivisible.length === 0) {
        return `El ${numero} no es divisible por 2, 3, 5 ni 7.`
      } else {
        const ultimoDivisible = esDivisible.pop();
        const mensaje = `El ${numero} es divisible por ${esDivisible.join(', ')} ${(esDivisible.length > 0 ? ' y por ' : '')} ${ultimoDivisible}.`
        return mensaje
      }
    
}

document.write(divisible(numero))
*/
