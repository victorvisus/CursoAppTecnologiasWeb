USE test;

-- TRIGGERS --------

-- Paso 3
DELIMITER $$
DROP TRIGGER IF EXISTS trigger_check_nota_before_insert$$

CREATE TRIGGER trigger_check_nota_before_insert
BEFORE INSERT
ON alumno FOR EACH ROW
BEGIN
  IF NEW.nota < 0 THEN
    set NEW.nota = 0;
  ELSEIF NEW.nota > 10 THEN
    set NEW.nota = 10;
  END IF;
END
$$

DELIMITER $$
DROP TRIGGER IF EXISTS trigger_check_nota_before_update$$
CREATE TRIGGER trigger_check_nota_before_update
BEFORE UPDATE
ON alumno FOR EACH ROW
BEGIN
  IF NEW.nota < 0 THEN
    set NEW.nota = 0;
  ELSEIF NEW.nota > 10 THEN
    set NEW.nota = 10;
  END IF;
END
$$

-- Paso 4
DELIMITER ;
INSERT INTO alumno VALUES (10, 'Pepe', 'López', 'López', -1);
INSERT INTO alumno VALUES (20, 'María', 'Sánchez', 'Sánchez', 11);
INSERT INTO alumno VALUES (30, 'Juan', 'Pérez', 'Pérez', 8.5);

-- Paso 5
SELECT * FROM alumno;

-- Paso 6
UPDATE alumno SET nota = -4 WHERE id = 10;
UPDATE alumno SET nota = 14 WHERE id = 20;
UPDATE alumno SET nota = 9.5 WHERE id = 30;

-- Paso 7
SELECT * FROM alumno;