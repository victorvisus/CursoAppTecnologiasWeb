SELECT @@GLOBAL.secure_file_priv;

LOAD DATA LOCAL INFILE 'C:/AppDesarrollo/CursoAppTecnologiasWeb/entornoServidor/BaseDeDatos/00_examen/clientes.txt'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
LINES terminated by '\n'
ignore 1 ROWS;

DELETE FROM cliente WHERE id_cliente > 1004;

SELECT * FROM cliente;