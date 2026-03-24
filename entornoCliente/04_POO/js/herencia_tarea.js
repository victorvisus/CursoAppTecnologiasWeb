/* ********************************************************************************************************************************************
Crea una clase base Usuario con:
• constructor(nombre, email).
• método login() que muestra "Usuario [nombre] ha iniciado sesión".
• método verPerfil() que muestra información del usuario.

Crea clase UsuarioAdmin que extiende Usuario:
• constructor que además reciba nivel (1-3).
• método login() que llame a super y añada " como admin".
• método eliminarUsuario(usuario) específico de admin.
• método verPerfil() que muestre también el nivel

Crea clase UsuarioEditor que extiende Usuario:
• constructor que además reciba especialidad.
• método publicarContenido(titulo) específico de editor.
• método verPerfil() que muestre también la especialidad
*/

class Usuario {
  constructor(_nombre, _email) {
    this.nombre = _nombre;
    this.email = _email;
  }
  login() {
    return `Usuario ${this.nombre} ha iniciado sesión`;
  }
  verPerfil() {
    return `Nombre: ${this.nombre}, Email: ${this.email}`;
  }
}
class UsuarioAdmin extends Usuario {
  constructor(_nombre, _email, _nivel) {
    super(_nombre, _email);
    this.nivel = _nivel;
  }
  login() {
    return super.login() + ' como admin';
  }
  eliminarUsuario(_usuario) {
    const result = trabajadores.filter(
      (trabajador) => trabajador.nombre !== _usuario,
    );
    trabajadores = result;
    //console.log(`El usuario ${_usuario} ha sido eliminado`);
  }
  verPerfil() {
    return super.verPerfil() + ` Nivel: ${this.nivel}`;
  }
}
class UsuarioEditor extends Usuario {
  constructor(_nombre, _email, _especialidad) {
    super(_nombre, _email);
    this.especialidad = _especialidad;
  }
  publicarContenido(_titulo) {
    console.log(`El contenido ${_titulo} ha sido publicado`);
  }
  verPerfil() {
    return super.verPerfil() + ` Especialidad: ${this.especialidad}`;
  }
}

let trabajadores = [
  new UsuarioAdmin('Ana', 'ana@example.com', 3),
  new UsuarioEditor('Luis', 'luis@example.com', 'Programación'),
  new UsuarioAdmin('Pedro', 'pedro@example.com', 2),
  new UsuarioEditor('Maria', 'maria@example.com', 'Diseño'),
  new Usuario('Juan', 'juan@example.com'),
];
console.log(trabajadores);

const usr1 = new Usuario('Ana', 'ana@email');
console.log(usr1.login());
console.log(usr1.verPerfil());

const usrAdmin = new UsuarioAdmin('Ana', 'ana@email', 1);
console.log(usrAdmin.login());
console.log(usrAdmin.verPerfil());
usrAdmin.eliminarUsuario('Juan');

const usrEditor = new UsuarioEditor('Ana', 'ana@email', 'HTML');
console.log(usrEditor.login());
usrEditor.publicarContenido('Mi primer contenido');
console.log(usrEditor.verPerfil());

console.log(trabajadores);
