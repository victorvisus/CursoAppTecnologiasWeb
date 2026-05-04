-- CREACIÓN DE LA BASE DE DATOS
	-- Eliminamos base de datos 'Facultad' si existe
DROP DATABASE IF EXISTS Facultad;
	-- Creamos base de datos 'Facultad'
CREATE DATABASE Facultad;
	-- Designamos 'Facultad' como base de datos actual, a la que se hará referencia en el resto del código
USE Facultad;


-- CREACIÓN DE LAS TABLAS
	/* Borramos las tablas si existen. 
    Esto no es totalmente necesario ya que anteriormente se eliminó y creó de nuevo la base de datos. 
    Por lo tanto, las tablas también quedaron eliminadas*/
DROP TABLE IF EXISTS curso;
DROP TABLE IF EXISTS profesor;
DROP TABLE IF EXISTS tlfContactoProf;
DROP TABLE IF EXISTS asignatura;
DROP TABLE IF EXISTS alumno;
DROP TABLE IF EXISTS matricula;
DROP TABLE IF EXISTS impartir;

-- Creación de tablas
CREATE TABLE curso(
	idCurso VARCHAR(5),
	nombreDescriptivo VARCHAR(10) NOT NULL,
	nAsignaturas INT(3) NOT NULL,
	PRIMARY KEY(idCurso)
);

CREATE TABLE profesor(
	idProfesor VARCHAR(5),
	NIF CHAR(9) UNIQUE NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	apellido1 VARCHAR(50) NOT NULL,
	apellido2 VARCHAR(50),
	email VARCHAR(50) UNIQUE NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	codigoPostal VARCHAR(5) NOT NULL,
	municipio VARCHAR(50) NOT NULL,
	provincia VARCHAR(50) NOT NULL,
	categoria ENUM('Catedráticos de Universidad', 'Titulares Universidad', 'Catedráticos de Escuela Universitaria',
	'Titulares de Escuela Universitaria', 'Eméritos', 'Contratados Doctores', 'Contratados Doctores Interinos',
	'Asociados', 'Asociado Interino', 'Ayudantes Doctores', 'Otros Investigadores Doctores', 'PDI predoctoral'),
	PRIMARY KEY(idProfesor)
);

CREATE TABLE tlfcontactoprof(
	idProfesor VARCHAR(5) NOT NULL,
	telefono VARCHAR(12) NOT NULL,
	CONSTRAINT fk_idProfesor
		FOREIGN KEY(idProfesor) REFERENCES profesor(idProfesor) 
		ON DELETE CASCADE -- Eliminando un profesor se eliminarán automáticamente sus teléfonos de contacto
);

CREATE TABLE asignatura(
	idCurso VARCHAR(5) NOT NULL,
	idAsignatura VARCHAR(5) NOT NULL,
	nombre VARCHAR(150) unique,
	cuatrimestre ENUM('1', '2'),
	creditos FLOAT UNSIGNED NOT NULL,
	caracter ENUM('obligatoria', 'optativa') NOT NULL,
	coordinador VARCHAR(5) NOT NULL,
	PRIMARY KEY(idAsignatura),
	CONSTRAINT fk_idCurso
		FOREIGN KEY(idCurso) REFERENCES curso(idCurso),
	CONSTRAINT fk_coordinador
		FOREIGN KEY(coordinador) REFERENCES profesor(idProfesor)
);

CREATE TABLE alumno(
	idAlumno VARCHAR(5) NOT NULL,
	NIF VARCHAR(9) UNIQUE NOT NULL, -- NIF es una cadena de caracteres de longitud fija de 9 y un valor único
	nombre VARCHAR(50) NOT NULL,
	apellido1 VARCHAR(50) NOT NULL,
	apellido2 VARCHAR(50),
	email VARCHAR(50) UNIQUE NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	codigoPostal VARCHAR(5) NOT NULL,
	municipio VARCHAR(50) NOT NULL,
	provincia VARCHAR(50) NOT NULL,
	PRIMARY KEY(idAlumno)
);
    
CREATE TABLE matricula(
	idAlumno VARCHAR(5) NOT NULL,
	idAsignatura VARCHAR(5) NOT NULL,
	nota FLOAT NOT NULL,
	CONSTRAINT fk_idAlumno
		FOREIGN KEY(idAlumno) REFERENCES alumno(idAlumno),
	CONSTRAINT fk_idAsignatura
		FOREIGN KEY(idAsignatura) REFERENCES asignatura(idAsignatura),
	CHECK (nota > 0)
);

CREATE TABLE impartir(
	idProfesor VARCHAR(5) NOT NULL,
	idAsignatura VARCHAR(5) NOT NULL,
	CONSTRAINT fk_idProfesor
		FOREIGN KEY(idProfesor) REFERENCES profesor(idProfesor),
	CONSTRAINT fk_idAsignatura
		FOREIGN KEY(idAsignatura) REFERENCES asignatura(idAsignatura)
);

-- Olvidé incluir el campo beca en alumno. Lo incluiremos con alter table
ALTER TABLE alumno ADD beca VARCHAR(2) NOT NULL;