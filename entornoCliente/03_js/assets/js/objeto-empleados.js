/**
 * Crea un sistema que gestione una lista de empleados con:
 *• Array de objetos empleado (nombre, puesto, salario, activo).
 *• Función para añadir nuevos empleados.
 *• Función para mostrar todos los empleados activos.
 *• Función para calcular el gasto total en nóminas.
 *• Función para buscar empleado por nombre.
 *• Extensiones: Filtrar por puesto, Ordenar por salario y Dar de baja empleados (cambiar a no activos).
 */

//const empleados = [];
/**
 * Definición de la clase Trabajador, que representa a un empleado con sus propiedades.
 * La clase tiene un constructor que inicializa las propiedades nombre, puesto, salario y activo.
 */
class Trabajador {
  constructor(nombre, puesto, salario, activo) {
    this.nombre = nombre;
    this.puesto = puesto;
    this.salario = salario;
    this.activo = activo;
  }
}
/**
 * Agrega un nuevo Trabajador al array de empleados.
 * Solicita al usuario el nombre, puesto, salario y estado de actividad del empleado.
 * Crea un nuevo objeto Trabajador con los datos proporcionados y lo agrega al array de empleados.
 * Imprime en la consola el array actualizado de empleados.
 * @param {*} empleados
 * @returns
 */
function addEmpleado(empleados) {
  let nombre = getAnswer('Introduce el nombre del empleado');
  let puesto = getAnswer('Introduce el puesto del empleado');
  let salario = parseFloat(getAnswer('Introduce el salario del empleado'));
  let activo = confirm('¿El empleado está activo?');

  empleados.push(new Trabajador(nombre, puesto, salario, activo));

  return empleados;
}
/**
 * Muestra los empleados activos del array de empleados.
 * Recorre el array de empleados y verifica si cada empleado está activo.
 * Si un empleado está activo, construye un mensaje con su nombre, puesto y salario.
 * Si no hay empleados activos, muestra un mensaje indicando que no hay empleados activos.
 * Imprime en la consola el array de empleados y el mensaje resultante.
 * @param {*} empleados
 * @returns
 */
function mostrarEmpleadosActivos(empleados) {
  let mensaje = '';
  empleados.forEach((trabajador) => {
    if (trabajador.activo) {
      mensaje += `Nombre: ${trabajador.nombre}, Puesto: ${trabajador.puesto}, Salario: ${trabajador.salario}\n`;
    }
  });

  return mensaje || 'No hay empleados activos';
}
/**
 * Calcula el gasto total en nóminas de los empleados activos.
 * Recorre el array de empleados y verifica si cada empleado está activo.
 * Si un empleado está activo, suma su salario al gasto total.
 * @param {*} empleados
 * @returns
 */
function calcularGastoNominas(empleados) {
  let gastoTotal = 0;
  /*   for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].activo === true) {
      gastoTotal += empleados[i].salario;
      console.table(
        `Funcion calcular gasto en nominas ${empleados[i].nombre}: ` +
          empleados[i].salario,
      );
    }
  } */
  empleados.forEach((trabajador) => {
    trabajador.activo ? (gastoTotal += trabajador.salario) : null;
  });
  return gastoTotal;
}

/**
 * Busca un empleado por nombre en el array de empleados.
 * Con el método find() recorre el array de empleados y compara el nombre de cada empleado
 * con el nombre proporcionado.
 * Si encuentra un empleado con el nombre coincidente, devuelve ese empleado.
 * Si no encuentra ningún empleado con el nombre proporcionado, devuelve undefined.
 * @param {*} empleados
 * @param {*} nombre
 * @returns
 */
function findEmpleado(empleados, nombre) {
  return empleados.find((trabajador) => trabajador.nombre === nombre);
}

/**
 * Ordena los empleados por salario de mayor a menor.
 * Utiliza el método sort() para ordenar el array de empleados.
 * La función de comparación compara los salarios de dos empleados y devuelve un valor negativo, cero o positivo según corresponda.
 * Devuelve el array de empleados ordenado por salario.
 * @param {*} empleados
 * @returns
 */
function OrdenarEmpleadosPorSalario(empleados) {
  return empleados.sort((a, b) => b.salario - a.salario);
}
