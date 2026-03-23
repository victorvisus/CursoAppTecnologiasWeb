/* function hacerTareaEspera(callback) {
  console.log('antes esperando');

  setTimeout(() => {
    callback();
  }, 4000);

  console.log('despues de setTimeout');
}
function tareaCompletada() {
  console.log('Tarea completada');
}
hacerTareaEspera(tareaCompletada); */

/*
¿Qué sucede?:

'saludar' recibe el nombre "Ana" y la función 'mostrarSaludo'.
Ejecuta su código interno.
Llama a 'mostrarSaludo' pasándole "Ana".
'mostrarSaludo' se ejecuta y muestra el mensaje.
*/
function saludar(nombre, callback) {
  console.log('Preparando saludo...');
  callback(nombre);
}
function mostrarSaludo(nombre) {
  console.log(`Hola, ${nombre}`);
}
//Uso del callback
saludar('Ana', mostrarSaludo);

/**************** */
function procesar(datos, callback) {
  console.log('Procesando datos....');
  callback(datos.toUpperCase());
}
function mostrarResultado(resultado) {
  console.log('Resultado ' + resultado);
}
procesar('hola mundo', mostrarResultado);
