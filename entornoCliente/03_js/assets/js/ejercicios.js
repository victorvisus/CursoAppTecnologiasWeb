// determinar si un numero es par o impar
console.log('--- Determinar si un numero es par o impar ---');
let numero = 10;
if (numero % 2 == 0) {
  console.log('El número es par');
} else {
  console.log('El número es impar');
}

// pedir dos numeros
let numero1 = prompt('Introduce el primer número');
let numero2 = prompt('Introduce el segundo número');
if (numero1 / numero2 === 0) {
  console.log('La division es exacta');
} else {
  console.log(
    `El resultado de la division ${numero1} entre ${numero2} es ${numero1 / numero2}`,
  );
}

// Crea una función llamada limpiarInvitados que reciba un array de nombres donde algunos están repetidos, y devuelva un nuevo array solo con los nombres únicos (sin repetir).

function limpiarInvitados(nombres) {
  const miBolsa = new set(nombres);
  return Array.from(miBolsa);
}

const lista = ['Midu', 'Ángel', 'Midu', 'Dani', 'Ángel'];
console.log(limpiarInvitados(lista));
// Debe mostrar: ["Midu", "Ángel", "Dani"]
