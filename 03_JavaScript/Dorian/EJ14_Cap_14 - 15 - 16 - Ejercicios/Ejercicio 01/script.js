// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings


let nombre = prompt("Ingrese su nombre");
let edad= parseInt(prompt("Ingrese su edad"));

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`)

