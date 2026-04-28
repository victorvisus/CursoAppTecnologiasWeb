CREATE TABLE cliente(
	id_cliente INT AUTO_INCREMENT,
	apellido VARCHAR(30) NOT NULL,
	telefono VARCHAR(12) NOT NULL,
	domicilio_legal VARCHAR(100),
	PRIMARY KEY (id_cliente)
	);

CREATE TABLE presentador(
	id_presentador INT AUTO_INCREMENT,
	dni VARCHAR(9) NOT NULL UNIQUE,
	apellido VARCHAR(30) NOT NULL,
	anyo_inicio YEAR NOT NULL,
	PRIMARY KEY (id_presentador)
	);
	
CREATE TABLE evento(
	id_evento INT NOT NULL,
	id_presentador INT NOT NULL,
	descripcion VARCHAR(200),
	precio_base FLOAT(10,2) NOT NULL,
	
	PRIMARY KEY (id_evento),
	CONSTRAINT fk_id_presentador
		FOREIGN KEY (id_presentador)
		REFERENCES presentador(id_presentador)
);
ALTER TABLE evento MODIFY COLUMN id_evento INT NOT NULL AUTO_INCREMENT;

CREATE TABLE contrato(
	id_cliente INT NOT NULL,
	id_evento INT NOT NULL,
	hora DATETIME NOT NULL,
	lugar VARCHAR(100) NOT NULL,
	forma_pago VARCHAR(30) NOT NULL,
	precio_final FLOAT(10,2),
	PRIMARY KEY (id_cliente, id_evento),
	
	CONSTRAINT fk_id_cliente
		FOREIGN KEY (id_cliente)
		REFERENCES cliente(id_cliente),
		
	CONSTRAINT fk_id_evento
		FOREIGN KEY (id_evento)
		REFERENCES evento(id_evento)
);

CREATE TABLE disfraz(
	id_disfraz INT AUTO_INCREMENT,
	personaje VARCHAR(30) NOT NULL UNIQUE,
	precio_alquiler FLOAT(10,2) NOT NULL,
	PRIMARY KEY (id_disfraz)
);

CREATE TABLE animador(
	id_animador INT AUTO_INCREMENT,
	id_disfraz INT NOT NULL,
	dni VARCHAR(9) NOT NULL UNIQUE,
	apellido VARCHAR(30),
	PRIMARY KEY (id_animador),
	
	CONSTRAINT fk_id_disfraz
		FOREIGN KEY (id_disfraz)
		REFERENCES disfraz(id_disfraz)
);

CREATE TABLE participa(
	id_evento INT NOT NULL,
	id_animador INT NOT NULL,
	PRIMARY KEY (id_evento,id_animador),
	
	CONSTRAINT fk_id_evento
		FOREIGN KEY (id_evento)
		REFERENCES evento(id_evento)
		ON DELETE CASCADE 
		ON UPDATE CASCADE,
		
	CONSTRAINT fk_id_animador
		FOREIGN KEY (id_animador)
		REFERENCES animador(id_animador)
		ON DELETE CASCADE 
		ON UPDATE CASCADE
);

-- 1. Tablas Maestras (Sin dependencias)
INSERT INTO cliente (apellido, telefono, domicilio_legal) VALUES 
('García', '600111222', 'Calle Mayor 10, Zaragoza'),
('Rodríguez', '622333444', 'Av. Libertad 5, Madrid'),
('Martínez', '655666777', 'Plaza España 1, Barcelona');

INSERT INTO presentador (dni, apellido, anyo_inicio) VALUES 
('12345678A', 'Vázquez', 2015),
('87654321B', 'Igartiburu', 2000),
('11223344C', 'Sobera', 2010);

INSERT INTO disfraz (personaje, precio_alquiler) VALUES 
('Spider-Man', 45.50),
('Elsa (Frozen)', 50.00),
('Dinosaurio T-Rex', 75.00),
('Pirata', 30.00);

-- 2. Tablas de Segundo Nivel (Dependen de las maestras)
INSERT INTO evento (id_presentador, descripcion, precio_base) VALUES 
(22, 'Gala Benéfica Infantil', 500.00),
(23, 'Fiesta de Fin de Año', 1200.00),
(22, 'Cumpleaños Temático Premium', 350.00);

INSERT INTO animador (id_disfraz, dni, apellido) VALUES 
(51, '11111111X', 'Pérez'),
(53, '22222222Y', 'Gómez'),
(54, '33333333Z', 'Ruiz');

-- 3. Tablas de Tercer Nivel / Relaciones (Dependen de las anteriores)
-- Tabla CONTRATO (Une cliente y evento)
INSERT INTO contrato (id_cliente, id_evento, hora, lugar, forma_pago, precio_final) VALUES 
(51, 57, '2026-06-15 18:00:00', 'Hotel Central', 'Transferencia', 550.00),
(52, 59, '2026-12-31 23:00:00', 'Salón Real', 'Tarjeta', 1350.00),
(53, 58, '2026-07-20 17:00:00', 'Parque de Atracciones', 'Efectivo', 400.00);

-- Tabla PARTICIPA (Une evento y animador)
INSERT INTO participa (id_evento, id_animador) VALUES 
(57, 51), -- En la Gala Benéfica participa el animador 1 (Spider-Man)
(57, 52), -- En la Gala Benéfica participa también el animador 2 (Elsa)
(58, 53), -- En la Fiesta de Fin de Año participa el animador 3 (Dinosaurio)
(59, 51); -- En el Cumpleaños vuelve a participar el animador 1


-- 1. Tablas de relación (N:M) y de último nivel
-- DELETE FROM participa;
-- DELETE FROM contrato;

-- 2. Tablas que dependen de tablas maestras
-- DELETE FROM animador;
-- DELETE FROM evento;

-- 3. Tablas maestras (las que no tienen FKs)
-- DELETE FROM cliente;
-- DELETE FROM presentador;
-- DELETE FROM disfraz;