-- PARA PODER HACER LA TRANSACCION HAY QUE POBLAR LAS TABLAS

-- INSERTAMOS UNA SUCURSAL, PARA UBICAR LA CUENTA
INSERT INTO sucursal (id_sucursal, direccion, cod_postal, municipio, provincia, apellidos_director)
	VALUES (1, 'Calle Mayor 10', '50001', 'Zaragoza', 'Zaragoza', 'Visus');

-- INSERTO DOS CUENTAS, PARA OPERAR
-- Cuenta Origen (Asociada al cliente 1000 y sucursal 1)
INSERT INTO cuenta (id_cuenta, pseudo_iban, id_cliente, id_sucursal)
	VALUES (10, 'ZAR01', 1000, 1);
-- Cuenta Destino (Asociada al cliente 1001 y sucursal 1)
INSERT INTO cuenta (id_cuenta, pseudo_iban, id_cliente, id_sucursal)
	VALUES (20, 'ZAR02', 1001, 1);

-- AHORA LA TRANSACCION
INSERT INTO transaccion (cta_origen, cta_destino, cantidad, fecha)
	VALUES (10, 20, 1500.00, NOW());

SELECT * FROM transaccion;