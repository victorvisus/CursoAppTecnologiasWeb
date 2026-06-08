ESCENARIOS POSIBLES PARA LA GESTIÓN CON DOCKER DE UN SERVICIO DE SGBD CON MARIADB:
Como acceder via red a una base de datos mariadb en estos contextos:

1. Con usuario y contraseña guardados en un archivo seguro.
2. Con PKI.
3. Habiendo dockerizado el SGBD accediendo al contenedor en localhost
4. Habiendo dockerizado el SGBD accediendo al contenedor por IP en red local.

DESARROLLAMOS EL ESCENARIO 3:

- Paso 1: Crear la estructura de directorios en tu máquina hostPara trabajar de forma ordenada, crea una carpeta en tu sistema donde guardarás las configuraciones de MariaDB y los datos para que no se borren al apagar el contenedor.

  mkdir -p ~/mariadb-docker/config ~/mariadb-docker/data

- Paso 2: Crear el archivo de configuración personalizado para MariaDBVamos a crear un archivo de configuración en tu máquina host. Este archivo será inyectado dentro del contenedor.Crea y edita el archivo:

  nano ~/mariadb-docker/config/custom.cnf

  Pega la siguiente configuración básica y guarda el archivo: ini[mysqld]

  Permitir conexiones desde cualquier IP (Docker gestionará el bloqueo)
  bind-address = 0.0.0.0

  Configuración de juego de caracteres recomendada
  character-set-server = utf8mb4
  collation-server = utf8mb4_unicode_ci

- Paso 3: Crear y arrancar el contenedor de DockerEjecuta el siguiente comando para levantar el contenedor. Explicamos cada parámetro a continuación:
  docker run --name mi-mariadb-local
  -p 127.0.0.1:3306:3306
  -v ~/mariadb-docker/data:/var/lib/mysql
  -v ~/mariadb-docker/config/custom.cnf:/etc/mysql/conf.d/custom.cnf:ro
  -e MARIADB_ROOT_PASSWORD=MiClaveSuperSegura123
  -d mariadb:latest

  ¿Qué hace cada línea?
  -p 127.0.0.1:3306:3306: El punto clave. Mapea el puerto 3306 del contenedor al puerto 3306 de tu máquina local, pero restringido estrictamente a 127.0.0.1. Nadie desde fuera de tu PC podrá intentar conectar.
  -v …:/var/lib/mysql: Persistencia de datos. Si borras el contenedor, tus bases de datos seguirán seguras en la carpeta local.
  -v …:/etc/mysql/conf.d/custom.cnf:ro: Monta el archivo de configuración que creamos en el Paso 2 en modo lectura (ro).
  -e MARIADB_ROOT_PASSWORD=…: Establece la contraseña del usuario administrador (root).
  -d mariadb:latest: Descarga la última imagen oficial de MariaDB y arranca en segundo plano.

- Paso 4: Verificar que el contenedor está corriendoComprueba el estado del contenedor para asegurarte de que no ha fallado al iniciar por problemas de configuración:docker ps

  Deberías ver el contenedor mi-mariadb-local en estado “Up” y mostrando el mapeo de puertos.

- Paso 5: Crear el archivo de acceso seguro en el cliente (Tu PC Host)Para no escribir la contraseña directamente en la terminal al conectar, creamos el archivo de credenciales del cliente en tu carpeta de usuario:Edita el archivo:

  nano ~/.my.cnf

  Añade la configuración de conexión apuntando a Docker:ini[client]
  host = 127.0.0.1
  port = 3306
  user = root
  password = MiClaveSuperSegura123

  Crucial: Protege este archivo para que nadie más en tu PC pueda leer tu contraseña:
  chmod 600 ~/.my.cnf

- Paso 6: Acceder a MariaDB desde el clienteAhora que todo está configurado, puedes entrar directamente a la base de datos sin escribir contraseñas ni IPs en el comando:
  mariadb

  (Si no tienes el cliente nativo instalado en tu host, puedes usar alternativamente mysql).
  Una vez dentro, verás el prompt de MariaDB listo para recibir tus consultas:
  sqlMariaDB [(none)]> SHOW DATABASES;

EN PARALELO A LO ANTERIOR LO DESEABLE PARA UN CONTENEDOR DE bbdd ES QUE TENGA PERSISTENCIA.
PODEMOS SEGUIR ESTE MANUAL:
https://josejuansanchez.org/bd/practica-06/index.html

# CONFIGURACIÓN PREVIA DE ARCHIVOS PARA USAR DOCKER-run

Antes de generar los archivos, debes crear la estructura de carpetas que servirá de base. Ejecuta este comando en tu terminal:

```bash
#HACERLO COMO USUARIO DE SO, NO ROOT:
mkdir -p ~/mariadb-docker/config ~/mariadb-docker/data
```

~/mariadb-docker/config: Albergará las reglas de comportamiento del servidor MariaDB.
~/mariadb-docker/data: Déjala completamente vacía. Docker la utilizará para inicializar los archivos del sistema de la base de datos (tablas, índices, etc.) en el primer arranque.

- Archivo 1: El archivo de configuración (custom.cnf)
  Este archivo modifica los parámetros internos de MariaDB. Debe existir físicamente para que Docker no lo confunda con una carpeta.Ruta de creación: ~/mariadb-docker/config/custom.cnfComando para crearlo y editarlo:

```bash
nano ~/config/custom.cnf
```

Contenido mínimo recomendado:

[mysqld]

Forzar a MariaDB a escuchar en todas las interfaces internas del contenedor
bind-address = 0.0.0.0

Configuración de idioma y emojis (Recomendada)
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

- Archivo 2: El archivo de variables de entorno (.env)Este archivo inyecta de forma segura los parámetros de inicialización del contenedor, incluyendo las contraseñas, ocultándolas de la terminal.

Ruta de creación: ~/mariadb-docker/.envComando para crearlo y editarlo:

```bash
nano ~/mariadb-docker/.env
```

Contenido obligatorio y recomendado:

#Contraseña obligatoria para el usuario administrador (root)
MARIADB_ROOT_PASSWORD=MiClaveSuperSegura2026!

#Opcional: Crea automáticamente una base de datos lista para usar
MARIADB_DATABASE=mi_base_datos

#Opcional: Crea un usuario común para no usar siempre ‘root’
MARIADB_USER=mi_usuario_web
MARIADB_PASSWORD=ClaveDeUsuario123!

Paso Crítico: Configuración de PermisosUna vez creados los archivos, debes asegurar el archivo .env para que otros usuarios del sistema operativo no puedan leer tus contraseñas en texto plano:

```bash
chmod 600 ~/mariadb-docker/.env
```

# RESUMEN VISUAL:

~/mariadb-docker/
├── .env <-- Archivo (Permisos 600)
├── config/
│ └── custom.cnf <-- Archivo con la configuración [mysqld]
└── data/ <-- Directorio vacío (Se llenará solo al arrancar)

Ahora el comando:

```bash
sudo docker run --name mariadb-docker -p 127.0.0.1:3306:3306 -v ~/mariadb-docker/data:/var/lib/mysql -v ~/mariadb-docker/config/custom.cnf:/etc/mysql/conf.d/custom.cnf:ro --env-file ~/mariadb-docker/.env -d mariadb:latest
```

Comentario adicional:
la notación :etc/… y el :ro que aparece al final qué significa aquí: ~/mariadb-…
En la notación de volúmenes de Docker (-v), los dos puntos : actúan como separadores de campos. El fragmento completo se divide en tres partes bien diferenciadas:

text[Ruta en tu PC Host] : [Ruta dentro del Contenedor] : [Opciones/Permisos]

Aquí tienes el significado exacto de cada elemento a partir del primer separador:

1. El fragmento :/etc/mysql/conf.d/custom.cnf (La ruta interna) Indica la ubicación exacta dentro del contenedor donde se proyectará tu archivo de texto./etc/mysql/conf.d/ es la carpeta oficial donde el servidor MariaDB (dentro del contenedor) busca automáticamente archivos de configuración adicionales al arrancar.Al colocar tu archivo ahí, MariaDB leerá tu bloque [mysqld] y aplicará los cambios (como el bind-address o el juego de caracteres) encima de su configuración por defecto.
2. El fragmento :ro al final (Modo de lectura)Es una opción de seguridad que significa Read-Only (Solo Lectura).Por defecto, Docker permite que los contenedores tengan permisos de escritura sobre los archivos compartidos del sistema host.Al añadir :ro al final, le pones un “candado” digital al archivo. El proceso de MariaDB dentro del contenedor podrá leer el archivo custom.cnf para configurarse, pero tendrá estrictamente prohibido modificarlo, alterarlo o borrarlo.Esto protege tu archivo original en la máquina host ante cualquier fallo de seguridad o bug dentro del contenedor.

Antes de intentar conectar, es una buena práctica confirmar que MariaDB ha creado las tablas del sistema en tu volumen persistente y está listo para recibir conexiones.

```bash
docker logs mariadb-docker
```

PARA VER LOS CONTENEDORES EN ACTIVO:

```bash
docker ps
```

salida:
CONTAINERID IMAGE COMMAND CREATED STATUS PORTS NAMES
55bc8f253d78 mariadb:latest “docker-entrypoint.s…” 7 minutes ago Up 7 minutes 127.0.0.1:3306->3306/tcp mi-mariadb-local

PARTE CLIENTE:
Crear el archivo de acceso seguro en tu cliente. Para no tener que escribir la contraseña de root expuesta en la terminal cada vez que te conectes, configuraremos las credenciales por defecto para tu comando local de MariaDB.Abre el archivo de configuración del cliente en tu carpeta personal:

```bash
nano ~/.my.cnf
```

contenido:
[client]
host = 127.0.0.1
port = 3306
user = root
password = TuContraseñaDelArchivoDotEnv

y luego:

```bash
chmod 600 ~/.my.cnf
```

Ahora que tu archivo de credenciales local coincide con las de Docker, realiza la conexión remota a través de la red localhost ejecutando simplemente:

```bash
mariadb
```

(si no está el cliente instalado, hay que hacerlo antes:

```bash
sudo apt install mariadb-client-core
```

)
