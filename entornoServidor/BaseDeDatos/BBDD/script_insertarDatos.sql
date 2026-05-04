-- 1. Tablas Maestras (Clientes, Presentadores, Disfraces)
INSERT INTO cliente (apellido, telefono, domicilio_legal) VALUES 
('García', '600111222', 'Calle Mayor 10, Zaragoza'),
('Rodríguez', '622333444', 'Av. Libertad 5, Madrid'),
('Martínez', '655666777', 'Plaza España 1, Barcelona'),
('Sanz', '677888999', 'Polígono Plaza, Zaragoza'),
('Ibáñez', '633444555', 'Calle Alfonso 12, Zaragoza'),
('López', '611222333', 'Via Univérsitas 30, Zaragoza'),
('Fernández', '644555666', 'Calle Estébanez 4, Sevilla'),
('Pérez', '688999000', 'Paseo Sagasta 15, Zaragoza'),
('Jiménez', '699000111', 'Calle Goya 2, Madrid'),
('Ruiz', '612345678', 'Av. Valencia 40, Zaragoza'),
('Alonso', '623456789', 'Calle Coso 100, Zaragoza'),
('Gómez', '634567890', 'Plaza del Pilar 5, Zaragoza'),
('Díaz', '645678901', 'Calle Rioja 12, Logroño'),
('Álvarez', '656789012', 'Calle San Miguel 8, Zaragoza'),
('Moreno', '667890123', 'Calle Delicias 55, Zaragoza');

INSERT INTO presentador (dni, apellido, anyo_inicio) VALUES 
('12345678A', 'Vázquez', 2015),
('87654321B', 'Igartiburu', 2000),
('11223344C', 'Sobera', 2010),
('55667788D', 'Motta', 2018),
('99887766E', 'Broncano', 2012),
('22334455F', 'Prats', 1995),
('33445566G', 'Castelo', 2014),
('44556677H', 'Conde', 2005),
('55667799I', 'Motos', 2006),
('66778800J', 'Buenafuente', 1998),
('77889911K', 'Gabilondo', 1980),
('88990022L', 'Piqueras', 1990),
('99001133M', 'Vallés', 2002),
('10111214N', 'Otero', 1992),
('20212225O', 'Barceló', 2008);

INSERT INTO disfraz (personaje, precio_alquiler) VALUES 
('Spider-Man', 45.50), ('Elsa (Frozen)', 50.00), ('T-Rex', 75.00), ('Pirata', 30.00),
('Batman', 60.00), ('Sonic', 40.00), ('Mickey Mouse', 35.00), ('Iron Man', 85.00),
('Pikachu', 42.00), ('Cenicienta', 48.00), ('Capitán América', 55.00), ('Joker', 65.00),
('Harry Potter', 38.00), ('Buzz Lightyear', 70.00), ('Darth Vader', 90.00);

-- 2. Tablas Intermedias (Eventos y Animadores)
INSERT INTO evento (id_presentador, descripcion, precio_base) VALUES 
(1, 'Gala Benéfica Infantil', 500.00), (2, 'Fiesta Fin de Año', 1200.00), (3, 'Cumpleaños Premium', 350.00),
(4, 'Late Night Corporativo', 1500.00), (5, 'Monólogo Bienvenida', 800.00), (6, 'Aniversario Empresa', 950.00),
(7, 'Feria del Libro', 400.00), (8, 'Boda Temática', 1100.00), (9, 'Presentación Producto', 2000.00),
(10, 'Festival de Verano', 3000.00), (11, 'Conferencia Prensa', 600.00), (12, 'Entrega Premios', 1800.00),
(13, 'Comunión Especial', 450.00), (14, 'Fiesta de Barrio', 250.00), (15, 'Inauguración Local', 700.00);

INSERT INTO animador (id_disfraz, dni, apellido) VALUES 
(1, '11111111X', 'Pérez'), (2, '22222222Y', 'Gómez'), (3, '33333333Z', 'Ruiz'),
(4, '44444444A', 'Cano'), (5, '55555555B', 'Torres'), (6, '66666666C', 'Vila'),
(7, '77777777D', 'Sosa'), (8, '88888888E', 'Marín'), (9, '99999999F', 'Blanco'),
(10, '10101010G', 'Navarro'), (11, '20202020H', 'Domínguez'), (12, '30303030I', 'Ramos'),
(13, '40404040J', 'Gil'), (14, '50505050K', 'Serrano'), (15, '60606060L', 'Morales');

-- 3. Tablas de Relación (Contratos y Participaciones)
INSERT INTO contrato (id_cliente, id_evento, hora, lugar, forma_pago, precio_final) VALUES 
(1, 1, '2026-06-15 18:00:00', 'Hotel Central', 'Transferencia', 550.00),
(2, 2, '2026-12-31 23:00:00', 'Salón Real', 'Tarjeta', 1350.00),
(3, 3, '2026-07-20 17:00:00', 'Parque Atracciones', 'Efectivo', 400.00),
(4, 4, '2026-05-20 20:00:00', 'Palacio Congresos', 'Transferencia', 1800.00),
(5, 5, '2026-06-05 17:30:00', 'Centro Cívico', 'Efectivo', 800.00),
(6, 6, '2026-09-12 10:00:00', 'Auditorio ZGZ', 'Transferencia', 1100.00),
(7, 7, '2026-04-23 11:00:00', 'Plaza Aragón', 'Tarjeta', 450.00),
(8, 8, '2026-10-05 13:00:00', 'Finca Alquería', 'Transferencia', 1200.00),
(9, 9, '2026-08-15 19:00:00', 'Cámara Comercio', 'Tarjeta', 2100.00),
(10, 10, '2026-07-01 22:00:00', 'Recinto Ferial', 'Transferencia', 3500.00),
(11, 11, '2026-03-10 09:00:00', 'Sede Social', 'Efectivo', 600.00),
(12, 12, '2026-11-20 21:00:00', 'Teatro Principal', 'Transferencia', 2000.00),
(13, 13, '2026-05-30 16:00:00', 'Restaurante El Faro', 'Efectivo', 500.00),
(14, 14, '2026-08-20 18:00:00', 'Plaza Mayor', 'Efectivo', 250.00),
(15, 15, '2026-02-14 20:00:00', 'Tienda Centro', 'Tarjeta', 750.00);

INSERT INTO participa (id_evento, id_animador) VALUES 
(1, 1), (1, 2), (2, 3), (3, 1), (4, 5), (4, 8), (5, 6), (6, 4), (6, 7), (7, 13), 
(8, 10), (8, 11), (9, 12), (10, 15), (10, 14), (10, 5), (11, 9), (12, 12), (13, 2), (14, 4);


-- 1. Insertamos 5 nuevos eventos (usando IDs de presentadores del 1 al 5)
INSERT INTO evento (id_presentador, descripcion, precio_base) VALUES 
(1, 'Taller de Magia y Hechicería', 420.00),
(3, 'Escape Room Exterior: El Tesoro', 650.00),
(5, 'Show de Talentos Corporativo', 1100.00),
(2, 'Fiesta Ibicenca Veraniega', 850.00),
(4, 'Cuentacuentos Teatralizado', 300.00);

-- 2. Asociamos estos eventos (IDs del 16 al 20) con animadores en 'participa'
-- Usamos animadores variados (IDs del 1 al 10) para las relaciones
INSERT INTO participa (id_evento, id_animador) VALUES 
(16, 13), -- Taller de Magia con el animador de Harry Potter
(17, 4),  -- Escape Room con el animador Pirata
(18, 12), -- Show de Talentos con el animador Joker
(19, 7),  -- Fiesta Ibicenca con el animador Mickey (por el ambiente familiar)
(20, 10), -- Cuentacuentos con el animador de Cenicienta
(18, 5);  -- El Show de Talentos también cuenta con Batman como refuerzo