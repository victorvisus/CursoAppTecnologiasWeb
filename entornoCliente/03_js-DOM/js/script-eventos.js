// hacer script para que el párrafo anterior cambie color de letra a rojo al pasar el ratón por encima
const parrafoLorem = document.querySelector('p#miParrafo');
parrafoLorem.addEventListener('mouseover', function () {
  this.style.color = 'red';
});

const colorOriginal = parrafoLorem.style.color;
parrafoLorem.addEventListener('mouseout', function () {
  this.style.color = colorOriginal;
});

// Multiples functions para un EventListener ///////////////////
const btnMulti = document.getElementById('multiClick');

//Primera function
btnMulti.addEventListener('click', function () {
  alert('Primera function -(anonima)');
});
//Segunda function
btnMulti.addEventListener('click', mostrarMsg);
function mostrarMsg() {
  alert('Segunda function -(Funcion aparte)');
}
//Tercera function
btnMulti.addEventListener('click', () => {
  alert('Tercera function -(flecha)');
});

// Remover un oyente de eventos con setTimeout /////////////////
const btnRemoveListener = document.getElementById('removeListener');
function primeraFuncion() {
  alert('Primer click');
}
function segundaFuncion() {
  alert('Removiendo el oyente de eventos');
}

btnRemoveListener.addEventListener('click', primeraFuncion);
btnRemoveListener.addEventListener('click', segundaFuncion);

//se ejecuta al cargar la pagina, para que se ejecute a partir de una acción habrá que meterlo en una funcion
setTimeout(() => {
  btnRemoveListener.removeEventListener('click', primeraFuncion);
  console.log('5segs. Removido el oyente de eventos, de primeraFuncion');
}, 5000);

//
const btnTarget = document.getElementById('target');
const parrafoTarget = document.querySelector('p.target');

btnTarget.addEventListener('click', function (e) {
  parrafoTarget.style.color = 'red';
});
btnTarget.addEventListener('click', function (e) {
  console.log('Target: ' + e.target);
});
btnTarget.addEventListener('click', function (e) {
  console.log('Type: ' + e.type);
});
btnTarget.addEventListener('click', function (e) {
  console.log('timeStamp: ' + e.timeStamp);
});
btnTarget.addEventListener('click', function (e) {
  console.log('CurrentTarget: ' + e.currentTarget);
});

//https://www.youtube.com/watch?v=jaVNP3nIAv0

//Teclado
// Eventos de teclado:
const meinInput = document.querySelector('#name');

meinInput.addEventListener('keydown', function (e) {
  console.log('Tecla presionada: ' + e.key);
});

meinInput.addEventListener('keyup', function (e) {
  console.log('Tecla liberada: ' + e.key);
});

meinInput.addEventListener('keydown', function (e) {
  // 'a', 'Enter', 'Escape'
  // Número de la tecla (obsoleto)
  // 'KeyA', 'Enter', 'Escape'

  console.log('Tecla: ' + e.key);
  console.log('Código: ' + e.keyCode);
  console.log('Código: ' + e.code);

  if (e.ctrlKey) console.log('Ctrl presionado');
  if (e.shiftKey) console.log('Shift presionado');
  if (e.altKey) console.log('Alt presionado');
});
