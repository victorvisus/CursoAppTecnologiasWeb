let animales = new Array('gato', 'perro', 'serpinte', 'tortuga', 'sardina');

for (let i = 0; i < animales.length; i++) {
  console.log(`Animal: ${animales[i]}`);
}

console.log('longitud: ' + animales.length);
console.log('ultimo animal: ' + animales[animales.length - 1]);
console.log('primer animal: ' + animales[0]);

if (animales.length === 0) {
  console.log('el array esta vacio');
} else {
  console.log('El array tiene ' + animales.length + ' elementos');
}
console.log('/*****************************************************/');

// acceso y modificación
console.log(animales);
// modifico la posi 1
animales[1] = 'caballo';
// añadir a la ultima posicion
animales[animales.length] = 'periquito';
// añadir a una posicion de un modo "irresponsable", dejando posciones vacias
animales[animales.length + 1] = 'jabali';
console.log(animales);
console.log(animales[5]);

//añadir al final
animales.push('tigre');
//añadir al inicio
animales.unshift('raton');

console.log('\nImprimo con los nuevos\n' + animales);

//elimina el ultimo elemento y devuelve el valor
console.log('elimino el ultimo animal y me lo devuelve: ' + animales.pop());
//elimina el primer elemento y devuelve el valor
console.log('elimino el primer animal: ' + animales.shift());
console.log('el array queda: ' + animales);

//busca un elemento y devuelve su posicion
console.log('el gato esta en la posicion ' + animales.indexOf('gato'));

//recorreo el array
for (let i = 0; i < animales.length; i++) {
  console.log(`El animal en la pos ${i + 1} es ${animales[i]}`);
}

//media de rentas
let rentas = new Array(787,763,876,988,566,655,1222);
let suma;
for (let i = 0; i < rentas.length; i++) {
    suma = suma + rentas[i];
}
console.log(`La media de rentas es: ${suma / rentas.length}`;)