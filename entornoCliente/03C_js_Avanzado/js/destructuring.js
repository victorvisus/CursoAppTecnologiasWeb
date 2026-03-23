/**
 * Este es un patrón avanzado pero muy común en código moderno. Permite crear funciones de configuración donde todos los parámetros son opcionales y tienen valores por defecto sensatos. El `= {}` al final es crucial: proporciona un objeto vacío por defecto, de modo que puedes llamar la función sin argumentos. Sin él, si llamas `configurar()` sin argumentos, obtendrías un error al intentar destructurar `undefined`.
 * @param {*} param0
 */

function configurar({
  url = 'https://api.ejemplo.com',
  timeout = 5000,
  retries = 3,
} = {}) {
  console.log(`URL: ${url}, Timeout: ${timeout}, retries: ${retries}`);
}
configurar();
configurar({ url: 'https://nueva.api.com' });

/**
 * Sistema de Notificaciones. Crea un sistema de notificaciones con configuración flexible. Valores por defecto sugerido:
•Tipo: "info"
•Duración: 3000
•Posición: "abajo-derecha"
•Cerrable: true
 * @param {*} tipo 
 * @param {*} mensaje 
 * @param {*} duracion 
 * @param {*} posicion 
 * @param {*} cerrable 
 * @returns 
 */
// Crea esta función con parámetros por defecto apropiados
function mostrarNotificacion({
  tipo = 'Info',
  mensaje, // Entrada por usuario obligatoria, no por defecto
  duracion = 3000,
  posicion = 'abajo-derecha',
  cerrable = true,
} = {}) {
  return `
      [${tipo.toUpperCase()}] ${mensaje}
      Duración: ${duracion}ms
      Posición: ${posicion}
      ${cerrable ? '(Cerrable)' : '(No cerrable)'}
    `;
}

// Debe funcionar así:
console.log(mostrarNotificacion({ mensaje: 'Operación exitosa' }));
// Usar valores por defecto para todo excepto el mensaje

console.log(mostrarNotificacion({ tipo: 'Error crítico', mensaje: 'error' }));
// Cambiar tipo, resto por defecto

console.log(
  mostrarNotificacion({
    mensaje: 'Guardando...',
    mensaje: 'info',
    duracion: 5000,
    posicion: 'arriba-derecha',
    cerrable: false,
  }),
);
// Configuración completa personalizada

//Destructuring arrays
let [a, b] = [103, 334];
console.log(`Original: a = ${a}, b = ${b}`); // imprime a, b);

// Copy-paste tradicional
// quiero que a sea b y b sea a, necesito la variable aux
let aux = b;
b = a; // b sigue guardada en la variable aux
a = aux;
console.log(
  `Tradicional: a = ${a}, b = ${b} (aux = ${aux} corresponde a la b original)`,
); // imprime a, b);

// Copy-paste nueva
[a, b] = [b, a];
console.log(`Nuevo: a = ${a}, b = ${b}`);
