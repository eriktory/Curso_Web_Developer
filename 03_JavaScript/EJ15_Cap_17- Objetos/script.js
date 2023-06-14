const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomás']
}

// console.log(person)

// console.log(person.name);
// console.log(person['name']);

// console.log(person.age)
// console.log(person.sons[0])
// console.log(person.sons[1])

// for(const key in person){
//     console.log(key);
// }

// for(const key in person){
//     console.log(person[key]);
// }

// for(const son in person.sons){
//     console.log(son);
// }

// for(const son of person.sons){
//     console.log(son);
// }

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`);