/**
 * ¿Qué está pasando aquí?
Un Closure ocurre cuando una función "recuerda" el entorno (las variables) donde fue creada, incluso después de que la función externa haya terminado de ejecutarse.

Entorno Privado: Al ejecutar const contador1 = crearContador(), se crea un espacio en memoria donde let contador = 0 vive exclusivamente para esa instancia.

Persistencia: La función que devuelves tiene un "hilo invisible" conectado a esa variable contador. Aunque crearContador ya terminó, el valor no se destruye.

Independencia: contador1 y contador2 son totalmente independientes. Es como si cada uno tuviera su propia "caja fuerte" con un número dentro; lo que hagas con uno no afecta al otro.
 */
// Clousure,
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}
const contador1 = crearContador();
const contador2 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 2
console.log(contador1()); // 2
console.log(contador2()); // 1

/* ********************************************************************************************************************************************
Ejercicio 2, Crea una función que retorne otra función. La función retornada multiplica su argumento por un valor fijo.
// Ejemplo de uso:
  const duplicar = crearMultiplicador(2);
  const triplicar = crearMultiplicador(3);
  
  console.log(duplicar(5));  // 10
  console.log(triplicar(5)); // 15
*/

// FACTORY FUNCTION
function crearMultiplicador(_factor) {
  return function (p) {
    return _factor * p;
  };
}
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
const cudriplicar = crearMultiplicador(4);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15
console.log(cudriplicar(5)); // 20

/* ********************************************************************************************************************************************
Ejercicio 3, Crea una función que maneje una lista de tareas. La lista debe ser privada (no accesible directamente), debe retornar un objeto con métodos para:
• agregar(tarea)
• listar()
• completar (indice)
• pendientes(), devuelve cuántas hay sin completar.

function crearGestorTareas() {
  const tareas = [];
  return {
    agregar(t) {
      tareas.push(t);
    },
    listar() {
      return tareas;
    },
    completar(i) {
      tareas.splice(i, 1);
    },
    pendientes() {
      return tareas.length;
    },
  };
}
  
*/

function crearGestorTareas() {
  const tareas = [];
  return {
    agregar(tarea) {
      tareas.push(tarea);
    },
    listar() {
      console.log('-- Tareas --');
      let listaTareas = '';
      /*       for (let i = 0; i < tareas.length; i++) {
        listaTareas = listaTareas.concat(
          'Tarea ' + i + ': ' + tareas[i] + '\n',
        );
      } */
      tareas.forEach((tarea, i) => {
        listaTareas = listaTareas.concat('Tarea ' + i + ': ' + tarea + '\n');
      });
      return listaTareas;
    },
    completar(i) {
      //tareas.splice(i, 1);
      tareas[i] = tareas[i].concat(' (completada)');
    },
    pendientes() {
      return 'Tienes ' + tareas.length + ' tareas pendientes.';
    },
  };
}
// Ejemplo de uso:
const misTareas = crearGestorTareas();
misTareas.agregar('Estudiar closures');
misTareas.agregar('Hacer ejercicios');
misTareas.agregar('Hacer Tareas');
console.log(misTareas.listar());
misTareas.completar(1);
console.log(misTareas.listar());
console.log(misTareas.pendientes()); // 1
