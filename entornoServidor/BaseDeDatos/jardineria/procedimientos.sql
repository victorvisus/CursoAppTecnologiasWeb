
USE jardineria;

/*
Escriba un procedimiento llamado contar_productos que reciba como entrada el nombre de la gama y devuelva el número de productos que existen dentro de esa gama. Resuelva el ejercicio de dos formas distintas, utilizando SET y SELECT ... INTO..*/

-- Solución 1. Utilizando SET
DELIMITER $$
DROP PROCEDURE IF EXISTS contar_productos
$$
CREATE PROCEDURE contar_productos(IN gama VARCHAR(50), OUT total INT UNSIGNED)
BEGIN
  SET total = (
    SELECT COUNT(*) 
    FROM producto 
    WHERE producto.gama = gama);
END
$$

DELIMITER ;
CALL contar_productos('Herramientas', @total);
SELECT @total;


/* Escribe un procedimiento que se llame calcular_max_min_media, que reciba como parámetro de entrada el nombre de la gama de un producto y devuelva como salida tres parámetros. El precio máximo, el precio mínimo y la media de los productos que existen en esa gama. Resuelva el ejercicio de dos formas distintas, utilizando SET y SELECT ... INTO. */
-- Solucioń 2. Utilizando SELECT ... INTO
DELIMITER $$
DROP PROCEDURE IF EXISTS calcular_max_min_media
$$
CREATE PROCEDURE calcular_max_min_media(
  IN gama VARCHAR(50),
	OUT maximo DECIMAL(15, 2),
	OUT minimo DECIMAL(15, 2),
   OUT media DECIMAL(15, 2),
   OUT gama_out VARCHAR(50)
)
BEGIN
  SELECT 
  	producto.gama,
   MAX(precio_venta),
   MIN(precio_venta),
   AVG(precio_venta)
   FROM producto
  WHERE producto.gama = gama
    INTO gama_out, maximo, minimo, media;
END
$$

DELIMITER ;
CALL calcular_max_min_media('Herramientas', @maximo, @minimo, @media, @gama_out);
SELECT @gama_out, @maximo, @minimo, @media;