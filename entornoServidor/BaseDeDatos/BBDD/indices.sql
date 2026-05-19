USE test;

CREATE TABLE cliente (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(15) NOT NULL,
  telefono VARCHAR(9) NOT NULL,
    UNIQUE (email)
);
ALTER TABLE cliente MODIFY email VARCHAR(100) NOT NULL;

CREATE TABLE pago (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  fecha_pago DATE NOT NULL,
  total DECIMAL(15,2) NOT NULL,

  anyo_pago INT AS (YEAR(fecha_pago)) STORED,
  INDEX idx_year_functional_index (anyo_pago)
);

-- RENOMBRAR EL INDICE, y cualquier otro campo
ALTER TABLE pago RENAME INDEX idx_year_functional_index TO idx_anyo_pago;

-- INSERTS
INSERT INTO cliente (nombre, email, telefono) VALUES ('Carlos Gómez', 'carlos@mail.com', '600111222');
INSERT INTO cliente (nombre, email, telefono) VALUES ('María Lledó', 'maria@mail.com', '611222333');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Andrés Peris', 'andres@mail.com', '622333444');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Lucía Méndez', 'lucia@mail.com', '633444555');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Jorge Martínez', 'jorge@mail.com', '644555666');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Marta Sancho', 'marta@mail.com', '655666777');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Raúl Blasco', 'raul@mail.com', '666777888');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Elena Beltrán', 'elena@mail.com', '677888999');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Pablo Núñez', 'pablo@mail.com', '688999000');
INSERT INTO cliente (nombre, email, telefono) VALUES ('Sonia Alcaide', 'sonia@mail.com', '699000111');

INSERT INTO pago (fecha_pago, total) VALUES ('2025-03-15', 1250.50);
INSERT INTO pago (fecha_pago, total) VALUES ('2025-06-20', 85.00);
INSERT INTO pago (fecha_pago, total) VALUES ('2026-01-10', 3400.25);
INSERT INTO pago (fecha_pago, total) VALUES ('2026-02-18', 450.00);
INSERT INTO pago (fecha_pago, total) VALUES ('2024-12-05', 120.75);
INSERT INTO pago (fecha_pago, total) VALUES ('2025-11-30', 2100.00);
INSERT INTO pago (fecha_pago, total) VALUES ('2026-04-02', 950.40);
INSERT INTO pago (fecha_pago, total) VALUES ('2023-08-14', 5000.00);
INSERT INTO pago (fecha_pago, total) VALUES ('2025-09-22', 15.99);
INSERT INTO pago (fecha_pago, total) VALUES ('2026-05-12', 1100.00);

SELECT * FROM cliente;
SELECT * FROM pago;