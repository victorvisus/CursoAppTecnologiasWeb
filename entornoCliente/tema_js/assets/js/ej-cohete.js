let cuenta = 10;
while (cuenta > 0) {
  //mientras cuenta sea mayor que 0
  cuenta--; // resta 1 a cuenta
  if (cuenta % 2 === 0) continue; // si es par continua con la siguiente iteracion
  console.log(cuenta + ' segs'); // si es impar muestra el contador
}

console.log('Lanzamiento');
