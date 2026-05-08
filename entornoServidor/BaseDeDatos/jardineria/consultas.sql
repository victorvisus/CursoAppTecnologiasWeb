USE facultad;
SHOW FULL TABLES;

SHOW CREATE VIEW creditos_curso_view;

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

