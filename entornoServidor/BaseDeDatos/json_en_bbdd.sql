DROP DATABASE IF EXISTS ejemplo_json;
CREATE DATABASE ejemplo_json CHARSET utf8mb4;
USE ejemplo_json;

CREATE TABLE tabla_json (
  documento JSON
);

INSERT INTO tabla_json VALUES('{"key1": "value1", "key2": "value2"}');
INSERT INTO tabla_json VALUES (JSON_OBJECT('key1', 1, 'key2', '2'));

SELECT * FROM tabla_json;

/* MariaDB no reconoce esta sintaxis:
SELECT documento->"$.key1" FROM tabla_json;
SELECT documento->"$.key2" FROM tabla_json;
*/
SELECT JSON_EXTRACT(documento, '$.key1') FROM tabla_json;
SELECT JSON_EXTRACT(documento, '$.key2') FROM tabla_json;