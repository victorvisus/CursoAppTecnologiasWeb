const alumno = {
  nombre: 'Víctor',
  equipo: 'Neuromante',
  modulos: ['UF1841', 'UF1842', 'UF1843'],
};

console.log(
  `Hola ${alumno.nombre}, estas ejecutando JS desde ${alumno.equipo}`,
);
console.log(`Estás en el módulo: ${alumno.modulos[1]}`);
