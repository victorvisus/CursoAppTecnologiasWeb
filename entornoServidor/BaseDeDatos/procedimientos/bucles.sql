/*
Crea una base de datos llamada procedimientos que contenga una tabla llamada cuadrados. La tabla cuadrados debe tener dos columnas de tipo INT UNSIGNED, una columna llamada número y otra columna llamada cuadrado.

Una vez creada la base de datos y la tabla deberá crear un procedimiento llamado calcular_cuadrados con las siguientes características. El procedimiento recibe un parámetro de entrada llamado tope de tipo INT UNSIGNED y calculará el valor de los cuadrados de los primeros números naturales hasta el valor introducido como parámetro. El valor del números y de sus cuadrados deberán ser almacenados en la tabla cuadrados que hemos creado previamente.

Tenga en cuenta que el procedimiento deberá eliminar el contenido actual de la tabla antes de insertar los nuevos valores de los cuadrados que va a calcular.

Utilice un bucle WHILE para resolver el procedimiento.
*/
DROP DATABASE IF EXISTS procedimientos;
CREATE DATABASE procedimientos;
USE procedimientos;

DROP TABLE IF EXISTS cuadrados;
CREATE TABLE cuadrados(id INT AUTO_INCREMENT PRIMARY KEY, numero INT UNSIGNED, cuadrado INT UNSIGNED);

DELIMITER $$
CREATE OR REPLACE PROCEDURE calcular_cuadrados(IN tope INT UNSIGNED)
BEGIN

	DECLARE num INT;
	DECLARE cuadra INT;
	
	SET num := 1;
	SET cuadra := 0;
	
	-- DELETE FROM cuadrados;
	TRUNCATE TABLE cuadrados;
	/*
	WHILE num <= tope DO -- Repite MIENTRAS se cumpla la condicion
		SET cuadra = num * num;
		INSERT INTO cuadrados(numero, cuadrado) VALUES (num, cuadra);
		
		SET num = num + 1;
	END WHILE;
	*/
	-- VERSION REPEAT
	REPEAT
		SET cuadra := num * num;
		INSERT INTO cuadrados(numero, cuadrado) VALUES (num, cuadra);
		
		SET num := num + 1;
	UNTIL num > tope END REPEAT; -- Repite HASTA que se cumpla la condicion

END
$$

DELIMITER ;
CALL calcular_cuadrados(5);
SELECT * FROM cuadrados;


/*
Crea una base de datos llamada procedimientos que contenga una tabla llamada pares y otra tabla llamada impares. Las dos tablas deben tener única columna llamada número y el tipo de dato de esta columna debe ser INT UNSIGNED.

Una vez creada la base de datos y las tablas deberá crear un procedimiento llamado calcular_pares_impares con las siguientes características. El procedimiento recibe un parámetro de entrada llamado tope de tipo INT UNSIGNED y deberá almacenar en la tabla pares aquellos números pares que existan entre el número 1 el valor introducido como parámetro. Habrá que realizar la misma operación para almacenar los números impares en la tabla impares.

Tenga en cuenta que el procedimiento deberá eliminar el contenido actual de las tablas antes de insertar los nuevos valores.
*/

DROP TABLE IF EXISTS pares;
DROP TABLE IF EXISTS impares;
CREATE TABLE pares(id INT AUTO_INCREMENT PRIMARY KEY, par INT UNSIGNED);
CREATE TABLE impares(id INT AUTO_INCREMENT PRIMARY KEY, impar INT UNSIGNED);

DELIMITER $$
CREATE OR REPLACE PROCEDURE calcular_pares_impares(IN tope INT UNSIGNED)
BEGIN

	DECLARE num INT;
	DECLARE res INT;
	
	SET num := 0;
	SET res := 0;
	
	-- DELETE FROM cuadrados;
	TRUNCATE TABLE pares;
	TRUNCATE TABLE impares;
	
	WHILE num <= tope DO -- Repite MIENTRAS se cumpla la condicion
		SET res := num % 2;
		
		CASE
			WHEN res = 0 THEN insert into pares(par) VALUES (num);
			-- WHEN res != 0 THEN insert into impares(impar) VALUES (num);
			ELSE insert into impares(impar) VALUES (num);
		END CASE;

		SET num := num + 1;
	END WHILE;

END
$$

DELIMITER ;
CALL calcular_pares_impares(5);
SELECT * FROM pares;
SELECT * FROM impares;