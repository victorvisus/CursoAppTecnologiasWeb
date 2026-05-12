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
CREATE or replace FUNCTION eliminar_acentos(
	IN cadena_in VARCHAR(30))
	RETURNS VARCHAR(30)

BEGIN
	DECLARE cadena_out VARCHAR(30);
	DECLARE i INT DEFAULT 1;
	DECLARE pos_vocal INT;
	DECLARE caracter CHAR(1);
	DECLARE vocales_acentuadas VARCHAR(10) DEFAULT 'áéíóúÁÉÍÓÚ';
   DECLARE vocales_limpias VARCHAR(10) DEFAULT 'aeiouAEIOU';

	SET cadena_out = '';
	
-- Recorremos la cadena letra a letra
    WHILE i <= CHAR_LENGTH(cadena_in) DO
        -- Extraemos el carácter actual
        SET caracter := SUBSTRING(cadena_in, i, 1);
        -- Buscamos si el carácter está en la lista de acentuadas
        SET pos_vocal := LOCATE(caracter, vocales_acentuadas); -- busca la vocal acentuada extraida de la cadena dentro de la lista vocales_acentuadas, si lo encuentra devuelve su posición, si no, devuelve 0. La posicion la guarda en la var pos_vocal
        -- Si existe (pos_vocal > 0), lo reemplazamos por su equivalente limpia
        IF pos_vocal > 0 THEN
            SET caracter := SUBSTRING(vocales_limpias, pos_vocal, 1);
        END IF;
        -- Concatenamos el carácter (sea modificado o no) una sola vez
        SET cadena_out := CONCAT(cadena_out, caracter);
        
        SET i := i + 1;
    END WHILE;
    
    RETURN cadena_out;
END
$$


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

	SET nombre := eliminar_acentos(nombre);
	SET apellido1 := eliminar_acentos(apellido1);
	SET apellido2 := eliminar_acentos(apellido2);
	SET dominio := eliminar_acentos(dominio);
	
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
SET @dominio := 'cypherstudios.net'
$$

DROP TRIGGER IF EXISTS trigger_crear_email_before_insert
$$

CREATE TRIGGER trigger_crear_email_before_insert
BEFORE INSERT ON alumno FOR EACH ROW

BEGIN
	-- DECLARE dominio VARCHAR(30) DEFAULT 'gmail.com';
	DECLARE v_email VARCHAR(130);
	IF NEW.email IS NULL THEN
		CALL crear_email(NEW.nombre, NEW.apellido1, NEW.apellido2, @dominio, v_email);
		SET NEW.email := v_email;
	END IF;
END
$$


DELIMITER ;
-- Bloque 1: Nombres con tildes variadas
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Óscar', 'Méndez', 'Ríos', 8.2);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Bélen', 'Íñiguez', 'Sáez', 9.5);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Agustín', 'Castaño', 'Pérez', 4.3);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Verónica', 'Gómez', 'López', 7.8);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Íker', 'Jiménez', 'Ruiz', 6.1);

-- Bloque 2: Nombres con diéresis y compuestos
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Agüero', 'Martín', 'Sanz', 5.5);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('María', 'José', 'Villalba', 10.0);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Ángela', 'Díaz', 'Acosta', 3.9);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Joaquín', 'Muñoz', 'Valdés', 8.9);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Úrsula', 'Vázquez', 'Heredia', 7.1);

-- Bloque 3: Mezcla de mayúsculas y casos de prueba para el email
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('ESTEBAN', 'QUITO', 'Manzanares', 6.6);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Inés', 'Del Amo', 'Castillo', 9.2);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Raúl', 'Hernández', 'Sánchez', 2.5);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Mónica', 'Ferrer', 'Gutiérrez', 8.4);
INSERT INTO alumno (nombre, apellido1, apellido2, nota) VALUES ('Germán', 'Pascual', 'Ibáñez', 5.9);



/*
Modifica el ejercicio anterior y añade un nuevo trigger que las siguientes características:
Trigger: trigger_guardar_email_after_update:
	Se ejecuta sobre la tabla alumnos.
	Se ejecuta después de una operación de actualización.
	Cada vez que un alumno modifique su dirección de email se deberá insertar un nuevo registro en una tabla llamada log_cambios_email.

La tabla log_cambios_email contiene los siguientes campos:
	id: clave primaria (entero autonumérico)
	id_alumno: id del alumno (entero)
	fecha_hora: marca de tiempo con el instante del cambio (fecha y hora)
	old_email: valor anterior del email (cadena de caracteres)
	new_email: nuevo valor con el que se ha actualizado
*/
DELIMETER ;
DROP TABLE IF EXISTS log_cambios_email;
CREATE TABLE log_cambios_email(
	id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	id_alumno INT(10) UNSIGNED NOT NULL,
	fecha_hora TIMESTAMP NOT NULL,
	old_email VARCHAR(150),
	new_email VARCHAR(150) NOT NULL,
	
	CONSTRAINT fk_id_alumno FOREIGN KEY (id_alumno) 
        REFERENCES ALUMNO(id) ON DELETE CASCADE
);


DELIMITER $$
DROP TRIGGER IF EXISTS trigger_guardar_email_after_update
$$

CREATE TRIGGER trigger_guardar_email_after_update
AFTER UPDATE
	ON alumno FOR EACH ROW
	
BEGIN
	DECLARE t_id_alumno INT(10);
	DECLARE t_old_email VARCHAR(150);

	SET t_id_alumno := NEW.id;
	SET t_old_email := OLD.email;
	-- SELECT email INTO t_old_email FROM alumno WHERE id = t_id_alumno;

	--	Cada vez que un alumno modifique su dirección de email se deberá insertar un nuevo registro en una tabla llamada log_cambios_email.
	IF OLD.email <> NEW.email THEN
		INSERT INTO log_cambios_email (id_alumno, fecha_hora, old_email, new_email)
			VALUES(t_id_alumno, CURRENT_TIMESTAMP(), t_old_email, NEW.email);
	END IF;
END
$$

DELIMITER ;
UPDATE alumno SET email = 'newmail1@gmail.com' WHERE id = 93;
UPDATE alumno SET email = 'otromail1@gmail.com' WHERE id = 95;
-- mismo email, no cambia
UPDATE alumno SET email = 'lmencas1@gmail.com' where id = 91;
-- email anterior null
UPDATE alumno SET email = 'nullmail1@gmail.com' where id = 97;
-- se cambia el email
UPDATE alumno SET email = 'xismail1@gmail.com' where id = 99;



/*
Modifica el ejercicio anterior y añade un nuevo trigger que tenga las siguientes características:
Trigger: trigger_guardar_alumnos_eliminados:
	Se ejecuta sobre la tabla alumnos.
	Se ejecuta después de una operación de borrado.
	Cada vez que se elimine un alumno de la tabla alumnos se deberá insertar un nuevo registro en una tabla llamada log_alumnos_eliminados.

La tabla log_alumnos_eliminados contiene los siguientes campos:
	id: clave primaria (entero autonumérico)
	id_alumno: id del alumno (entero)
	fecha_hora: marca de tiempo con el instante del cambio (fecha y hora)
	nombre: nombre del alumno eliminado (cadena de caracteres)
	apellido1: primer apellido del alumno eliminado (cadena de caracteres)
	apellido2: segundo apellido del alumno eliminado (cadena de caracteres)
	email: email del alumno eliminado (cadena de caracteres)
*/
DELIMITER ;
DROP TABLE IF EXISTS log_alumnos_eliminados;
CREATE TABLE log_alumnos_eliminados(
	id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	id_alumno INT(10) UNSIGNED NOT NULL,
	fecha_hora TIMESTAMP NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	apellido1 VARCHAR(30) NOT NULL,
	apellido2 VARCHAR(30) NOT NULL,
	email VARCHAR(150) NOT NULL,

	CONSTRAINT fk_id_alumno FOREIGN KEY (id_alumno) 
      REFERENCES ALUMNO(id) ON DELETE CASCADE
);
ALTER TABLE log_alumnos_eliminados DROP CONSTRAINT fk_id_alumno;

DELIMITER $$
DROP TRIGGER IF EXISTS trigger_guardar_alumnos_eliminados
$$

CREATE TRIGGER trigger_guardar_alumnos_eliminados
AFTER DELETE
	ON alumno FOR EACH ROW

BEGIN
	INSERT INTO log_alumnos_eliminados (id_alumno, fecha_hora, nombre, apellido1, apellido2, email)
		VALUES(OLD.id, CURRENT_TIMESTAMP(), OLD.nombre, OLD.apellido1, OLD.apellido2, OLD.email);
END
$$


DELIMITER ;
-- 1. Eliminar a un alumno específico por su ID
DELETE FROM alumno WHERE id = 96;
-- 2. Eliminar a los alumnos que tienen una nota muy baja (ej: suspenso total)
DELETE FROM alumno WHERE nota < 4;
-- 3. Eliminar a un alumno por su nombre y apellidos (usa esto solo si no sabes el ID)
DELETE FROM alumno WHERE nombre = 'Esteban' AND apellido1 = 'Quito';
-- 4. Eliminar a los alumnos que no tienen email (por si algún insert falló antes de poner el trigger)
DELETE FROM alumno WHERE email IS NULL;