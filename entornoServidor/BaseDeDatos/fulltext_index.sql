DROP DATABASE IF EXISTS viajes;
CREATE DATABASE viajes CHARACTER SET utf8mb4;
USE viajes;

CREATE TABLE lugares (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT NOT NULL
);

INSERT INTO lugares VALUES (1, 'París', 'Viaje a <strong>París</strong>, fascinado por la <strong>Torre Eiffel</strong> iluminada de noche y el museo del <strong>Louvre</strong> con la <strong>Mona Lisa</strong>.');

INSERT INTO lugares VALUES (2, 'Santorini', 'Pintoresco pueblo de <strong>Santorini</strong> con casas blancas y tejados azules, playas de arena volcánica. Cuenta con museos fascinantes como el del Louvre que muestran la rica historia de la isla y su cultura.');

INSERT INTO lugares VALUES (3, 'Gran Cañon', 'Impresionante <strong>Gran Cañón</strong> con paredes rocosas y espectaculares puestas de sol.');

INSERT INTO lugares VALUES (4, 'Machu Pichu', 'Ruinas antiguas de <strong>Machu Picchu</strong>, caminar por calles empedradas y admirar templos y terrazas.');

INSERT INTO lugares VALUES (5, 'Tokio', 'Contraste de tradición y modernidad en <strong>Tokio</strong>, con templos históricos y brillantes letreros de neón.');

EXPLAIN lugares;

/*
queremos buscar todas las filas que contengan la frase museo del Louvre. Si utilizamos la siguiente consulta no obtendremos ningún resultado, porque en la tabla lugares la fila que contiene esa frase tiene la palabra Louvre está encerrada entre etiquetas: museo del <strong>Louvre</strong>.
*/
SELECT *
	FROM lugares
	WHERE descripcion LIKE '%museo del Louvre%';

/*
Para evitar tener que recorrer toda la tabla durante la búsqueda vamos a crear índice de tipo FULLTEXT sobre la columna descripcion que es la que contiene el texto enriquecido con etiquetas.
*/
CREATE FULLTEXT INDEX idx_nombre ON lugares(descripcion);

SELECT *, MATCH(descripcion) AGAINST ('museo del Louvre')
	FROM lugares
	WHERE MATCH(descripcion) AGAINST ('museo del Louvre');