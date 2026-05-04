SELECT * FROM presentador;
SELECT * FROM evento;
SELECT * FROM disfraz;
SELECT * FROM animador;
SELECT * FROM participa;
SELECT * FROM contrato;
SELECT * FROM cliente;


-- Bloque 1: Consultas de Selección Básica (Una sola tabla)
-- 1 Directorio de Contactos: Obtén el apellido y el teléfono de todos los clientes registrados.
SELECT apellido, telefono FROM cliente;

-- 2 Veteranía en la Empresa: Selecciona el apellido de los presentadores que comenzaron antes del año 2012.
SELECT apellido, anyo_inicio FROM presentador WHERE anyo_inicio < 2012;

-- 3 Catálogo de Disfraces: Muestra el nombre del personaje y el precio de alquiler de todos los disfraces, ordenados de más barato a más caro.
SELECT personaje, precio_alquiler AS precio FROM disfraz ORDER BY precio ASC;

-- 4 Presupuestos Bajos: Encuentra la descripción de los eventos cuyo precio base sea menor o igual a 500€.
SELECT descripcion, precio_base AS precio FROM evento WHERE precio_base <= 500;

-- Bloque 2: Filtrado y Funciones de Agregación
-- 1 Búsqueda de Eventos: Localiza todos los eventos que incluyan la palabra "Infantil" en su descripción.
SELECT * FROM evento WHERE descripcion LIKE '%infantil%';

-- 2 Métodos de Pago: Lista todos los datos de los contratos que se han pagado mediante "Transferencia".
SELECT * FROM contrato WHERE forma_pago LIKE 'Transferencia';

-- 3 Cómputo Total: Calcula cuánto dinero sumarían todos los precios base de la tabla evento si se realizaran todos una vez.
SELECT SUM(precio_base) AS total FROM evento;

-- 4 Control de Stock: Cuenta cuántos disfraces diferentes hay registrados en la base de datos.
SELECT COUNT(personaje) FROM disfraz;

-- Bloque 3: Relaciones entre Tablas (JOINs)
-- 1 Presentadores por Evento: Muestra la descripción de cada evento junto al apellido del presentador asignado.
SELECT p.apellido AS Presentador, e.descripcion AS evento
	FROM presentador p, evento e
	WHERE p.id_presentador = e.id_presentador;

-- 2 Logística de Animadores: Obtén el apellido de los animadores y el personaje del disfraz que tienen asociado.
SELECT a.apellido AS animador, d.personaje AS Personaje
	FROM animador a, disfraz d
	WHERE a.id_disfraz = d.id_disfraz;

-- 3 Ubicación de Clientes: Muestra el apellido del cliente y el lugar donde se celebrará el evento que ha contratado.
-- 4 Detalle de la Gala: Selecciona los apellidos de todos los animadores que participan en el evento con id_evento = 57 (pista: usa la tabla participa).

-- Bloque 4: Consultas Avanzadas (Múltiples JOINs)
-- 1 Ficha Completa de Contrato: Genera un listado que muestre: Apellido del cliente, descripción del evento, lugar y el precio final del contrato.
-- 2 Informe de Disfraces en Eventos: Muestra qué personajes (disfraces) aparecerán en cada evento (descripción del evento). Necesitarás unir evento, participa, animador y disfraz.

-- seleccionar todos los eventos en que no tienen precio entre 1800 y 2400, y el presentador lleve en activo más de 6 años
SELECT p.apellido AS Presentador, e.descripcion AS Evento, e.precio_base AS Precio
	FROM presentador p, evento e
	WHERE p.anyo_inicio < (2026 - 6)
		AND NOT (e.precio_base >= 1800 AND e.precio_base <= 2400) AND p.id_presentador = e.id_presentador;
		
		

SELECT id_animador, id_evento FROM participa WHERE id_evento = 57;

-- lista los animadores que participan en el evento con ID 57
SELECT pa.id_animador AS 'ID Animador', a.apellido AS 'Animador', pa.id_evento AS 'ID Evento', e.descripcion AS 'Evento'
	FROM participa pa, animador a, evento e
	WHERE pa.id_evento = 57 AND a.id_animador = pa.id_animador AND e.id_evento = pa.id_evento;
	
-- lista los animadores que participane en el evento más barato
SELECT pa.id_animador AS 'ID Animador', a.apellido AS 'Animador', pa.id_evento AS 'ID Evento', e.descripcion AS 'Evento'
	FROM participa pa, animador a, evento e
	WHERE e.precio_base = (
		SELECT MIN(ex.precio_base) FROM evento ex
		)
		AND a.id_animador = pa.id_animador AND e.id_evento = pa.id_evento;

	
SELECT MIN(precio_base) FROM evento;

-- encontrar los animadores cuyo aperllido empieza por "M"
SELECT * FROM animador WHERE apellido LIKE 'R%';

-- Variables
SELECT @total_NN := COUNT(*) FROM presentador WHERE anyo_inicio IS NOT NULL;
SELECT @total_NN;

SET @importe;
SELECT @importe := SUM(precio_alquiler) FROM disfraz;
SELECT @importe;

-- ejemplo de ANY/SOME/ALL
-- alguno de los presentadores tienen dni acabado en "T"
SELECT p.apellido, p.dni FROM presentador p
	WHERE p.dni = SOME (SELECT px.dni FROM presentador px WHERE px.dni LIKE '%F');
	
-- MANIPULACION DE DATOS
-- char_length(cadena)
SELECT e.descripcion, CHAR_LENGTH(e.descripcion) AS 'Longitud de la cadena' FROM evento e
	ORDER BY CHAR_LENGTH(e.descripcion) DESC;
	
-- substr(cadena, pos)
SELECT dni, SUBSTR(apellido, 7) AS 'ultimas' FROM presentador;
SELECT dni, RIGHT(apellido, 4) AS 'ultimas' FROM presentador; -- dejma a la derecha 8 posiciones, desde la dch
SELECT dni, LEFT(apellido, 4) AS 'primeras' FROM presentador; -- dejma a la izquierda 8 posiciones, desde la izq

SELECT dni, SUBSTR(apellido, 2, 5) AS 'ultimas' FROM presentador;


-- impuesto 12,17% sobre los precios de servicios. Actualizar los precios finales, que muestre el cliente, el presentador y los animadores para cada evento
SELECT e.id_evento AS 'ID Evento', cl.apellido AS 'Cliente', e.descripcion AS 'evento', c.lugar AS 'ubicacion', p.apellido AS 'Presentador',
	a.apellido AS 'Animador', ROUND(c.precio_final*1.1217, 2) AS 'PVP'
	FROM cliente cl, evento e, contrato c, presentador p, animador a, participa pa
	WHERE e.id_evento = c.id_evento AND cl.id_cliente = c.id_cliente AND e.id_presentador = p.id_presentador
		AND a.id_animador = pa.id_animador AND e.id_evento = pa.id_evento
		AND c.precio_final > 0;
	
-- insertar contratos para 10 eventos ue no estan contratados, ponerle la fecha actual
SELECT * FROM evento 
	WHERE id_evento NOT IN (SELECT id_evento FROM contrato);