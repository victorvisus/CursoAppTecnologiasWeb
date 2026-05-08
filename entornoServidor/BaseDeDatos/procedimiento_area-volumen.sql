DROP DATABASE IF EXISTS test;
CREATE DATABASE test;
USE test;

DELIMITER $$

DROP PROCEDURE IF EXISTS calcular_area_circulo
$$
CREATE PROCEDURE calcular_area_circulo(IN radio DOUBLE, OUT area DOUBLE)
BEGIN
	SET area = PI() * POW(radio, 2);
END
$$

DROP PROCEDURE IF EXISTS calcular_volumen_cilindro
$$
CREATE PROCEDURE calcular_volumen_cilindro(IN radio DOUBLE, IN altura DOUBLE, OUT volumen DOUBLE)
BEGIN
	DECLARE area DOUBLE;
	 -- La variable local `area` almacenará el valor de salida del procedimiento
	CALL calcular_area_circulo(radio, area);
	SET volumen = area * altura;
END
$$

DELIMITER ;
-- La variable de usuario `@volumen` almacenará el valor de salida del procedimiento
CALL calcular_volumen_cilindro(4.5, 6, @volumen);
SELECT @volumen;