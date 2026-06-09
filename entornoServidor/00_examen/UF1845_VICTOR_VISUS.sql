-- 1. Los alumnos (nombre y apellido) cuyo primer apellido emipice por una letra que esté entre la "C" y la "T". (1 punto)
SELECT nombre, CONCAT(apellido1, ' ', apellido2) AS 'apellidos'
	FROM alumno
	WHERE apellido1 BETWEEN 'C' AND 'U'
	ORDER BY apellidos;
-- Pongo, como caracter final, 'U' debido a que si no no saca los que empiezan por 'T'

-- 2. Los alumnos (nombre y apellido) con beca que han suspendido alguna asignatura. Crear una vista de esta consulta. (1,5 puntos)
CREATE VIEW alumnos_suspensos AS (
	SELECT a.nombre AS 'Nombre', CONCAT(a.apellido1, ' ', a.apellido2) AS 'Apellidos', m.nota, ag.nombre AS 'Asignatura'
		FROM alumno a
		JOIN matricula m ON a.idAlumno = m.idAlumno
		JOIN asignatura ag ON m.idAsignatura = ag.idAsignatura
		WHERE a.beca = 'si'
			AND m.nota < 5.00
		ORDER BY Apellidos);
		
-- 3. Los alumnos (nombre y apellido) con beca con nota media entre 5 y 7. Crear una vista de esta consulta. (2 puntos)
CREATE VIEW media_alumnos_5y7 AS (
	SELECT a.idAlumno, a.nombre AS 'Nombre', CONCAT(a.apellido1, ' ', a.apellido2) AS 'Apellidos', ROUND(AVG(m.nota), 2) AS 'Media'
		FROM alumno a
		JOIN matricula m ON a.idAlumno = m.idAlumno
		WHERE a.beca = 'si'
		GROUP BY a.idAlumno
		HAVING Media BETWEEN 5 AND 7
		ORDER BY Apellidos);

-- 4. El número total de profesores que no son 'Catedráticos de Universidad', ni 'Titulares Universidad' ni 'Catedráticos'. (1 punto)
SELECT COUNT(idProfesor) AS Total_Profesores 
	FROM profesor 
	WHERE categoria NOT IN ('Catedráticos de Universidad', 'Titulares Universidad', 'Catedráticos de Escuela Universitaria');
	
-- 5. Los nombres y apellidos de los profesores con las tres peores notas medias en las asignaturas que imparten. (1 punto)
SELECT p.nombre AS 'Profesor', CONCAT(p.apellido1, ' ', p.apellido2) AS 'Apellidos', ROUND(AVG(m.nota), 2) AS 'Media'
	FROM profesor p
	JOIN impartir i ON p.idProfesor = i.idProfesor
	JOIN matricula m ON i.idAsignatura = m.idAsignatura
	GROUP BY p.idProfesor
	ORDER BY Media
	LIMIT 3;
	
-- 6. Escribir un TRIGGER de modo que al insertar un profesor que sea del tipo 'Catedráticos de Universidad' se inserte también en la tabla de teléfonos para profesor el número:999999999 asociado al código de ese nuevo profesor. Si se trata de otro tipo de profesor no deberá desencadenarse el efecto del TRIGGER. Probarlo con estos datos (de un nuevo profesor) para la intrucción INSERT y ver el efecto del TRIGGER:  'PR049','22641246Q','Manuel Luis','Lahoz','Pérez','manuel.luis.lahoz.perez@ucm.com', 'Calle Valdivia, 10',28045,'Madrid','Madrid','Catedráticos de Universidad' (2,5 puntos)

DELIMITER $$

DROP TRIGGER IF EXISTS trigger_telefono_profesor_before_insert
$$

CREATE TRIGGER trigger_telefono_profesor_before_insert
AFTER INSERT ON profesor FOR EACH ROW
BEGIN
    -- Comprobamos si la categoría del profesor insertado es la requerida
    IF NEW.categoria = 'Catedráticos de Universidad' THEN
        -- Insertamos de forma automática el teléfono asociado a su ID
        INSERT INTO tlfcontactoprof (idProfesor, telefono) 
        VALUES (NEW.idProfesor, '999999999');
    END IF;
END
$$

-- lo probamos
DELIMITER ;
INSERT INTO profesor (idProfesor, NIF, nombre, apellido1, apellido2, email, direccion, codigoPostal, municipio, provincia, categoria)
	VALUES ('PR049', '22641246Q', 'Manuel Luis', 'Lahoz', 'Pérez', 'manuel.luis.lahoz.perez@ucm.com', 'Calle Valdivia, 10', '28045', 'Madrid', 'Madrid', 'Catedráticos de Universidad');
	
-- 1. Comprobamos que el profesor se ha guardado bien
SELECT * FROM profesor WHERE idProfesor = 'PR049';

-- 2. Comprobamos que el trigger ha metido el teléfono solo
SELECT * FROM tlfcontactoprof WHERE idProfesor = 'PR049';


-- 7. Tras la inserción hacer un volcado (mysqldump o comando similar) del contenido de la tabla tlfContactoProf en un fichero y mostrar el fichero generado. (1 punto)

-- mysql -u root -p -e "SELECT * FROM facultad" --silent > C:/AppDesarrollo/datos_telefono.txt
