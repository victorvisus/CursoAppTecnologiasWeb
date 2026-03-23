let estudiante = {
  nombre: 'Maria',
  edad: 22,
  carrera: 'informatica',
  nota: 8.5,
};

console.log(estudiante);
console.log(
  'nombre: ' +
    estudiante.nombre +
    '\n' +
    'edad: ' +
    estudiante.edad +
    '\n' +
    'carrera: ' +
    estudiante.carrera +
    '\n' +
    'nota: ' +
    estudiante.nota,
);

let propiedad = 'carrera'; // meto en una variable el nombre de una propiedad del objeto
console.log(
  'accedo a la propiedad infomatica mediante una variable, entre corchetes' +
    '\n' +
    'La carrera del estudiante es: ' +
    estudiante[propiedad],
);

console.log('----------------------------------');
console.log('Obj. Coche -----------------------');
let coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anyo: 2000,
};
console.log('Original: ', coche);

//Modificar propiedades
coche.anyo = 2010;
coche.marca = 'Honda';

//Añadir propiedades nuevas
coche.color = 'Negro';
coche.precio = 25000;
coche.vendido = false;

console.log('Modificado: ', coche);

//Eliminar propiedades
delete coche.vendido;
console.log('Eliminada la propiedad vendido: ', coche);

/**
 * Crear  el objeto familia, tendrá la clave miembros y será de 4 miebros.
 * Donde se entiende que cada miembro es un objeto persona.
 * O sea previamente hay que definir 4 personas y luego integrarlas como valor para la clave miembros (array)
 * ademas, el objeto familia tendrá una clave:
 * direccion (string), telefono (string), cp (string), renta (number), superficie_vivienda (number)
 */
console.log('----------------------------------');
console.log('Obj. Familia -----------------------');
const familia = {};

//Declaro la clase Persona
class Persona {
  //asi tiene herencia
  constructor(nombre, edad, mujer) {
    this.nombre = nombre;
    this.edad = edad;
    this.mujer = mujer;
  }
  saludar() {
    console.log(
      `Hola soy ${this.nombre} y soy un objeto de tipo ${this.constructor.name}`,
    );
  }
}
//Hereda de Persona
class Hijo extends Persona {
  constructor(nombre, edad, mujer, estudios) {
    super(nombre, edad, mujer);
    this.estudios = estudios;
  }
}

familia.miembros = [];

const hijoMenor = new Hijo('Alfredo', 13, false, 'Informatica');
const hijaMayor = new Hijo('Luisa', 15, true, 'Telecomunicaciones');
const padre = new Persona('Ricardo', 43, false);
const madre = new Persona('María', 45, true);

familia.miembros.push(hijoMenor, hijaMayor, padre, madre);
familia.direccion = 'Calle 1';
familia.telefono = '123456789';
familia.cp = '12345';
familia.renta = 5000;
familia.superficie_vivienda = 100;

console.log(familia);

// los hijos crecen y las edades se modifican
// hacer una funcion que agregue x años a las edades de los miembros de la familia
function addEdad(num) {
  familia.miembros.forEach((miembro) => {
    miembro.edad += num;
    console.log(miembro.nombre + ' ahora tiene ' + miembro.edad + ' anios');
  });
}
addEdad(3);
familia.miembros.forEach((miembro) => miembro.saludar());
/* familia.miembros.padre.saludar();
familia.miembros.hijaMayor.saludar(); */

//Add campo precio vivienda
familia.precio_vivienda = 30000;

// a cada mujer de la familia se le da un bono de 2000 euros
function addBono(bono) {
  familia.miembros.forEach((miembro) => {
    if (miembro.mujer) {
      miembro.bono = bono;
    }
  });
}
addBono(2000);
console.log(familia);

//Acceso seguro con verificacion
let clave = 'precio_vivienda';
clave in familia
  ? console.log(`la clave ${clave} es: ${familia[clave]}`)
  : console.log('la clave no existe');

//Listar todas las propiedades:
for (let propiedad in familia)
  console.log(`${propiedad}: ${familia[propiedad]}`);

//Incrementamos la familia con 3 miembros, 2 mujeres y 1 que no es mujer

const hijadd = new Hijo('Ana');
hijadd.mujer = true;
hijadd.acogida = true;
familia.miembros.push(hijadd);

console.log(familia);

//Saludar a las mujeres
familia.miembros.forEach((miembro) => {
  if (miembro.mujer) {
    miembro.saludar();
  }
});

//Dinero sobrante
const dineroSobrante = 1000;
clave = 'bono';
familia.miembros.forEach((miembro) => {
  !(clave in miembro) || 0 === miembro[clave]
    ? (miembro.bono_extra = dineroSobrante)
    : delete miembro.bono;
});
console.log(familia);
