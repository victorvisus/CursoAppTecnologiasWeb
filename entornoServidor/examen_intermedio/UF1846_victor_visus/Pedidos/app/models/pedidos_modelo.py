from decimal import Decimal
from typing import Optional

from pydantic import field_validator
from sqlmodel import Field, SQLModel

# ============================================================================
# MODELO 1: CLIENTE
# ============================================================================
"""
| Campo 	| Tipo de Dato (SQL)|  PK / FK    | Nullable |
| NIF 		| `VARCHAR(9)` 	    |      PK     | 	No	 | 
| nombre 	| `VARCHAR(50)` 	| 	          | 	No   |
| apellidos	| `VARCHAR(50)` 	| 	          |     No 	 |
| direccion	| `VARCHAR(100)` 	| 	          | 	Sí 	 |
"""


class Cliente(SQLModel, table=True):
    # NIF es la Clave Primaria (PK), tipo VARCHAR(9)
    NIF: str = Field(primary_key=True, max_length=9)
    nombre: str = Field(max_length=50)
    apellidos: str = Field(max_length=50)
    direccion: Optional[str] = Field(default=None, max_length=100)

    # Validador para el campo NIF
    @field_validator("NIF")
    @classmethod
    def validar_NIF(clase, valor: str) -> str:
        # Limpiamos posibles espacios en blanco
        valor = valor.strip()

        # Validamos formato básico antes del cálculo matemático para evitar errores de ejecución
        if len(valor) != 9 or not valor[:-1].isdigit() or not valor[-1].isalpha():
            raise ValueError("El NIF debe constar de 8 números seguidos de 1 letra.")

        letras = "TRWAGMYFPDXBNJZSQVHLCKE"
        resto = int(valor[:-1]) % 23

        if letras[resto] != valor[-1].upper():
            raise ValueError(
                f"NIF inválido: la letra no coincide con el número. Se esperaba '{letras[resto]}', pero se recibió '{valor[-1]}'"
            )

        print(f"NIF válido: {valor[-1]} coincide con la letra '{letras[resto]}'")
        return valor

    def __str__(self):
        return f"Cliente(NIF='{self.NIF}', nombre='{self.nombre}', apellidos='{self.apellidos}')"


# ============================================================================
# MODELO 2: PEDIDO
# ============================================================================
"""
| Campo     	| Tipo de Dato (SQL)	| PK / FK   | Nullable | 
| id_pedido 	|	`INT` 	        	| 	PK      | 	No     | Autoincremental.        |
| NIF_cliente 	| `VARCHAR(9)`      	| 	FK      | 	No     | Ref. `NIF` de `Cliente`.|
| importe   	| `DECIMAL(10, 2)`  	| 	        | 	Sí 	   |
"""


class Pedido(SQLModel, table=True):
    # id_pedido es la Clave Primaria (PK), Autoincremental e INT, uso la clave "sa_column_kwargs" de SQLModel para indicar que debe ser autoincremental, ademas con la clase Optional[int] indicamos que es un campo que se puede omitir al crear un nuevo Pedido, ya que se generará automáticamente, y evitar el error en el INSERT de la funcion insertar_datos_iniciales() del main.py
    id_pedido: Optional[int] = Field(
        default=None, primary_key=True, sa_column_kwargs={"autoincrement": True}
    )

    # NIF_cliente es Clave Foránea (FK) que referencia al campo NIF de la tabla Cliente
    NIF_cliente: str = Field(foreign_key="cliente.NIF", max_length=9)

    # importe es un número DECIMAL(10,2) y puede ser nulo
    importe: Decimal = Field(default=None, decimal_places=2, max_digits=10)

    def __str__(self):
        return f"Pedido(id_pedido={self.id_pedido}, NIF_cliente='{self.NIF_cliente}', importe={self.importe})"
