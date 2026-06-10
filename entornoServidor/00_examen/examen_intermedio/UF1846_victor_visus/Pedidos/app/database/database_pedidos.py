import os
from typing import Annotated

import pymysql
from dotenv import load_dotenv
from fastapi import Depends
from sqlmodel import Session, SQLModel, create_engine

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# ============================================================================
# CONFIGURACIÓN DE LA BASE DE DATOS (Estilo Clase)
# ============================================================================

USER = os.getenv("USER_DB", "root")
PASSWORD = os.getenv("PASSWORD_DB", "")
HOST = os.getenv("HOST_DB", "localhost")
PORT: int = int(os.getenv("PORT", "3306"))
NAME_DB = os.getenv("NAME_DB", "gestión_pedido")

# Construir URL de conexión a MySQL usando el driver pymysql
DATABASE_URL = f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}:{PORT}/{NAME_DB}"
engine = create_engine(DATABASE_URL)

# ============================================================================
# INICIALIZACIÓN (Llamada desde el main.py)
# ============================================================================


def inicializar_base_de_datos():
    # PASO 1: Conectarse al servidor sin especificar BD para crearla si no existe
    conexion_servidor = pymysql.connect(
        host=HOST, user=USER, password=PASSWORD, port=int(PORT)
    )
    try:
        with conexion_servidor.cursor() as cursor:
            # Creamos la base de datos de manera segura con acentos/eñes soportados
            cursor.execute(
                f"CREATE DATABASE IF NOT EXISTS `{NAME_DB}` CHARACTER SET utf8mb4;"
            )
    finally:
        conexion_servidor.close()

    # PASO 2: Creación de tablas mediante el motor de SQLModel
    # IMPORTANTE: main.py debe importar los modelos antes para que se creen aquí
    SQLModel.metadata.create_all(engine)


# ============================================================================
# INYECCIÓN DE DEPENDENCIAS (Necesario para los Endpoints del examen)
# ============================================================================


def get_session():
    with Session(engine) as session:
        yield session


# Tipo anotado para usarlo limpiamente en los parámetros de tus controladores
session_dep = Annotated[Session, Depends(get_session)]
