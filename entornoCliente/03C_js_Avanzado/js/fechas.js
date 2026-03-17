// Objeto Date
let hoy = new Date();
console.log(hoy);

// Date(ano, mes, dia, hora, minuto, segundo, milisegundo)
const haceUnAnyo = new Date(2025, 2, 13, 10, 20);
console.log(haceUnAnyo);
//console.log(hoy.getDate() + 10);

//Hacer una funcion que, recibiendo una fecha y un numero de dias, devuelva la fecha sumandole esos dias
function solicitarDatos() {
  const prompt = require('prompt-sync')();

  return parseInt(prompt('Dias a sumar: '));
}

function sumarDias(fecha, dias) {
  let resul = fecha.setDate(fecha.getDate() + dias);
  return resul;
}

//console.log(sumarDias(new Date(), solicitarDatos()));

let fechaFutura = sumarDias(hoy, 10);
console.log('hoy: ' + hoy);
console.log('fechafutura: ' + fechaFutura);

//programar una funcion tal que dadas dos fechas, calcule el numero de dias transcurridos. Dar los dias enteros (24h)
function calcularDias(fecha1, fecha2) {
  console.log(fecha1);
  console.log(fecha2);

  let dif;
  //dif = (Date.parse(fecha2) - Date.parse(fecha1)) / (1000 * 60 * 60 * 24);
  dif = (fecha2 - fecha1) / (1000 * 60 * 60 * 24);
  return Math.floor(dif);
}

/*
Date.now();//devuelve el numero de milisegundos desde el 1 de enero de 1970
Date.parse();//devuelve el numero de milisegundos desde el 1 de enero de 1970
*/

let fechaTest01 = new Date(2026, 2, 23, 10, 20);
let fechaTest02 = new Date(2026, 2, 13, 10, 20);
console.log(calcularDias(fechaTest01, fechaTest02));
console.log(calcularDias(hoy, fechaFutura));

//Para manejar fechas con intl
//https://www.aluracursos.com/blog/como-formatear-fechas-horas-y-monedas-en-javascript
const fechaActual = new Date();
console.log('Fecha Actual: ' + fechaActual); // La salida será la fecha actual sin formato
console.log(fechaActual); // La salida será la fecha actual sin formato
const fechaFormateada = new Intl.DateTimeFormat('es-BO', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'America/La_Paz',
});
console.log('Fecha Formateada long: ' + fechaFormateada.format(fechaActual)); // La salida será la fecha actua

const fechaActual2 = new Date();
console.log('Fecha Actual 2: ' + fechaActual2); // La salida será la fecha actual sin formato
const fechaFormateada2 = new Intl.DateTimeFormat('es-BO', {
  dateStyle: 'short',
  timeStyle: 'long',
  timeZone: 'America/La_Paz',
});
console.log('Fecha Formateada short: ' + fechaFormateada2.format(fechaActual2)); // La salida será la fecha actua
