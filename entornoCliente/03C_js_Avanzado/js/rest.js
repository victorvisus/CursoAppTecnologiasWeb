function saluda(mensaje, ...nombre) {
  return `Hola ${mensaje} ${nombre.join(', ')}!`;
}
console.log(saluda('Mundo', 'Miguel', 'Luis'));

function suma(...numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}
console.log(suma(1, 2, 3, 4, 5)); // 15

const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(...resto);

function configurarApp(nombre, version, ...opciones) {
  return {
    nombre,
    version,
    configuración: opciones,
  };
}
const app = configurarApp(
  'Miguel',
  '1.0.0',
  'Dark Mode',
  'Multilenguaje',
  'http',
);
console.log(app);
