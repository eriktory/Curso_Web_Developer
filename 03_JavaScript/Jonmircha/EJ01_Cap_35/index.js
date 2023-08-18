// Programa una funcion que cuente el numero de caracteres de una cadena de texto performance. mifucion ("Hola Mundo") devolvera 10

function contarCadena(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena")
    } else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
    }
}

contarCadena();
contarCadena("Hola Mundo");

