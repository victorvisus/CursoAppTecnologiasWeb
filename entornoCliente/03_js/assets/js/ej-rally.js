/*
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos.
Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado,
si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/
let longTramo = 1; // en km
let tiempoTramo = 0.02; // en horas
let descalificado; //boolean

//ejemplo de traza
console.log(longTramo / tiempoTramo);
//

if (longTramo / tiempoTramo >= 40 && longTramo / tiempoTramo <= 60) {
  descalificado = false;
} else {
  descalificado = true;
}

console.log(descalificado);
