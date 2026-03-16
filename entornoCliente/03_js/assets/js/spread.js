/*
// Para una agenda: se requiere un objeto que sea jornada-> entre otros
// horario, clientes, ...
// habrá días que se queden sin asignación horaria, y otros que se completen->
// destructuring en un sentido y spread en el sentido opuesto.
// si se contempla el objeto semana, habrá semanas con días festivos 
// y otras que no: destructuring y spread
// Mirar también: window.localStorage(algo)
// Se pueden guardar datos en ficheros .txt
*/
/**
 * Jornada es un objeto que contiene los siguientes campos:
 * - horario: un array de strings que representan el horario de una jornada.
 * - clientes: un array de strings que representan los clientes asignados a una jornada.
 * - asignada: un booleano que indica si la jornada ha sido asignada o no.
 * @type {Object}
 * @property {string[]} horario - array de strings que representan el horario de una jornada.
 * @property {string[]} clientes - array de strings que representan los clientes asignados a una jornada.
 * @property {boolean} asignada - un booleano que indica si la jornada ha sido asignada o no.
 */

const jornada = {
  horario: ["8:30", "11:00", "13:00", "14:00"],
  clientes: ["Juan", "Pedro", "Ana"],
  asignada: false,
};

/**
 * Festivo es un objeto que contiene los siguientes campos:
 * - festivo: un booleano que indica si un día es festivo o no.
 * - motivo: un string que indica el motivo por el que un día es festivo.
 * @type {Object}
 * @property {boolean} festivo - un booleano que indica si un día es festivo o no.
 * @property {string} motivo - un string que indica el motivo por el que un día es festivo.
 */

const festivo = {
  festivo: true,
  motivo: "Navidad",
};

/**
 * Semana es un objeto que contiene los siguientes campos:
 * - lunes: un objeto que contiene la información de una jornada de lunes.
 * - martes: un objeto que contiene la información de una jornada de martes.
 * - miercoles: un objeto que contiene la información de una jornada de miercoles.
 * - jueves: un objeto que contiene la información de una jornada de jueves.
 * - viernes: un objeto que contiene la información de una jornada de viernes.
 * - sabado: un objeto que contiene la información de una jornada de sabado.
 * - domingo: un objeto que contiene la información de una jornada de domingo.
 * @type {Object}
 * @property {Object} lunes - un objeto que contiene la información de una jornada de lunes.
 * @property {Object} martes - un objeto que contiene la información de una jornada de martes.
 * @property {Object} miercoles - un objeto que contiene la información de una jornada de miercoles.
 * @property {Object} jueves - un objeto que contiene la información de una jornada de jueves.
 * @property {Object} viernes - un objeto que contiene la información de una jornada de viernes.
 * @property {Object} sabado - un objeto que contiene la información de una jornada de sabado.
 * @property {Object} domingo - un objeto que contiene la información de una jornada de ding.
 */
const semanaActualizada = {
  lunes: { ...jornada, clientes: [], asignada: false },
  martes: {
    ...jornada,
    horario: ["8:30", "13:00"],
    clientes: ["Luis", "Marta"],
    asignada: true,
  },
  miercoles: { ...jornada },
  jueves: { ...jornada, ...festivo },
  viernes: { ...jornada },
  sabado: { ...jornada, horario: ["8:30", "11:00", "13:00"], asignada: true },
  domingo: { ...festivo, motivo: "Descanso" },
};

// Extraemos el martes de la semana, y de ese martes, el horario y los clientes
/* const { martes } = semanaActualizada;
const { horario, clientes: clientesMartes } = martes;

console.log(`El martes hay cita a las ${horario[0]} con ${clientesMartes[0]}`); */

// Destructuring
const {
  martes: { horario, clientes },
  asignada,
} = semanaActualizada;

console.log(`El martes hay cita a las ${horario[0]} con ${clientes[0]}`);
console.log(asignada);
