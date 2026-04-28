-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS gestion_citas;
USE gestion_citas;

-- 1. Crear tabla CLIENTE
CREATE TABLE CLIENTE(
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    mail VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    nif VARCHAR(20)  NOT NULL UNIQUE
);

-- 2. Crear tabla SERVICIO
CREATE TABLE SERVICIO (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    categoria VARCHAR(50),
    precio DECIMAL(10,2) NOT NULL,
    duracion INT NOT NULL -- Duración en minutos
);

-- 3. Crear tabla CITA
-- Usamos id_cliente y fecha_hora como clave primaria compuesta 
CREATE TABLE CITA (
    id_cliente INT NOT NULL,
    fecha_hora DATETIME NOT NULL,
    observaciones TEXT,
    estado VARCHAR(20) NOT NULL,
    importe DECIMAL(10,2),
    CONSTRAINT PK_CITA PRIMARY KEY (id_cliente, fecha_hora),
    CONSTRAINT FK_CITA_CLIENTE FOREIGN KEY (id_cliente) 
        REFERENCES CLIENTE(id_cliente) ON DELETE CASCADE
);

-- 4. Crear tabla CITA_SERVICIO
-- Relaciona la clave compuesta de CITA con SERVICIO 
CREATE TABLE CITA_SERVICIO (
    id_cliente INT NOT NULL,
    fecha_hora DATETIME NOT NULL,
    id_servicio INT NOT NULL,
    CONSTRAINT PK_CITA_SERVICIO PRIMARY KEY (id_cliente, fecha_hora, id_servicio),
    -- Referencia a la clave compuesta de CITA
    CONSTRAINT FK_CS_CITA FOREIGN KEY (id_cliente, fecha_hora) 
        REFERENCES CITA(id_cliente, fecha_hora) ON DELETE CASCADE,
    -- Referencia a SERVICIO
    CONSTRAINT FK_CS_SERVICIO FOREIGN KEY (id_servicio) 
        REFERENCES SERVICIO(id_servicio) ON DELETE CASCADE
);


-- 1. Insertar Clientes
INSERT INTO CLIENTE (nombre, apellidos, telefono, mail, direccion, nif) VALUES 
('Adrian', 'García Pérez', '600111222', 'adrian.g@mail.com', 'Calle Mayor 5, Zaragoza', '12345678A'),
('Beatriz', 'López Ruiz', '611222333', 'b.lopez@mail.com', 'Av. Independencia 10, Madrid', '87654321B'),
('Carlos', 'Sánchez Homs', '622333444', 'carlos.s@mail.com', 'Plaza España 2, Barcelona', '11223344C');

-- 2. Insertar Servicios
INSERT INTO SERVICIO (nombre, descripcion, activo, categoria, precio, duracion) VALUES 
('Corte de Pelo', 'Corte y lavado básico', 1, 'Peluquería', 25.00, 45),
('Manicura', 'Tratamiento completo de uñas', 1, 'Estética', 15.50, 30),
('Masaje Relajante', 'Masaje de espalda 30 min', 1, 'Bienestar', 40.00, 30),
('Limpieza Facial', 'Tratamiento hidratante profundo', 1, 'Estética', 50.00, 60);

-- 3. Insertar Citas (Clave Compuesta)
-- Nota: El id_cliente debe coincidir con los que se generaron en el paso 1 (normalmente 1, 2 y 3).
INSERT INTO CITA (id_cliente, fecha_hora, observaciones, estado, importe) VALUES 
(1, '2026-05-10 10:00:00', 'Primera visita', 'Pendiente', 25.00),
(1, '2026-05-20 17:30:00', 'Traer justificante', 'Confirmada', 65.50),
(2, '2026-05-12 11:00:00', 'Alergia a ciertos geles', 'Pendiente', 15.50),
(3, '2026-05-15 09:00:00', NULL, 'Finalizada', 50.00);

-- 4. Insertar en CITA_SERVICIO (La Intermedia)
-- Aquí es donde vinculamos los servicios específicos a cada cita usando la clave compuesta (id_cliente + fecha_hora).
INSERT INTO CITA_SERVICIO (id_cliente, fecha_hora, id_servicio) VALUES 
-- En la cita del cliente 1 el día 10 de mayo:
(1, '2026-05-10 10:00:00', 1); -- Corte de pelo

-- En la cita del cliente 1 el día 20 de mayo (Cita con dos servicios):
INSERT INTO CITA_SERVICIO (id_cliente, fecha_hora, id_servicio) VALUES 
(1, '2026-05-20 17:30:00', 1), -- Corte de pelo
(1, '2026-05-20 17:30:00', 3); -- Masaje relajante

-- En la cita del cliente 2:
INSERT INTO CITA_SERVICIO (id_cliente, fecha_hora, id_servicio) VALUES 
(2, '2026-05-12 11:00:00', 2); -- Manicura

-- En la cita del cliente 3:
INSERT INTO CITA_SERVICIO (id_cliente, fecha_hora, id_servicio) VALUES 
(3, '2026-05-15 09:00:00', 4); -- Limpieza facial

-- ¿Cómo verificar que los datos están bien relacionados?
-- Para ver el "nombre del cliente" junto al "nombre del servicio" que ha reservado, usa este JOIN. Te servirá para comprobar que la clave compuesta está funcionando perfectamente:
SELECT 
    c.nombre AS Cliente,
    ci.fecha_hora AS 'Fecha Cita',
    s.nombre AS Servicio,
    s.precio AS Precio
FROM CITA_SERVICIO cs
JOIN CLIENTE c ON cs.id_cliente = c.id_cliente
JOIN CITA ci ON cs.id_cliente = ci.id_cliente AND cs.fecha_hora = ci.fecha_hora
JOIN SERVICIO s ON cs.id_servicio = s.id_servicio
ORDER BY ci.fecha_hora ASC;

SELECT * FROM gestion_citas.cliente;