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


-- 1. Tablas de relación (N:M) y de último nivel
DELETE FROM participa;
DELETE FROM contrato;

-- 2. Tablas que dependen de tablas maestras
DELETE FROM animador;
DELETE FROM evento;

-- 3. Tablas maestras (las que no tienen FKs)
DELETE FROM cliente;
DELETE FROM presentador;
DELETE FROM disfraz;

ALTER TABLE animador AUTO_INCREMENT = 1;
ALTER TABLE cliente AUTO_INCREMENT = 1;
ALTER TABLE contrato AUTO_INCREMENT = 1;
ALTER TABLE disfraz AUTO_INCREMENT = 1;
ALTER TABLE evento AUTO_INCREMENT = 1;
ALTER TABLE presentador AUTO_INCREMENT = 1;