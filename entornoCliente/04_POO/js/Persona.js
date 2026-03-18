/* ********************************************************************************************************************************************
Tareas:
• Crear una clase para objetos persona que tenga como atributos: nombre, apellidos, NIF. crearle internamente un método estático que valide la letra del NIF.
Que como método no estático tenga info() que dará toda la información de un
objeto de la clase Persona
*/
class Persona {
  constructor(_nombre, _apellidos, _NIF) {
    this.nombre = _nombre;
    this.apellidos = _apellidos;
    if (!Persona.validaLetraNIF(_NIF) || _NIF.length !== 9) {
      throw new Error('NIF incorrecto');
    }
    this.NIF = _NIF;
  }

  // método estático. No necesita un objeto para ser llamado
  static validaLetraNIF(NIF) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const num = NIF.substring(0, NIF.length - 1);
    const letra = NIF[NIF.length - 1];
    if (letras[num % 23] === letra) {
      return true;
    }
    return false;
  }

  info() {
    return `${this.nombre} ${this.apellidos} con NIF ${this.NIF}`;
  }
}
console.log(Persona.validaLetraNIF('25182545Y'));
