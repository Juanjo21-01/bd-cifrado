-- Crear la base de datos
CREATE DATABASE bd_clientes
USE bd_clientes

-- Crear la tabla
CREATE TABLE clientes(
	id_cliente INT PRIMARY KEY IDENTITY(1,1),
	nombre_cliente NVARCHAR(max),
	apellido_cliente NVARCHAR(max),
	dpi_cliente NVARCHAR(max),
	email_cliente NVARCHAR(max),
	direccion_cliente NVARCHAR(max),
	telefono_cliente NVARCHAR(max)
)

-- Datos
INSERT INTO clientes(nombre_cliente, apellido_cliente, dpi_cliente,email_cliente,direccion_cliente,telefono_cliente) 
VALUES ('Juan Jose', 'Hernandez Lopez', '0000000001201', 'jhernandezl39@miumg.edu.gt', 'El Rodeo, San Marcos', '12345678')

DROP TABLE clientes