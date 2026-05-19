use facultad;
-- CONSULTAS

-- Pruebas JOIN
select a.nombre,  a.idCurso, a.caracter from asignatura a, matricula m
	where m.idAsignatura = a.idAsignatura
	group by  a.idCurso, a.nombre;

-- en lo anterior devuelve solo 4 asignaturas de 6º curso, pero hay 6 asignaturas de 6º curso
-- esto se debe a que el JOIN no encuentra matriculas para esas asignaturas en 5º curso
select nombre, idCurso, caracter from asignatura a
	INNER JOIN matricula m ON m.idAsignatura = a.idAsignatura
	group by  a.idCurso, a.nombre;

SELECT a.nombre,  a.idCurso, a.caracter from asignatura a;


-- NATURAL JOIN
SELECT a.nombre,  a.idCurso, a.caracter from asignatura a
	NATURAL JOIN matricula m
	group by  a.idCurso, a.nombre;


-- LEFT OUTER JOIN: sacar todas las asignaturas de 6º curso de asignatura, se hayan o no matriculadas.
select * from asignatura a
	LEFT JOIN matricula m ON m.idAsignatura = a.idAsignatura
	group by  a.idCurso, a.nombre;

select * from asignatura a
	RIGHT JOIN matricula m ON a.idAsignatura = m.idAsignatura
	group by  a.idCurso, a.nombre;


-- Ver que asignatura no tienen alumnos matriculados
SELECT a.idAsignatura, a.nombre
	FROM asignatura a
	WHERE NOT EXISTS (
	    SELECT 1 
	    FROM matricula m 
	    WHERE m.idAsignatura = a.idAsignatura
	);

-- con join
SELECT a.idAsignatura, a.nombre, a.idCurso
	FROM asignatura a
	LEFT JOIN matricula m ON a.idAsignatura = m.idAsignatura
	WHERE m.idAsignatura IS NULL
	GROUP BY a.idCurso, a.nombre;

-- Alumnos que estan matriculados en asignaturas que no existen
SELECT m.idAlumno, a.nombre
	FROM matricula m
	RIGHT JOIN alumno a ON m.idAlumno = a.idAlumno
	WHERE m.idAsignatura IS NULL;




-- 1) Caracter, nº de alumnos, nota mínima, máxima y media de las asignaturas. Ordenar el resultado por curso primero y nombre de la asignatura después.
/*
SELECT idCurso, nombre, caracter, count(nota) AS 'Alumnos', round(min(nota), 2) AS 'Nota min',
	round(max(nota), 2) AS 'Nota max', round(avg(nota), 2) AS 'Nota Media' 
	FROM asignatura, matricula 
	WHERE matricula.idAsignatura = asignatura.idAsignatura 
		GROUP BY asignatura.nombre 
		ORDER BY asignatura.idCurso ASC, asignatura.nombre ASC;
*/
/*
-- 1) Empezamos con una version sencilla
	Caracter,
	nº de alumnos,
	nota mínima,
	máxima
	y media de las asignatura
*/

SELECT a.idCurso, a.nombre, a.caracter, COUNT(m.idAlumno), MIN(m.nota), MAX(m.nota), ROUND(AVG(m.nota), 2)
	FROM asignatura a, matricula m
	WHERE m.idAsignatura = a.idAsignatura
	GROUP BY a.idCurso, a.nombre;

-- 2) Asignaturas con una nota media inferior a 5 orden por curso y posteriormente por nombre ascendente
/*
SELECT idCurso, nombre, round(avg(nota),2) AS 'Nota Media'
	FROM asignatura, matricula
	WHERE matricula.idAsignatura = asignatura.idAsignatura 
		GROUP BY asignatura.nombre
		HAVING avg(nota) < 5.00
		ORDER BY idCurso ASC, nombre ASC;
*/
SELECT a.nombre, round(avg(m.nota),2) AS 'Nota Media'
	FROM asignatura a, matricula m
	WHERE a.idAsignatura = m.idAsignatura
		GROUP BY a.nombre
		HAVING avg(m.nota) < 5
		ORDER BY a.idCurso ASC, a.nombre ASC;

-- SACAR LA MEDIA DE LOS CURSOS CON MEDIA INFERIOR A 7
SELECT a.idCurso, round(avg(m.nota),2) AS 'Nota Media'
	FROM asignatura a, matricula m
	WHERE a.idAsignatura = m.idAsignatura
		GROUP BY a.idCurso
		HAVING avg(m.nota) < 7
		ORDER BY a.idCurso ASC;

-- 3) Conocer el número de profesores por categoría  y ordenar la tabla de categoría con más profesores a categoría con menos
/* SELECT categoria, count(NIF)  as profesores 
	FROM profesor 
		GROUP BY categoria 
		ORDER BY profesores DESC; */

-- Profesor y su categoria
SELECT CONCAT(p.nombre, ' ', p.apellido1, ' ', p.apellido2) AS profesor, categoria
	FROM profesor p
	ORDER BY categoria DESC;

-- Numero de profesores por categoria
SELECT COUNT(p.NIF) AS profesores, categoria
	FROM profesor p
	GROUP BY categoria
	ORDER BY profesores DESC;

-- Cuantos profesores hay en total
SELECT COUNT(p.NIF) AS 'Num profesores'
	FROM profesor p;


-- 4) Conocer curso, asignatura, caracter de la asignatura, coordinador y e-mail de contacto
/* SELECT asignatura.idCurso AS curso, asignatura.nombre AS asignatura, asignatura.caracter AS caracter,
	concat(profesor.nombre, ' ', profesor.apellido1, ' ', profesor.apellido2) AS coordinador, email 
	FROM asignatura INNER JOIN profesor ON (profesor.idProfesor = asignatura.coordinador)
		ORDER BY idCurso ASC, asignatura ASC; */

SELECT a.idCurso AS 'curso', a.nombre AS 'asignatura', a.caracter AS 'caracter',
	CONCAT(p.nombre, ' ', p.apellido1, ' ', p.apellido2) AS 'coordinador', p.email 
	FROM asignatura a
		INNER JOIN profesor p ON (p.idProfesor = a.coordinador)
	ORDER BY a.idCurso ASC, a.nombre ASC;

SELECT a.idCurso AS 'curso', a.nombre AS 'asignatura', a.caracter AS 'caracter',
	CONCAT(p.nombre, ' ', p.apellido1, ' ', p.apellido2) AS 'coordinador', p.email 
	FROM asignatura a, profesor p
		WHERE p.idProfesor = a.coordinador
	ORDER BY a.idCurso ASC, a.nombre ASC;

-- 5) Asignaturas impartidas por profesor de más a menos
SELECT CONCAT(p.nombre, ' ', p.apellido1) AS 'Maestro', COUNT(i.idAsignatura) AS 'Asignaturas'
	FROM profesor p
		INNER JOIN impartir i ON i.idProfesor = p.idProfesor
	GROUP BY Maestro
	ORDER BY Asignaturas DESC;

/*
 SELECT concat(profesor.nombre, ' ', profesor.apellido1, ' ', profesor.apellido2) AS Profesor, count(impartir.idAsignatura) AS materiasImpartidas
	 FROM profesor INNER JOIN impartir ON profesor.idProfesor = impartir.idProfesor 
		 GROUP BY impartir.idProfesor
		 ORDER BY materiasImpartidas DESC;
*/


-- 6) Mostrar aquellos alumnos que tienen una media superior a 7.00 y su nota media

SELECT CONCAT(a.nombre, ' ', a.apellido1) AS 'Alumno', ROUND(AVG(m.nota),2) AS 'Media'
	FROM alumno a
		INNER JOIN matricula m ON m.idAlumno = a.idAlumno
	GROUP BY a.idAlumno
	HAVING AVG(m.nota) > 7
	ORDER BY Media DESC;
	
SELECT CONCAT(a.nombre, ' ', a.apellido1) AS 'Alumno', ROUND(AVG(m.nota),2) AS 'Media'
	FROM alumno a, matricula m WHERE m.idAlumno = a.idAlumno
	GROUP BY a.idAlumno
	HAVING AVG(m.nota) > 7
	ORDER BY Media DESC;

/*
SELECT concat(nombre, ' ', apellido1, ' ', apellido2) AS alumno, round(avg(matricula.nota),2) AS notaMedia
	FROM alumno INNER JOIN matricula ON alumno.idAlumno = matricula.idAlumno
		GROUP BY alumno.idAlumno
		HAVING avg(matricula.nota) > 7.00 -- Filto de la agrupación alumno con una nota media superior a 7
		ORDER BY notaMedia DESC;
*/

-- 7) Obtener los créditos totales por curso (con separación según caracter).
-- El curso 6 tiene 0 créditos, al ser un doctorado las asignaturas no forman parte de la nota final

SELECT a.idCurso, c.nombreDescriptivo AS 'Curso', a.caracter, SUM(a.creditos) AS 'Creditos'
	FROM asignatura a
		INNER JOIN curso c ON c.idCurso = a.idCurso
	WHERE a.idCurso < 6
	GROUP BY a.idCurso, a.caracter
	
-- creamos una vista
CREATE VIEW creditos_curso AS (
	SELECT a.idCurso, c.nombreDescriptivo AS 'Curso', a.caracter, SUM(a.creditos) AS 'Creditos'
		FROM asignatura a
			INNER JOIN curso c ON c.idCurso = a.idCurso
		WHERE a.idCurso < 6
		GROUP BY a.idCurso, a.caracter);
/*
SELECT curso, caracter, sum(creditos) AS creditos
	FROM asignatura
	GROUP BY curso, caracter;
*/

-- 8) Obtener aquellas optativas sin alumnos
SELECT a.nombre AS 'Asignatura', a.caracter
	FROM asignatura a
		WHERE a.caracter = 'optativa' AND a.idAsignatura NOT IN (
			SELECT m.idAsignatura FROM matricula m);
			
/*
SELECT asignatura.nombre, count(matricula.idAlumno) AS alumnos
	FROM asignatura LEFT JOIN matricula ON (asignatura.idAsignatura = matricula.idAsignatura)
		GROUP BY asignatura.nombre
		HAVING alumnos = 0;
*/


-- 9) Obtener el número de alumnos de primero que tienen que recuperar cada asignatura


USE facultad;

SELECT a.nombre, COUNT(m.idAlumno) AS 'Suspendidos'
	FROM asignatura a 
	JOIN matricula m ON a.idAsignatura = m.idAsignatura
		WHERE m.nota < 5.00 AND a.idCurso = 1
	GROUP BY a.nombre;

/*
SELECT nombre, count(idAlumno) as alumnosRecuperacion
	FROM asignatura INNER JOIN matricula ON asignatura.idAsignatura = matricula.idAsignatura
	WHERE nota < 5.00 AND idCurso = 1
		GROUP BY nombre
		ORDER BY nombre ASC;
*/
-- 10) Alumnos que tienen que presentarse a la recuperación de Algebra lineal (AS001) y la nota que sacaron 
SELECT CONCAT(a.nombre, ' ', a.apellido1, ' ', a.apellido2) AS 'Alumno', m.nota
	FROM alumno a
	INNER JOIN matricula m ON m.idAlumno = a.idAlumno
	WHERE m.idAsignatura = 'AS001' AND m.nota < 5.00
	GROUP BY a.idAlumno;



/*   
SELECT concat(alumno.nombre,' ', apellido1, ' ', apellido2) AS alumno, matricula.nota 
	FROM alumno
		INNER JOIN matricula ON alumno.idAlumno = matricula.idAlumno
		INNER JOIN asignatura ON asignatura.idAsignatura = matricula.idAsignatura
	WHERE matricula.nota < 5.00 AND asignatura.nombre = "Algebra lineal"
		ORDER BY alumno ASC;
*/
-- 11) Alumnos de segundo que han sacado un 10 en alguna materias para ponerles mención de honor. Ordenar alfabéticamente por nombre asignatura 
SELECT * from alumno;
SELECT * from matricula;
SELECT * from asignatura;

SELECT a.nombre AS 'Asignatura', CONCAT(al.nombre, ' ', al.apellido1, ' ', al.apellido2) AS 'Alumno', m.nota
	FROM asignatura a 
	JOIN matricula m ON a.idAsignatura = m.idAsignatura
	JOIN alumno al ON al.idAlumno = m.idAlumno
		WHERE m.nota = 10 AND a.idCurso = 2
	ORDER BY a.nombre ASC;


/*
SELECT idCurso, asignatura.nombre, concat(alumno.nombre,' ', apellido1, ' ', apellido2) AS alumno, nota
	FROM matricula
		INNER JOIN alumno ON alumno.idAlumno = matricula.idAlumno
		INNER JOIN asignatura ON matricula.idAsignatura = asignatura.idAsignatura
	WHERE nota = (select max(nota) from matricula) AND idCurso = 2
		ORDER BY asignatura.nombre ASC;
*/
-- 12) Conocer número de alumnos totales, los becados y porcentaje de becados respecto al total






/*
SELECT count(alumno.idAlumno) AS alumnos, (SELECT count(alumno.idAlumno) FROM alumno WHERE beca = 'si') AS becados,
	round((SELECT count(alumno.idAlumno)
	FROM alumno WHERE beca = 'si')/count(alumno.idAlumno)*100, 2) AS "% becados"
	FROM alumno;
*/

-- 13) Conocer nota media de los becados y el curso en el que están. Ordenar resultado por nombre completo descendiente

SELECT curso, concat(alumno.nombre, ' ', apellido1, ' ', apellido2) AS Alumno, round(avg(matricula.nota),2) AS notaMedia
	FROM alumno 
		LEFT JOIN matricula ON (alumno.idAlumno = matricula.idAlumno) 
		LEFT JOIN asignatura ON (asignatura.idAsignatura = matricula.idAsignatura)
	WHERE beca = "si"
		GROUP BY Alumno
		ORDER BY curso ASC, Alumno ASC;
    
    -- 14) Queremos repartir un bonus a los 10 profesores con mejores medias en las asignaturas que imparten
SELECT profesor.idProfesor, concat(profesor.nombre, ' ', apellido1, ' ', apellido2) AS profesor, round(avg(nota),2) AS notaMedia
	FROM profesor 
		LEFT JOIN impartir ON (profesor.idProfesor = impartir.idProfesor)
		LEFT JOIN asignatura ON (impartir.idAsignatura = asignatura.idAsignatura)
		LEFT JOIN matricula ON (asignatura.idAsignatura = matricula.idAsignatura)
		GROUP BY profesor.idProfesor
		ORDER BY avg(nota) DESC
		LIMIT 10;

	-- 15) Obtener toda la información de asignaturas que contienen la palabla 'datos' o 'progra' en su nombre. Ordenar por curso y luego por nombre
SELECT *
FROM asignatura
WHERE nombre LIKE '%datos%' OR nombre LIKE '%progra%'
ORDER BY curso ASC, nombre ASC;

	-- 16) Obtener listado para enviar un comunicado oficial personalizado con el nombre a todas las personas de la universidad (alumnos y profesores)
(SELECT nombre, email FROM alumno)
UNION
(SELECT nombre, email FROM profesor);