// Ejercicio 10 ////////////////////////////////////////////
// Seleccionamos el botón
const btn10 = document.getElementById('btnEjecutar10');
// Añadimos el "oyente" de eventos
btn10.addEventListener('click', () => {
  const palabra = getAnswer('Introduzca una palabra o frase');
  const letra = getAnswer('Introduzca la letra a encontrar');

  // Llamamos a la lógica
  numeroDeCaracteres(palabra, letra);
});
//// 10A. abecedario //////////
// Seleccionamos el botón
const btn10a = document.getElementById('btnEjecutar10a');
// Añadimos el "oyente" de eventos
btn10a.addEventListener('click', () => {
  const palabra = getAnswer('Introduzca una palabra o frase');

  // Llamamos a la lógica
  contarAbecedario(palabra);
});

// Ejercicio 26 ////////////////////////////////////////////
// Seleccionamos el botón
const btn26 = document.getElementById('btnEjecutar26');
// Añadimos el "oyente" de eventos
btn26.addEventListener('click', () => {
  const matriz = getMatriz();

  // Llamamos a la lógica
  imprimirMatriz(matriz);
});

// Ejercicio Empleados ////////////////////////////////////////////
//Creo el array de empleados
const empleados = [
  new Trabajador('Paco', 'Desarrollador', 1200, true),
  new Trabajador('Luis', 'Desarrollador', 1300, false),
  new Trabajador('Manolo', 'Desarrollador', 1000, true),
  new Trabajador('Marta', 'Desarrollador', 1500, true),
];

//Creo y recogo los botones del ejercicio de empleados
const btnAddEmpleados = document.getElementById('btnAddEmpleado');
const btnListEmpleadosActivos = document.getElementById(
  'btnListEmpleadosActivos',
);
const btnCalcNominas = document.getElementById('btnCalcNominas');
const btnfindEmpleado = document.getElementById('btnfindEmpleado');
const btnOrdenarEmpleados = document.getElementById('btnOrdenarEmpleados');

// Agrego los oyentes de eventos a los botones y sus funcionalidades
btnAddEmpleados.addEventListener('click', () => {
  addEmpleado(empleados);
  printAlert('Empleados activos: ', mostrarEmpleadosActivos(empleados));
});

btnListEmpleadosActivos.addEventListener('click', () => {
  printAlert('Empleados activos: ', mostrarEmpleadosActivos(empleados));
});

btnCalcNominas.addEventListener('click', () => {
  printAlert('Gasto total en nóminas: ', calcularGastoNominas(empleados));
});

btnfindEmpleado.addEventListener('click', () => {
  const nombre = getAnswer('Introduce el nombre del empleado a buscar');
  const empleadoEncontrado = findEmpleado(empleados, nombre);
  printAlert(
    `Empleado encontrado:
    - Nombre: ${empleadoEncontrado.nombre}
    - Puesto: ${empleadoEncontrado.puesto}
    - Salario: ${empleadoEncontrado.salario}
    - Activo: ${empleadoEncontrado.activo}`,
  );
});

btnOrdenarEmpleados.addEventListener('click', () => {
  const empleadosOrdenados = OrdenarEmpleadosPorSalario(empleados);
  let mensaje = 'Empleados ordenados por salario:\n';
  for (let i = 0; i < empleadosOrdenados.length; i++) {
    mensaje += `Empleado: ${empleadosOrdenados[i].nombre}, Salario: ${empleadosOrdenados[i].salario}\n`;
  }
  printAlert(mensaje);
});
