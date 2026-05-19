-- CREACIÓN DE LA BASE DE DATOS
DROP DATABASE IF EXISTS Banco;
CREATE DATABASE Banco;
-- SELECCIONO LA BASE DE DATOS PARA TRABAJAR CON ELLA
USE Banco;

-- CREACIÓN DE TABLAS
-- Para evitar posibles problemas, si existen, elimino las trablas
DROP TABLE IF EXISTS sucursal;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS cuenta;
DROP TABLE IF EXISTS transaccion;

-- Ahora creamos las tablas
CREATE TABLE sucursal (
	id_sucursal INT NOT NULL AUTO_INCREMENT UNIQUE,
	direccion VARCHAR(100) NOT NULL,
	cod_postal CHAR(5) NOT NULL,
	municipio VARCHAR(50) NOT NULL,
	provincia VARCHAR(50) NOT NULL,
	apellidos_director VARCHAR(60) NOT NULL UNIQUE,
	PRIMARY KEY(id_sucursal)
);

CREATE TABLE cliente (
	id_cliente INT NOT NULL AUTO_INCREMENT UNIQUE,
	nif CHAR(9) NOT NULL UNIQUE,
	nombre VARCHAR(30) NOT NULL,
	apellido1 VARCHAR(30) NOT NULL,
	apellido2 VARCHAR(30) NOT NULL,
	PRIMARY KEY(id_cliente)
);

CREATE TABLE cuenta (
	id_cuenta INT NOT NULL AUTO_INCREMENT UNIQUE,
	pseudo_iban CHAR(5) NOT NULL UNIQUE,
	id_cliente INT NOT NULL,
	id_sucursal INT NOT NULL,
	PRIMARY KEY(id_cuenta),
	CONSTRAINT fk_id_cliente
		FOREIGN KEY(id_cliente) REFERENCES cliente(id_cliente)
		ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_id_sucursal
		FOREIGN KEY(id_sucursal) REFERENCES sucursal(id_sucursal)
		ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE transaccion (
	id_transaccion INT NOT NULL AUTO_INCREMENT UNIQUE,
	cta_origen INT NOT NULL,
	cta_destino INT NOT NULL,
	cantidad FLOAT NOT NULL,
	fecha DATETIME NOT NULL,
	PRIMARY KEY(id_transaccion),
	CONSTRAINT fk_cta_origen
		FOREIGN KEY(cta_origen) REFERENCES cuenta(id_cuenta)
		ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_cta_destino
		FOREIGN KEY(cta_destino) REFERENCES cuenta(id_cuenta)
		ON UPDATE CASCADE ON DELETE CASCADE
);