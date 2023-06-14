// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//     triángulo = b * h/2
//     rectángulo = b * h
//     círculo = π * r2 (pi * radio al cuadrado)

let figura = prompt("Ingrese la figura que a la que deseé calcular el área: triangulo, rectangulo, circulo")

let base;
let altura;
let radio;

switch(figura){
    case `triangulo`:
        base=prompt("Ingrese el valor de la base del triangulo")
        altura=prompt("Ingrese el valor de la altura del triangulo")
        console.log(`El área del triangulo es ${(base*altura)/2}`)
        break
    case `rectangulo`:
        base=prompt("Ingrese el valor de la base del rectangulo")
        altura=prompt("Ingrese el valor de la altura del rectangulo")
        console.log(`El área del triangulo es ${base*altura}`)
        break
    case `circulo`:
        radio=prompt("Ingrese el radio del círculo")
        console.log(`El área del circulo es ${Math.PI*Math.pow(radio,2)}`)
        break
    default: console.log("La figura geométrica elegida no existe")

}