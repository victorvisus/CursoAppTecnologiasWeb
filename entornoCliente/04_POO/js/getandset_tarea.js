/* ********************************************************************************************************************************************
Crea una clase Temperatura que:
• Almacene la temperatura en Celsius (privado).
• Tenga getter/setter para celsius con validación (-273 a 1000).
• Tenga getter/setter para fahrenheit que convierte automáticamente.
• Tenga getter/setter para kelvin que convierte automáticamente.
• Tenga getter esCongelacion que devuelve true si temp <= 0°C.
• Tenga getter esEbullicion que devuelve true si temp >= 100°C.

// Fórmulas:
// F = C * 9/5 + 32
// K = C + 273.15
*/

class Temperatura {
  #celsius;
  #fahrenheit;
  #kelvin;

  /**
   * Los Getters y Setters actúan como "propiedades inteligentes".
   * * El constructor NO asigna valores directamente a los atributos privados (#),
   * sino que LLAMA a los setters (this.celsius = valor).
   * * Esto garantiza que:
   * 1. La validación se ejecute desde la inicialización (new).
   * 2. Se disparen automáticamente los cálculos y la sincronización de
   * otros atributos (Fahrenheit/Kelvin) al nacer el objeto.
   */
  constructor(_celsius) {
    this.celsius = _celsius;
    /*     this.fahrenheit = 0;
    this.kelvin = 0; */
  }

  //• Tenga getter/setter para celsius con validación (-273 a 1000).
  set celsius(_celsius) {
    console.log('Actualizando celsius y estableciendo fahrenheit y kelvin...');

    if (_celsius <= -273 || _celsius >= 1000) {
      throw new Error('Temperatura fuera de rango');
    }
    this.#celsius = _celsius;
    this.fahrenheit = _celsius;
    this.kelvin = _celsius;
  }
  get celsius() {
    return this.#celsius;
  }
  //• Tenga getter/setter para fahrenheit que convierte automáticamente. ---> F = C * 9/5 + 32
  set fahrenheit(_celsius) {
    console.log(`Recibidos ${_celsius}°C, convirtiendo fahrenheit...`);
    let fah = (_celsius * 9) / 5 + 32;
    this.#fahrenheit = fah;
  }
  //• Tenga getter/setter para kelvin que convierte automáticamente. ---> K = C + 273.15
  set kelvin(_celsius) {
    console.log(`Recibidos ${_celsius}°C, convirtiendo kelvin...`);
    let kel = _celsius + 273.15;
    this.#kelvin = kel;
  }
  get fahrenheit() {
    return this.#fahrenheit;
  }
  get kelvin() {
    return this.#kelvin;
  }

  //• Tenga getter esCongelacion que devuelve true si temp <= 0°C.
  get esCongelacion() {
    return this.#celsius <= 0;
  }
  //• Tenga getter esEbullicion que devuelve true si temp >= 100°C.
  get esEbullicion() {
    return this.#celsius >= 100;
  }
}

try {
  const temp = new Temperatura(-20);
  console.log('celsius: ', temp.celsius);
  console.log('congelacion: ', temp.esCongelacion);
  console.log('ebullicion: ', temp.esEbullicion);
  console.log('fahrenheit: ', temp.fahrenheit);
  console.log('kelvin: ', temp.kelvin);
} catch (error) {
  console.log(`ERROR: ` + error.message + '\nFin de la ejecución');
}
