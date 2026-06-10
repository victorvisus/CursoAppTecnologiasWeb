from contextlib import asynccontextmanager
from decimal import Decimal

# 2. Importar la inicialización y la dependencia de la sesión
from database.database_pedidos import inicializar_base_de_datos, session_dep
from fastapi import FastAPI, HTTPException

# 1. IMPORTANTE: Importar los modelos primero para que SQLModel los registre al crear las tablas
from models.pedidos_modelo import Cliente, Pedido
from sqlmodel import select


# ============================================================================
# INICIO DE LA APLICACIÓN
# ============================================================================
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Se ejecuta al arrancar el servidor antes de recibir peticiones
    print(
        "Reiniciando el servidor FastAPI... Verificando/Creando base de datos y tablas..."
    )
    inicializar_base_de_datos()
    yield


# Instanciamos FastAPI pasando el lifespan
app = FastAPI(lifespan=lifespan)


@app.get("/")
def inicio():
    return {"mensaje": "Servidor de Pedidos listo y base de datos verificada/creada"}


# ============================================================================
# EJERCICIO 5: ENDPOINTS
# ============================================================================


# --- EJERCICIO 5.2: Inserciones vía ORM de los clientes y pedidos anteriores ---
@app.post("/insertar-datos/")
async def insertar_datos_iniciales(session: session_dep):
    # Comprobar si ya existen datos para evitar duplicados
    clientes_existentes = session.exec(select(Cliente)).first()
    if clientes_existentes:
        return {"mensaje": "Los datos iniciales ya fueron insertados previamente."}

    lista_clientes = [
        Cliente(
            NIF="12345678Z",
            nombre="Juan",
            apellidos="Pérez García",
            direccion="Calle Mayor 10, 28013 Madrid",
        ),
        Cliente(
            NIF="87654321T",
            nombre="María",
            apellidos="López Rodríguez",
            direccion="Avenida de la Libertad 25, 08001 Barcelona",
        ),
        Cliente(
            NIF="11223344K",
            nombre="Carlos",
            apellidos="Martín Sánchez",
            direccion="Plaza de España 5, 41001 Sevilla",
        ),
        Cliente(
            NIF="99887766L",
            nombre="Ana",
            apellidos="Gómez Fernández",
            direccion="Calle Colón 12, 46004 Valencia",
        ),
    ]

    lista_pedidos = [
        Pedido(NIF_cliente="99887766L", importe=Decimal("45.50")),
        Pedido(NIF_cliente="99887766L", importe=Decimal("120.00")),
        Pedido(NIF_cliente="99887766L", importe=Decimal("89.99")),
        Pedido(NIF_cliente="99887766L", importe=Decimal("15.75")),
        Pedido(NIF_cliente="99887766L", importe=Decimal("200.50")),
        Pedido(NIF_cliente="99887766L", importe=Decimal("55.20")),
        Pedido(NIF_cliente="12345678Z", importe=Decimal("30.00")),
        Pedido(NIF_cliente="12345678Z", importe=Decimal("42.50")),
        Pedido(NIF_cliente="12345678Z", importe=Decimal("18.90")),
        Pedido(NIF_cliente="87654321T", importe=Decimal("65.00")),
        Pedido(NIF_cliente="87654321T", importe=Decimal("99.95")),
        Pedido(NIF_cliente="87654321T", importe=Decimal("12.30")),
        Pedido(NIF_cliente="11223344K", importe=Decimal("210.00")),
        Pedido(NIF_cliente="11223344K", importe=Decimal("54.40")),
        Pedido(NIF_cliente="11223344K", importe=Decimal("33.15")),
    ]

    # Guardar en la Base de Datos con el ORM
    for cliente in lista_clientes:
        session.add(cliente)

    # Hacemos commit intermedio para que existan las PK de los clientes antes de meter los pedidos (por la FK)
    session.commit()

    for pedido in lista_pedidos:
        session.add(pedido)

    session.commit()
    return {"mensaje": "Clientes y pedidos insertados correctamente mediante el ORM."}


# --- EJERCICIO 5.3: Selección de todos los pedidos del cliente "Ana" ---
@app.get("/pedidos/cliente/ana/")
async def obtener_pedidos_ana(session: session_dep):
    # Unimos (JOIN) Pedido y Cliente, filtrando donde Cliente.nombre sea "Ana"
    declaracion = select(Pedido).join(Cliente).where(Cliente.nombre == "Ana")
    resultados = session.exec(declaracion).all()

    if not resultados:
        raise HTTPException(
            status_code=404, detail="No se encontraron pedidos para la cliente Ana."
        )
    return resultados


# --- EJERCICIO 5.4: Selección de pedidos con importe entre 50 y 90 ---
@app.get("/pedidos/rango-importe/")
async def obtener_pedidos_por_rango(session: session_dep):
    # Filtrado por rango usando operadores relacionales comunes, evitando conflictos de tipos
    declaracion = select(Pedido).where(
        Pedido.importe >= Decimal("50"), Pedido.importe <= 90
    )
    resultados = session.exec(declaracion).all()

    if not resultados:
        raise HTTPException(
            status_code=404,
            detail="No hay pedidos en el rango de importe especificado (50-90).",
        )
    return resultados


# --- EJERCICIO 5.5: Actualizar pedidos de "12345678Z" con un 10% de descuento ---
@app.put("/pedidos/aplicar-descuento-nif/")
async def aplicar_descuento_nif(session: session_dep):
    # Buscamos todos los pedidos asociados al NIF indicado
    declaracion = select(Pedido).where(Pedido.NIF_cliente == "12345678Z")
    pedidos_cliente = session.exec(declaracion).all()

    if not pedidos_cliente:
        raise HTTPException(
            status_code=404, detail="No se encontraron pedidos para el NIF 12345678Z."
        )

    # Modificamos el importe aplicando el 10% de descuento (multiplicar por 0.90)
    for pedido in pedidos_cliente:
        if pedido.importe is not None:
            # Convertimos el flotante a Decimal para mantener consistencia de tipos
            pedido.importe = pedido.importe * Decimal("0.90")
            session.add(pedido)

    session.commit()
    return {
        "mensaje": f"Se ha aplicado un 10% de descuento a los {len(pedidos_cliente)} pedidos del NIF 12345678Z."
    }
