const familia = ["Ana", 43, "Luis", 45, "Ricardo", 16, "María", 11, "Joaquín", 99, "Pablo", 11, "Abuela", 99];

// 1. Separar en arrays paralelos (Nombres y Edades)
let nombres = [], edades = [];
familia.forEach((v, i) => (i % 2 === 0) ? nombres.push(v) : edades.push(v));

// 2. Encontrar el valor Mínimo y Máximo (en un solo paso)
let min = edades[0], max = edades[0];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] < min) min = edades[i];
    if (edades[i] > max) max = edades[i];
}

// 3. Imprimir todos los que coincidan con esos récords
edades.forEach((edad, i) => {
    if (edad === min) console.log(nombres[i] + " " + edad + " --> menor");
    if (edad === max) console.log(nombres[i] + " " + edad + " --> mayor");
});