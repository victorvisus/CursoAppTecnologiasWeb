/* ********************************************************************************************************************************************
Ejercicio 1, este código tiene un bug con this. Arréglalo usando 3 métodos diferentes:
•Con arrow function.
•Con bind.
const usuarios = [
    nombre: ''Ana'',
    amigos; [''Luis'', ''María'', ''Pedro],

  saludarAmigos: function() {
      this.amigos.forEach(function(amigo) {
          // Bug: this.nombre es undefined aquí
          console.log(`${this.nombre} saluda a ${amigo}`);
     });
  }
};

usuario.saludarAmigos();
*/

/* ********************************************************************************************************************************************
Ejercicio 2, crea una clase Cronometro con:
•Propiedad segundos = 0.
•Método iniciar() que incrementa segundos cada 1000ms.
•Método detener() que para el incremento.
•Método obtenerTiempo() que devuelve los segundos.
•IMPORTANTE: Usa arrow functions donde sea necesario para mantener el this correcto.

  const crono = new Cronometro();
  crono.iniciar();
// Después de 3 segundos:
console.log(crono.obtenerTiempo()); //3
crono.detener();
*/
