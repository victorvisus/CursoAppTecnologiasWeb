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
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  login() {
    console.log(`Usuario ${this.nombre} ha iniciado sesión`);
  }
  verPerfil() {
    console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
  }
}
class UsuarioAdmin extends Usuario {
  constructor(nombre, email, nivel) {
    super(nombre, email);
    this.nivel = nivel;
  }
  login() {
    super.login();
    console.log(' como admin');
  }
  eliminarUsuario(usuario) {
    console.log(`El usuario ${usuario} ha sido eliminado`);
  }
  verPerfil() {
    super.verPerfil();
    console.log(`Nivel: ${this.nivel}`);
  }
}
class UsuarioEditor extends Usuario {
  constructor(nombre, email, especialidad) {
    super(nombre, email);
    this.especialidad = especialidad;
  }
  publicarContenido(titulo) {
    console.log(`El contenido ${titulo} ha sido publicado`);
  }
  verPerfil() {
    super.verPerfil();
    console.log(`Especialidad: ${this.especialidad}`);
  }
}

const usr1 = new Usuario('Ana', 'ana@email');
usr1.login();
usr1.verPerfil();

const usrAdmin = new UsuarioAdmin('Ana', 'ana@email', 1);
usrAdmin.login();
usrAdmin.verPerfil();
usrAdmin.eliminarUsuario('Carlos');

const usrEditor = new UsuarioEditor('Ana', 'ana@email', 'HTML');
usrEditor.login();
usrEditor.publicarContenido('Mi primer contenido');
usrEditor.verPerfil();
