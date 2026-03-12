function crearPromesa(exito) {
  return new Promise((resolve, reject) => {
    console.log('⏳ Procesando... 1000ms');

    setTimeout(() => {
      if (exito) {
        resolve('¡Todo salió bien! 🎉');
      } else {
        reject('UNA CALAMIDAD 💥');
      }
    }, 1000);
  });
}
/**
 * ¿Qué está pasando aquí?
    - new Promise() crea un nuevo objeto Promise
    - El ejecutor (la función que pasamos) se ejecuta inmediatamente
    - resolve y reject son funciones que JavaScript nos proporciona
    - Llamar a resolve(valor) cambia el estado a fulfilled con ese valor
    - Llamar a reject(error) cambia el estado a rejected con ese error
    (Importante. Sólo puedes llamar a una de las dos funciones: resolve o reject. Después de llamar a una de ellas, las demás llamadas se ignoran.)
 */

// Consumiendo la promesa exitosa
/**
 * Una vez que tienes una Promise, necesitas consumirla para obtener su valor. Para esto usamos dos métodos fundamentales:
    - .then(): Se ejecuta cuando la Promise se resuelve exitosamente
    - .catch(): Se ejecuta cuando la Promise se rechaza con un error
 * Estos métodos son como suscripciones a eventos futuros. Le dices a JavaScript: "cuando esta Promise termine, ejecuta esta función".
 */
console.log('// Primera llamada a la funcion crearPromesa() //////////');
crearPromesa(true)
  .then((resultado) => {
    console.log('✅ Éxito:', resultado);
    return resultado.toUpperCase(); // Puedes transformar el valor y lo manda al siguiente .then()
  })
  .then((resultadoMayusculas) => {
    console.log('📝 Transformado:', resultadoMayusculas);
    // -> 📝 Transformado: ¡TODO SALIÓ BIEN! 🎉
  })
  .catch((error) => {
    // Esto nunca se ejecutará porque la promesa se resuelve exitosamente
    console.log('❌ Error:', error);
  });

console.log('// Segunda llamada a la funcion crearPromesa() //////////');
// Probando con error (después de 2 segundos)
crearPromesa(false)
  .then((resultado) => {
    console.log('ok en llamada 2');
    console.log('✅ Éxito:', resultado);
  })
  .catch((error) => {
    console.log('error en llamada 2');
    console.log('❌ Error capturado:', error);
    // -> 🔴 Error capturado: UNA CALAMIDAD 💥
  });
/**
 * Encadenamiento de Promises
 * Una de las superpoderes de las Promises es el encadenamiento. Cada .then() devuelve una nueva Promise, lo que te permite crear pipelines de transformación de datos.
 */
