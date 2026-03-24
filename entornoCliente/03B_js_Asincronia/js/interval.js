/*
SetInterval
'setInterval' ejecuta código repetidamente cada cierto tiempo. Es útil para actualizaciones periódicas, animaciones, relojes...
Devuelve un ID que se puede usar para detener la repetición.

'setInterval'
Se ejecuta repetidamente.
Cada intervalo de tiempo.
Para tareas periódicas.
Relojes, actualizaciones en tiempo real, animaciones.
*/

let contador = 0;
const intervalo = setInterval(() => {
  console.log(contador++, ' Segundo: ' + contador);
  if (contador >= 5) {
    clearInterval(intervalo);
    console.log('Fin del intervalo');
  }
}, 1000);
