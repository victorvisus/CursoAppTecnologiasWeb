class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  comer() {
    return `${this.nombre} esta comiendo`;
  }
  dormir() {
    return `${this.nombre} esta durmiendo`;
  }
  hacerSonido() {
    console.log('rrrrrrr');
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.raza = raza;
  }
  ladrar() {
    return `${this.nombre} esta ladrando`;
  }
  //Override. Sobreescribir el metodo del padre
  hacerSonido() {
    super.hacerSonido();
    console.log('...wof! wof! wof!');
  }
}

const miPerro = new Perro('Max', 5, 'Labrador');
console.log(miPerro.comer());
console.log(miPerro.dormir());
console.log(miPerro.ladrar());
miPerro.hacerSonido();
