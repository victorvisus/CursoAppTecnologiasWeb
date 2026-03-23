/**
 * Crea un sistema de preferencias de usuario que persista en localStorage. Requisitos
• Clase ConfiguracionUsuario.
• Propiedades: tema (claro/oscuro), idioma, notificaciones (true/false).
• Métodos:
∑cargar(): carga desde localStorage o usa valores por defecto.
guardar(): guarda en localStorage.
cambiarTema(tema).
cambiarIdioma(idioma).
toggleNotificaciones().
reset(): vuelve a valores por defecto.
obtenerConfig(): devuelve objeto con configuración actual.
*/

console.log('comienza la trarea storage');
// Valores por defecto:
const DEFAULT_CONFIG = {
  tema: 'claro',
  idioma: 'es',
  notificaciones: true,
};
const app_prefix = 'cypherapp_';
const [TEMA, IDIOMA, NOTIFICACIONES] = ['tema', 'idioma', 'notificaciones'];

class ConfiguracionUsuario {
  #config = DEFAULT_CONFIG;
  constructor() {
    this.cargar();
  }
  get config() {
    return this.#config;
  }
  /**
   * Logica del metodo:
   * Mira en localStorage usando una clave fija (por ejemplo: "prefs_v1").
   * Si hay algo: Usa JSON.parse() para convertir ese texto en un objeto JS y dáselo a tu variable privada.
   * Si NO hay nada: Significa que es la primera vez que el usuario entra. Asigna los DEFAULT_CONFIG.
   */
  cargar() {
    const dataConfig = localStorage.getItem(`${app_prefix}config`);
    if (dataConfig === null) {
      this.#config = { ...DEFAULT_CONFIG }; // con el operador spread copiamos el objeto, no lo vinculamos, de este modo al cambiar un valor en el #config no se cambia en DEFAULT_CONFIG

      // TODO: poner la version recuperando propiedad por propiedad, en lugar del objeto completo

      console.log(
        'No se encontraron preferencias de usuario, cargo las predeterminadas',
      );
      this.guardar();
    } else {
      this.#config = JSON.parse(dataConfig);
      console.log('Preferencias de usuario cargadas');
    }
  }

  /**
   * Logica del metodo:
   * Usa JSON.stringify() para convertir tu variable privada en un string.
   * Guarda ese string en localStorage usando una clave fija (por ejemplo: "prefs_v1").
   *
   * Este es un método de "utilidad interna". Cada vez que cambies algo en la clase, llámalo.
   *
   * Coge tu objeto #config.
   * Conviértelo a texto con JSON.stringify().
   * Mételo en localStorage con la misma clave que usaste en el paso anterior.
   */
  guardar() {
    try {
      localStorage.setItem(`${app_prefix}config`, JSON.stringify(this.#config));

      // TODO: poner la version recuperando propiedad por propiedad, en lugar del objeto completo
      /*       localStorage.setItem(
        `${app_prefix}${TEMA}`,
        JSON.stringify(this.#config.tema),
      );
      localStorage.setItem(
        `${app_prefix}${IDIOMA}`,
        JSON.stringify(this.#config.idioma),
      );
      localStorage.setItem(
        `${app_prefix}${NOTIFICACIONES}`,
        JSON.stringify(this.#config.notificaciones),
      ); */

      console.log('Configuración guardada');
    } catch (error) {
      console.log(error);
    }
  }

  cambiarTema(tema) {
    this.#config.tema = tema;

    this.guardar();
    console.log('Tema cambiado');
  }
}
