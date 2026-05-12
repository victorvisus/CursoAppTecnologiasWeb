/*
1.8.5 Manejo de errores en MySQL
Crea una base de datos llamada test que contenga una tabla llamada alumno. La tabla debe tener cuatro columnas:
id: entero sin signo (clave primaria).
nombre: cadena de 50 caracteres.
apellido1: cadena de 50 caracteres.
apellido2: cadena de 50 caracteres.
Una vez creada la base de datos y la tabla deberá crear un procedimiento llamado insertar_alumno con las siguientes características. El procedimiento recibe cuatro parámetros de entrada (id, nombre, apellido1, apellido2) y los insertará en la tabla alumno. El procedimiento devolverá como salida un parámetro llamado error que tendrá un valor igual a 0 si la operación se ha podido realizar con éxito y un valor igual a 1 en caso contrario.

Deberá manejar los errores que puedan ocurrir cuando se intenta insertar una fila que contiene una clave primaria repetida.
*/
DROP DATABASE IF EXISTS test;
CREATE DATABASE test;
USE test;

DROP TABLE IF EXISTS alumno;
CREATE TABLE alumno(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	apellido1 VARCHAR(50),
	apellido2 VARCHAR(50));


DELIMITER $$
CREATE OR REPLACE PROCEDURE insertar_alumno(
	IN p_id INT UNSIGNED,
	IN p_nombre VARCHAR(100),
	IN p_apellido1 VARCHAR(100),
	IN p_apellido2 VARCHAR(100),
	OUT ex_ERROR INT
)

BEGIN
	-- Clave duplicada
	DECLARE EXIT HANDLER FOR 1062 SET ex_ERROR = 1;
	-- longitud de texto excedida
	DECLARE EXIT HANDLER FOR 1406 SET ex_ERROR = 1;
	
	INSERT INTO alumno (id, nombre, apellido1, apellido2) VALUES (p_id, p_nombre, p_apellido1, p_apellido2);
	-- Si no hay error, el valor por defecto será 0
   SET ex_ERROR = 0;
END
$$

DELIMITER ;
-- Caso 1: Inserción correcta
CALL insertar_alumno(1, 'Antonio', 'Garcia', 'Cano', @resultado);
SELECT @resultado; -- Debería devolver 0

-- Caso 2: Intento de insertar el mismo ID (Provocar error)
CALL insertar_alumno(1, 'Maria', 'Lopez', 'Martinez', @resultado);
SELECT @resultado; -- Debería devolver 1

-- caso 3: nombre muy largo
CALL insertar_alumno(
    2, 
    'Juan Nepomuceno de la Santísima Trinidad de Villavicencio y Pérez', -- 62 caracteres
    'García', 
    'López', 
    @resultado
);

SELECT @resultado;