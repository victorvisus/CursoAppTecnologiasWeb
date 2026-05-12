/*
Crea una base de datos llamada test que contenga una tabla llamada alumnos con las siguientes columnas.
	Tabla alumnos:
		id (entero sin signo)
		nombre (cadena de caracteres)
		apellido1 (cadena de caracteres)
		apellido2 (cadena de caracteres)
		email (cadena de caracteres)

Escriba un procedimiento llamado crear_email que dados los parámetros de entrada: nombre, apellido1, apellido2 y dominio, cree una dirección de email y la devuelva como salida.

	Procedimiento: crear_email
		Entrada:
			nombre (cadena de caracteres)
			apellido1 (cadena de caracteres)
			apellido2 (cadena de caracteres)
			dominio (cadena de caracteres)
			Salida:
			email (cadena de caracteres)
	
		devuelva una dirección de correo electrónico con el siguiente formato:
			El primer carácter del parámetro nombre.
			Los tres primeros caracteres del parámetro apellido1.
			Los tres primeros caracteres del parámetro apellido2.
			El carácter @.
			El dominio pasado como parámetro.
			La dirección de email debe estar en minúsculas.

También deberá crear una función llamada eliminar_acentos que reciba una cadena de caracteres y devuelva la misma cadena sin acentos. La función tendrá que reemplazar todas las vocales que tengan acento por la misma vocal pero sin acento. Por ejemplo, si la función recibe como parámetro de entrada la cadena María la función debe devolver la cadena Maria.

	Función: eliminar_acentos
		Entrada:
			cadena (cadena de caracteres)
		Salida:
			(cadena de caracteres)
		El procedimiento crear_email deberá hacer uso de la función eliminar_acentos.
*/
USE test;

-- --------- Procedimiento eliminar_acentos -- ---------  --
DELIMITER $$
-- DROP PROCEDURE IF EXISTS eliminar_acentos
$$
CREATE OR REPLACE PROCEDURE eliminar_acentos(
	IN cadena_in VARCHAR(30),
	OUT cadena_out VARCHAR(30))
BEGIN

	DECLARE i INT DEFAULT 1;
	DECLARE pos_vocal INT;
	DECLARE caracter CHAR(1);
	DECLARE vocales_acentuadas VARCHAR(10) DEFAULT 'áéíóúÁÉÍÓÚ';
   DECLARE vocales_limpias VARCHAR(10) DEFAULT 'aeiouAEIOU';

	SET cadena_out = '';
	
-- Recorremos la cadena letra a letra
    WHILE i <= CHAR_LENGTH(cadena_in) DO
        -- Extraemos el carácter actual
        SET caracter = SUBSTRING(cadena_in, i, 1);
        
        -- Buscamos si el carácter está en la lista de acentuadas
        SET pos_vocal = LOCATE(caracter, vocales_acentuadas); -- busca la vocal acentuada extraida de la cadena dentro de la lista vocales_acentuadas, si lo encuentra devuelve su posición, si no, devuelve 0. La posicion la guarda en la var pos_vocal
        
        -- Si existe (pos_vocal > 0), lo reemplazamos por su equivalente limpia
        IF pos_vocal > 0 THEN
            SET caracter = SUBSTRING(vocales_limpias, pos_vocal, 1);
        END IF;
        
        -- Concatenamos el carácter (sea modificado o no) una sola vez
        SET cadena_out = CONCAT(cadena_out, caracter);
        
        SET i = i + 1;
    END WHILE;
END $$


-- --------- Procedimiento crear_mail -- --------- --
DELIMITER $$

DROP PROCEDURE IF EXISTS crear_email
$$
CREATE OR REPLACE PROCEDURE crear_email(
	IN nombre VARCHAR(30),
	IN	apellido1 VARCHAR(30),
	IN apellido2 VARCHAR(30),
	IN	dominio VARCHAR(30),
	OUT email VARCHAR(130)
)

BEGIN

	CALL eliminar_acentos(nombre, @cadena_out);
	SET nombre := @cadena_out;
	CALL eliminar_acentos(apellido1, @cadena_out);
	SET apellido1 := @cadena_out;
	CALL eliminar_acentos(apellido2, @cadena_out);
	SET apellido2 := @cadena_out;
	CALL eliminar_acentos(dominio, @cadena_out);
	SET dominio := @cadena_out;
	
	SET email := LOWER(CONCAT(SUBSTRING(nombre, 1, 1), SUBSTRING(apellido1, 1, 3), SUBSTRING(apellido2, 1, 3), '@', dominio));
END;
$$

/*
DELIMITER ;
CALL crear_email('Ángél', 'GÁRCIA', 'lÁhoz', 'gmáil.com', @email);
SELECT @email;
*/
/*
DELIMITER ;
USE test;
SET @cadena_out;
CALL eliminar_acentos('cámíón', @cadena_out);
SELECT @cadena_out;
*/

DELIMITER $$
DROP TRIGGER IF EXISTS trigger_mail_insert$$

CREATE TRIGGER trigger_mail_insert
BEFORE INSERT ON alumno FOR EACH ROW

BEGIN
	DECLARE dominio VARCHAR(30) DEFAULT 'gmail.com';
	DECLARE v_email VARCHAR(130);
	
	CALL crear_email(NEW.nombre, NEW.apellido1, NEW.apellido2, dominio, v_email);
	SET NEW.email = v_email;
END
$$

DELIMITER ;
INSERT INTO alumno (id, nombre, apellido1, apellido2, nota) VALUES (40, 'Andrés', 'García', 'Beltrán', 7.25);
INSERT INTO alumno (id, nombre, apellido1, apellido2, nota) VALUES (50, 'Lucía', 'Méndez', 'Castro', -2);
INSERT INTO alumno (id, nombre, apellido1, apellido2, nota) VALUES (60, 'Ramón', 'Núñez', 'Ortega', 10);