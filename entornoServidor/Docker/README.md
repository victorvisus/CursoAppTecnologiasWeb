# Contenedor Docker con MariaDB

Este proyecto configura un contenedor Docker con MariaDB listo para usar en entorno local.

## Requisitos

- Docker instalado
- Docker Compose instalado

## Estructura de directorios

```
.
├── docker-compose.yml      # Configuración de Docker Compose
├── .env                    # Variables de entorno
├── config/
│   └── custom.cnf         # Configuración personalizada de MariaDB
├── data/                  # Datos persistentes (se crea automáticamente)
└── README.md              # Este archivo
```

## Uso

### 1. Iniciar el contenedor

```bash
docker-compose up -d
```

### 2. Verificar que el contenedor está corriendo

```bash
docker-compose ps
```

O alternativamente:

```bash
docker ps
```

### ### 2.1 Ver contenedores

```bash
docker ps -a
```

### 3. Acceder a MariaDB desde la terminal

#### Opción A: Usando docker exec

```bash
docker exec -it mariadb-docker mariadb -u root -p
```

#### Opción B: Usando el cliente MariaDB/MySQL instalado localmente

```bash
mariadb -h 127.0.0.1 -u root -p
```

Ingresa la contraseña: `MiClaveSuperSegura123` (o la definida en `.env`)

### 4. Ver logs del contenedor

```bash
docker-compose logs -f mariadb
```

### 5. Detener el contenedor

```bash
docker-compose down
```

⚠️ **Nota**: Los datos persistidos en la carpeta `data/` NO se eliminarán.

### 6. Eliminar todo incluyendo los datos

```bash
docker-compose down -v
```

## Configuración

Edita el archivo `.env` para cambiar:

- `MARIADB_ROOT_PASSWORD`: Contraseña del usuario root
- `MARIADB_USER`: Nombre del usuario adicional
- `MARIADB_PASSWORD`: Contraseña del usuario adicional
- `MARIADB_DATABASE`: Nombre de la base de datos por defecto

**Nota**: Si cambias las credenciales, debes reconstruir el contenedor:

```bash
docker-compose down
docker-compose up -d
```

## Persistencia de datos

Los datos de la base de datos se guardan automáticamente en la carpeta `data/` de tu máquina host. Esto significa que:

- Si eliminas el contenedor, los datos se conservan
- Si reinicia la máquina, los datos persisten
- Puedes hacer copias de seguridad fácilmente

## Puertos

- **Puerto interno**: 3306 (dentro del contenedor)
- **Puerto externo**: 3306 (solo accesible en 127.0.0.1)

La configuración restringe el acceso al contenedor solo a localhost (127.0.0.1) por seguridad.

## Ejemplos de uso

### Crear una base de datos

```sql
CREATE DATABASE mitabledatos;
USE mitabledatos;
```

### Crear una tabla de ejemplo

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@example.com');
SELECT * FROM usuarios;
```

### Ver estado del contenedor

```bash
docker inspect mi-mariadb-local
```

## Solución de problemas

### El contenedor no inicia

```bash
docker-compose logs mariadb
```

### La contraseña no funciona

Asegúrate de haber editado el archivo `.env` antes de iniciar el contenedor.

### Puerto 3306 ya está en uso

El puerto 3306 de tu máquina ya está en uso por otra aplicación. Edita `docker-compose.yml` y cambia:

```yaml
ports:
  - '127.0.0.1:3307:3306' # Usa puerto 3307 en lugar de 3306
```

## Referencias

- [Documentación oficial de MariaDB en Docker](https://hub.docker.com/_/mariadb)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## Comandos útiles:

Ver estado:

```bash
docker-compose ps
```

Acceder a MariaDB:

```bash
docker exec -it mi-mariadb-local mariadb -u root -p
```

Ver logs:

```bash
docker-compose logs -f mariadb
```

Detener:

```bash
docker-compose down
```

## Credenciales predeterminadas:

Usuario: root
Contraseña: MiClaveSuperSegura123

Los datos se guardan automáticamente en la carpeta `data/` para persistencia.
