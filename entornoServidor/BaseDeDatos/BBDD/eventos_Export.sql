-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         12.2.2-MariaDB - MariaDB Server
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.17.0.7270
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para facultad
CREATE DATABASE IF NOT EXISTS `facultad` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `facultad`;

-- Volcando estructura para tabla facultad.alumno
CREATE TABLE IF NOT EXISTS `alumno` (
  `idAlumno` varchar(5) NOT NULL,
  `NIF` varchar(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido1` varchar(50) NOT NULL,
  `apellido2` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `codigoPostal` varchar(5) NOT NULL,
  `municipio` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `beca` varchar(2) NOT NULL,
  PRIMARY KEY (`idAlumno`),
  UNIQUE KEY `NIF` (`NIF`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para vista facultad.alumnos_suspensos
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `alumnos_suspensos` (
	`Nombre` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`Apellidos` VARCHAR(1) NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`nota` FLOAT NOT NULL,
	`Asignatura` VARCHAR(1) NULL COLLATE 'utf8mb4_uca1400_ai_ci'
);

-- Volcando estructura para tabla facultad.asignatura
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idCurso` varchar(5) NOT NULL,
  `idAsignatura` varchar(5) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `cuatrimestre` enum('1','2') DEFAULT NULL,
  `creditos` float unsigned NOT NULL,
  `caracter` enum('obligatoria','optativa') NOT NULL,
  `coordinador` varchar(5) NOT NULL,
  PRIMARY KEY (`idAsignatura`),
  UNIQUE KEY `nombre` (`nombre`),
  KEY `fk_idCurso` (`idCurso`),
  KEY `fk_coordinador` (`coordinador`),
  CONSTRAINT `fk_coordinador` FOREIGN KEY (`coordinador`) REFERENCES `profesor` (`idProfesor`),
  CONSTRAINT `fk_idCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para vista facultad.creditos_curso_view
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `creditos_curso_view` (
	`idCurso` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`Curso` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`caracter` ENUM('obligatoria','optativa') NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`Creditos` DOUBLE NULL
);

-- Volcando estructura para tabla facultad.curso
CREATE TABLE IF NOT EXISTS `curso` (
  `idCurso` varchar(5) NOT NULL,
  `nombreDescriptivo` varchar(10) NOT NULL,
  `nAsignaturas` int(3) NOT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla facultad.impartir
CREATE TABLE IF NOT EXISTS `impartir` (
  `idProfesor` varchar(5) NOT NULL,
  `idAsignatura` varchar(5) NOT NULL,
  KEY `fk_idProfesor` (`idProfesor`),
  KEY `fk_idAsignatura` (`idAsignatura`),
  CONSTRAINT `fk_idAsignatura` FOREIGN KEY (`idAsignatura`) REFERENCES `asignatura` (`idAsignatura`),
  CONSTRAINT `fk_idProfesor` FOREIGN KEY (`idProfesor`) REFERENCES `profesor` (`idProfesor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla facultad.matricula
CREATE TABLE IF NOT EXISTS `matricula` (
  `idAlumno` varchar(5) NOT NULL,
  `idAsignatura` varchar(5) NOT NULL,
  `nota` float NOT NULL,
  KEY `fk_idAlumno` (`idAlumno`),
  KEY `fk_idAsignatura` (`idAsignatura`),
  CONSTRAINT `fk_idAlumno` FOREIGN KEY (`idAlumno`) REFERENCES `alumno` (`idAlumno`),
  CONSTRAINT `fk_idAsignatura` FOREIGN KEY (`idAsignatura`) REFERENCES `asignatura` (`idAsignatura`),
  CONSTRAINT `CONSTRAINT_1` CHECK (`nota` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para vista facultad.media_alumnos_5y7
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `media_alumnos_5y7` (
	`idAlumno` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`Nombre` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`Apellidos` VARCHAR(1) NULL COLLATE 'utf8mb4_uca1400_ai_ci',
	`Media` DOUBLE(19,2) NULL
);

-- Volcando estructura para tabla facultad.profesor
CREATE TABLE IF NOT EXISTS `profesor` (
  `idProfesor` varchar(5) NOT NULL,
  `NIF` char(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido1` varchar(50) NOT NULL,
  `apellido2` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `codigoPostal` varchar(5) NOT NULL,
  `municipio` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `categoria` enum('Catedráticos de Universidad','Titulares Universidad','Catedráticos de Escuela Universitaria','Titulares de Escuela Universitaria','Eméritos','Contratados Doctores','Contratados Doctores Interinos','Asociados','Asociado Interino','Ayudantes Doctores','Otros Investigadores Doctores','PDI predoctoral') DEFAULT NULL,
  PRIMARY KEY (`idProfesor`),
  UNIQUE KEY `NIF` (`NIF`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla facultad.tlfcontactoprof
CREATE TABLE IF NOT EXISTS `tlfcontactoprof` (
  `idProfesor` varchar(5) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  KEY `fk_idProfesor` (`idProfesor`),
  CONSTRAINT `fk_idProfesor` FOREIGN KEY (`idProfesor`) REFERENCES `profesor` (`idProfesor`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `alumnos_suspensos`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `alumnos_suspensos` AS (
	SELECT a.nombre AS 'Nombre', CONCAT(a.apellido1, ' ', a.apellido2) AS 'Apellidos', m.nota, ag.nombre AS 'Asignatura'
		FROM alumno a
		JOIN matricula m ON a.idAlumno = m.idAlumno
		JOIN asignatura ag ON m.idAsignatura = ag.idAsignatura
		WHERE a.beca = 'si'
			AND m.nota < 5.00
		ORDER BY Apellidos) 
;

-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `creditos_curso_view`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `creditos_curso_view` AS (
	SELECT a.idCurso, c.nombreDescriptivo AS 'Curso', a.caracter, SUM(a.creditos) AS 'Creditos'
		FROM asignatura a
			INNER JOIN curso c ON c.idCurso = a.idCurso
		WHERE a.idCurso < 6
		GROUP BY a.idCurso, a.caracter) 
;

-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `media_alumnos_5y7`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `media_alumnos_5y7` AS (
	SELECT a.idAlumno, a.nombre AS 'Nombre', CONCAT(a.apellido1, ' ', a.apellido2) AS 'Apellidos', ROUND(AVG(m.nota), 2) AS 'Media'
		FROM alumno a
		JOIN matricula m ON a.idAlumno = m.idAlumno
		WHERE a.beca = 'si'
		GROUP BY a.idAlumno
		HAVING Media BETWEEN 5 AND 7
		ORDER BY Apellidos) 
;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
