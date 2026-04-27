@echo off
title Servidor MariaDB - Entorno Servidor
echo [!] Iniciando MariaDB desde la ruta local...

:: Cambiamos a la unidad C y entramos en la carpeta bin
cd /d "C:\AppDesarrollo\CursoAppTecnologiasWeb\entornoServidor\BaseDeDatos\BBDD\mariadb-12.2.2-winx64\bin"

:: Lanzamos el demonio de MariaDB
:: Nota: Si es la primera vez, podria pedirte permisos de firewall
mariadbd.exe --console

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] No se pudo iniciar MariaDB. 
    echo Verifica que no haya otra instancia (como Docker) usando el puerto 3306.
    pause
)