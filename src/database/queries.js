export const queries = {
  listarClientes: 'SELECT * FROM clientes',
  crearCliente:
    'INSERT INTO clientes (nombre_cliente, apellido_cliente, dpi_cliente, email_cliente, direccion_cliente, telefono_cliente) VALUES (@nombre, @apellido, @dpi, @email, @direccion, @telefono)',
  actualizarCliente:
    'UPDATE clientes SET nombre_cliente = @nombre, apellido_cliente = @apellido, dpi_cliente = @dpi, email_cliente = @email, direccion_cliente = @direccion, telefono_cliente = @telefono WHERE id_cliente = @id',
  eliminarCliente: 'DELETE FROM clientes WHERE id_cliente = @id',
};
