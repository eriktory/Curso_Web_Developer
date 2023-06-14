
// let numbers = [1,2,3,4,5];

/* 
Arrays - Propiedad
.length - devuelve el número de posiciones que contiene el array
*/

// console.log(numbers.length);

/*
Arrays - Métodos
Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

// let number = 4;
// console.log(Array.isArray(number));
// console.log(Array.isArray(numbers));

/*
Eliminar un elemento
.shift() - Elimina el primer elemento del array y devuelve ese elemento
.pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// let deleteElement = numbers.shift();
// console.log(numbers);
//console.log(deleteElement);
//console.log(numbers);
// numbers.pop();
// console.log(numbers);

// console.log(numbers);
// let deleteElement = numbers.shift();
// console.log(deleteElement);
// console.log(numbers);

/*
    Añadir elementos
    .push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
    
    .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
    */

// let numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

// let newLength = numbers.push(6);
// console.log(numbers);
// console.log(newLength);

// let newLength2 = numbers.unshift(0);
// console.log(numbers);

/*    
.indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

// let numbers = [1,2,3,4,5];

// console.log(numbers);
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(-6));
// console.log(numbers.indexOf(1));

/* 
    .lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

// console.log(numbers);
// console.log(numbers.lastIndexOf(5));

/* 
    .reverse() - Invierte el orden de los elementos del array.
*/

// let numbers = [1,2,3,4,5];

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

/*       
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas 
*/

// let numbers = [1,2,3,4,5];

// console.log(numbers);
// numbers.join(' ')
// console.log(numbers.join(' - '))
// let arrayString = numbers.join(' ')
// console.log(arrayString);
// console.log(numbers.join('-'));

/*     
    .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

//numbers.splice(3) - Elimina desde la posicion 3 hasta el final

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.splice(3);
// console.log(numbers);

//numbers.splice(2,2) - Elimina desde la posicion a el número valores que le indiquemos

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.splice(2,2)
// console.log(numbers);

//numbers.splice(2,2,10,23,54) - Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de la posicion a

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.splice(2,2,10,23,54)

//numbers.splice(4,0,10,23,54) - Si b vale 0 añade los elementos a partir de la posicion a y no elimina ninguno

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.splice(4,0,10,23,54)
// console.log(numbers);

/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/

let numbers = [1,2,3,4,5];

// let newNumbers = numbers.slice();
// console.log(numbers);
// console.log(newNumbers);

//crea un nuevo array a partir de la posicion indicada ()
// let newNumbers = numbers.slice(2);
// console.log(numbers);
// console.log(newNumbers);

//crea un array extrayendo los valores iniciando en la posicion a y extraer hsata la posicion b
// let newNumbers = numbers.slice(2,4);
// console.log(numbers);
// console.log(newNumbers);