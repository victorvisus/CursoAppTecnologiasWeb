//funcion normal
function operar(a, b) {
  return a + b;
}
console.log(`El resultado de operar es: ${operar(2, 3)}`);

//funcion anonima
let sumar = function (a, b) {
  return a + b;
};
console.log(`El resultado de sumar es: ${sumar(4, 5)}`);

//funcion flecha
let resul = (a, b) => a + b; //funcion flecha
console.log(`El resultado es: ${resul(6, 7)}`);
