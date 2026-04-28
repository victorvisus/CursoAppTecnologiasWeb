-- Bloque 1: Consultas de Selección Básica (Una sola tabla)
-- 1 Directorio de Contactos: Obtén el apellido y el teléfono de todos los clientes registrados.
SELECT apellido, telefono FROM cliente;

-- 2 Veteranía en la Empresa: Selecciona el apellido de los presentadores que comenzaron antes del año 2012.
SELECT apellido, anyo_inicio FROM presentador WHERE anyo_inicio < 2012;

-- 3 Catálogo de Disfraces: Muestra el nombre del personaje y el precio de alquiler de todos los disfraces, ordenados de más barato a más caro.
SELECT * FROM disfraz;
SELECT personaje, precio_alquiler AS precio FROM disfraz ORDER BY precio ASC;
-- 4 Presupuestos Bajos: Encuentra la descripción de los eventos cuyo precio base sea menor o igual a 500€.
SELECT * FROM evento;
SELECT descripcion, precio_base AS precio FROM evento WHERE precio_base <= 500;

-- Bloque 2: Filtrado y Funciones de Agregación
-- 1 Búsqueda de Eventos: Localiza todos los eventos que incluyan la palabra "Infantil" en su descripción.
SELECT * FROM evento WHERE descripcion LIKE '%infantil%';

-- 2 Métodos de Pago: Lista todos los datos de los contratos que se han pagado mediante "Transferencia".
SELECT * FROM contrato WHERE forma_pago LIKE 'Transferencia';

-- 3 Cómputo Total: Calcula cuánto dinero sumarían todos los precios base de la tabla evento si se realizaran todos una vez.
SELECT * FROM evento;
SELECT SUM(precio_base) AS total FROM evento;

-- 4 Control de Stock: Cuenta cuántos disfraces diferentes hay registrados en la base de datos.
SELECT * FROM disfraz;
SELECT COUNT(personaje) FROM disfraz;

-- Bloque 3: Relaciones entre Tablas (JOINs)
-- 1 Presentadores por Evento: Muestra la descripción de cada evento junto al apellido del presentador asignado.

-- 2 Logística de Animadores: Obtén el apellido de los animadores y el personaje del disfraz que tienen asociado.
-- 3 Ubicación de Clientes: Muestra el apellido del cliente y el lugar donde se celebrará el evento que ha contratado.
-- 4 Detalle de la Gala: Selecciona los apellidos de todos los animadores que participan en el evento con id_evento = 57 (pista: usa la tabla participa).

-- Bloque 4: Consultas Avanzadas (Múltiples JOINs)
-- 1 Ficha Completa de Contrato: Genera un listado que muestre: Apellido del cliente, descripción del evento, lugar y el precio final del contrato.
-- 2 Informe de Disfraces en Eventos: Muestra qué personajes (disfraces) aparecerán en cada evento (descripción del evento). Necesitarás unir evento, participa, animador y disfraz.