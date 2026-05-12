USE jardineria;
SHOW FULL TABLES;

/* Escriba una vista que se llame listado_pagos_clientes que muestre un listado donde aparezcan
todos los clientes y los pagos que ha realizado cada uno de ellos. La vista deberá tener las siguientes co‑
lumnas: nombre y apellidos del cliente concatenados, teléfono, ciudad, pais, fecha_pago, total del pago,
id de la transacción */

SELECT * FROM cliente;
SELECT * FROM pago;

CREATE OR REPLACE VIEW listado_pagos_clientes AS (
	SELECT c.nombre_cliente AS 'Empresa', CONCAT(c.nombre_cliente, ' ', c.apellido_contacto) AS 'Contacto', c.telefono, c.ciudad, c.pais, p.fecha_pago AS 'Fecha', p.total AS 'Total del pago', p.id_transaccion AS 'ID'
		FROM cliente c, pago p
		WHERE c.codigo_cliente = p.codigo_cliente
		ORDER BY Fecha DESC);
		
/*  Escriba una vista que se llame listado_pedidos_clientes que muestre un listado donde aparezcan
todos los clientes y los pedidos que ha realizado cada uno de ellos. La vista deberá tener las siguientes
columnas: código del cliente, nombre y apellidos del cliente concatendados, teléfono, ciudad, pais,
código del pedido, fecha del pedido, fecha esperada, fecha de entrega y la cantidad total del pedido,
que será la suma del producto de todas las cantidades por el precio de cada unidad,
que aparecen en cada línea de pedido. */
SELECT * FROM cliente;
SELECT * FROM pedido;
SELECT * FROM detalle_pedido;

CREATE OR REPLACE VIEW listado_pedidos_clientes AS (
	SELECT c.codigo_cliente AS 'código cliente', CONCAT(c.nombre_cliente, ' ', c.apellido_contacto) AS 'Cliente', c.telefono, c.ciudad, c.pais,
		p.codigo_pedido, p.fecha_pedido, p.fecha_esperada, p.fecha_entrega,
		SUM(dp.cantidad * dp.precio_unidad) AS 'Total'
		FROM cliente c
			LEFT JOIN pedido p ON c.codigo_cliente = p.codigo_cliente
			LEFT JOIN detalle_pedido dp ON p.codigo_pedido = dp.codigo_pedido
		GROUP BY dp.codigo_pedido, c.codigo_cliente);

/* Utilice las vistas que ha creado en los pasos anteriores para devolver un listado de los clientes de la ciudad
de Madrid que han realizado pagos. */
SELECT * FROM listado_pagos_clientes l1, listado_pedidos_clientes l2 WHERE l1.ciudad = 'Madrid' AND 'Total del pago' IS NOT NULL;



/* por politica de empresa los pagos entre 1000 y 5000 se obliga a que sean por cheque, p<ra clientes que hacen más de un pago (2 o mas) */

UPDATE pago 
SET forma_pago = 'Cheque'
WHERE total >= 1000 AND total <= 5000
AND codigo_cliente IN (
    SELECT codigo_cliente 
    FROM (SELECT codigo_cliente FROM pago GROUP BY codigo_cliente HAVING COUNT(*) >= 2) AS subconsulta
);

/* se dan las condicionas administrativas tales que todos los pagos de clientes recuerrentes que hemos obtenido se somenten aun cambiomas pero en forma de vista:
Los pagos anteriores a 1 de enero de 2009, se pondrán en una vista y luego a esa vista se le hará una actualizaciín para poner forma_pago a Transferencia */

SELECT * FROM pago;

CREATE OR REPLACE VIEW listado_pagos_recurrentes AS (
    SELECT *
    FROM (SELECT * FROM pago GROUP BY codigo_cliente HAVING COUNT(*) >= 2) AS subconsulta
);

UPDATE pago SET forma_pago = 'Transferencia' IN (SELECT * from listado_pagos_recurrentes);


CREATE OR REPLACE VIEW pagos_antes_01012009 AS (
	SELECT * FROM pago
		WHERE fecha_pago < '2009-01-01'
);

UPDATE pagos_antes_01012009 SET forma_pago = 'Cheque' WHERE id_transaccion = 'ak-std-000006';

--  CURSORES -----------
/* hacer un procedimiento en prevision de cambios periódicos para ciertas cuantias, el administrador de la bbdd prepara un procedimiento para cambiar a Transferencia los registros de esta vista que eran Paypal. Se van a utilizar Cursores. Sobre la vista anterior.
*/
DELIMITER $$
DROP PROCEDURE IF EXISTS cambiar_forma_pago
$$
CREATE OR REPLACE PROCEDURE cambiar_forma_pago(IN in_forma_pago VARCHAR(40), IN in_old_forma VARCHAR(40))
BEGIN
	DECLARE done INT DEFAULT FALSE;
	-- Declaramos las variable para usar con los campos que vamos a utilizar de la vista
	DECLARE field_cod_cliente INT;
	DECLARE field_forma_pago VARCHAR(40);
	DECLARE field_id_transaccion VARCHAR(50);
	DECLARE field_fecha_pago DATE;
	DECLARE field_total_pago NUMERIC(15,2);
	-- declaramos el cursor
	DECLARE cur_linea_pago CURSOR	FOR SELECT * FROM pagos_antes_01012009 WHERE total BETWEEN 1000 AND 5000;
	-- manejador de error "Final de cursor"
	DECLARE CONTINUE handler FOR NOT FOUND SET done = TRUE;
	
	-- Abrimos el cursor
	OPEN cur_linea_pago;
	
	while done = FALSE do
		FETCH cur_linea_pago INTO field_cod_cliente,field_forma_pago,field_id_transaccion,field_fecha_pago,field_total_pago;
		-- hacemos la asignacion de cada campo de cada fila del cursor en cada una de las variables
		
		IF done = FALSE THEN
			IF field_forma_pago = in_old_forma THEN
				SET field_forma_pago = in_forma_pago;
			
				UPDATE pagos_antes_01012009 SET forma_pago = field_forma_pago WHERE id_transaccion = field_id_transaccion;
			END IF;
		END IF;
	END WHILE;
	
	CLOSE cur_linea_pago;
	-- COMMIT;
END
$$

DELIMITER ;

SET @in_forma_pago = 'Transferencia';
SET @in_old_forma = 'PayPal';
CALL cambiar_forma_pago(@in_forma_pago, @in_old_forma);

SELECT * FROM pagos_antes_01012009;
