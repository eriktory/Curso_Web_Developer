// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
//     El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    // !5 = 5*4*3*2*1 = 120

let num = parseInt(prompt("Ingrese un número"))
let resultado=1

for(let i = num; i>1; i--){
    resultado *= i
}

console.log(`El factorial de ${num} es ${resultado}`)