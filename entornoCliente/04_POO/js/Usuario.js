class Usuario {
  constructor(id, nombre, email, password) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
  saludar() {
    console.log(
      `Hola soy ${this.nombre} y soy un objeto de tipo ${this.constructor.name}`,
    );
  }
  toString() {
    return `id: ${this.id}, nombre: ${this.nombre}, email: ${this.email}, password: ${this.password}`;
  }
}

const usr1 = new Usuario(1, 'Ana', 'ana@email', '1234');
usr1.saludar();
console.log(usr1.toString());
console.log(usr1 instanceof Usuario); // true
