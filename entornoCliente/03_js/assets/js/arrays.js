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
let rentas = new Array(787, 763, 876, 988, 566, 655, 1222);
let suma, resul;
for (let i = 0; i < rentas.length; i++) {
  suma = suma + rentas[i];
  console.log(`Sumo ${rentas[i]} a ${suma}`);
}
resul = suma / rentas.length;
console.log(typeof suma);
console.log(`La media de rentas es: ${resul}`);

//Recorrer el array con forEach
let productos = ['laptop', 'mouse', 'teclado', 'monitor'];
// forEach - más facil de leer
productos.forEach((producto) => {
  console.log(`Producto: ${producto}`); // Imprime el elemento actual (producto);
});

/**
 * Crea un sistema de tareas que permita:
• Añadir nuevas tareas
• Mostrar todas las tareas
• Marcar tareas como completadas
• Contar tareas pendientes
 */
const tareas = new Array('diseña', 'implementar', 'pruebas', 'entregar');
console.log(tareas);
tareas.unshift('reunir información'); // agrega elementos al inicio del array
console.log(tareas);
tareas.push('recoger información'); //añadir uno o varios elementos al final del array
console.log(tareas);
tareas.pop(); //Elimina el elemento del final. Además, devuelve ese elemento
console.log(tareas);
tareas.shift(); //Elimina el elemento del principio y devuelve también ese valor.
console.log(tareas);
console.log(tareas.indexOf('implementar')); //Busca un elemento y devuelve su posición.
console.log(tareas.includes('implementar')); //Verifica si un elemento existe en el array.
console.log(tareas.join(' - ')); //Convierte el array en un texto.

const prompça = require('prompt-sync')();
let nuevaTarea = prompça('Introduce una nueva tarea: ');
tareas.push(nuevaTarea);
tareas.forEach(function (tarea) {
  console.log(tarea);
});

tareasEstado = [];
console.log(typeof tareasEstado);
tareas.forEach(function (cadaTarea, i) {
  console.log('num. item: ' + i + ' - ' + cadaTarea);
  if (tareas.indexOf(cadaTarea) < tareas.length - 1) {
    estatus = 'pendiente';
  } else {
    estatus = 'completada';
  }
  tareasEstado.push(cadaTarea, estatus);
});
console.log(tareasEstado);

/**
 * Tienes una lista de nombres y edades de los miembros de una familia.
 * Este script debe devolver el nombre y la edad del de menor edad de la familia,
 * y también el análogo para el de mayor edad. Ejemplo: ["Ana", 43, "Luis", 20, "Pedro", 15, "Carmen", 50]
 *
 * Puedo recorrer el array para que me extraiga las edades typeOf = Number, y que se vayan comparando,
 * con indexOf podemos sacar el indice del numero mayor o menosr (segun el caso) y
 * restando 1 al indice sacamps el indice del nombre
 */
const family = new Array('Ana', 43, 'Luis', 45, 'Pedro', 15, 'Carmen', 50);
const edades = [];

// hacer esto con un forEach
for (let i = 0; i < family.length; i++) {
  if (typeof family[i] == 'number') {
    edades.push(family[i]);
  }
}

let edadMax = edades[0],
  edadMin = edades[0];
for (let i = 0; i < edades.length; i++) {
  //hacer esto con un operador ternario
  if (edades[i] > edadMax) {
    edadMax = edades[i];
  } else if (edades[i] < edadMin) {
    edadMin = edades[i];
  }
}

console.log(
  `El miembro de mayor edad es ${family[family.indexOf(edadMax) - 1]} con ${edadMax} anios`,
  `\nEl más pequeño es ${family[family.indexOf(edadMin) - 1]} con ${edadMin} anios`,
);
