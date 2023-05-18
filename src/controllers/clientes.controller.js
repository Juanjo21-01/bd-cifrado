import { getConnection, sql, queries } from '../database/index.js';

// Mostrar los clientes
export const listarClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const resultado = await pool.request().query(queries.listarClientes);
    res.json(resultado.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Insertar clientes
export const insertarClientes = async (req, res) => {
  const { nombre, apellido, dpi, email, direccion, telefono } = req.body;

  if (
    nombre == null ||
    apellido == null ||
    dpi == null ||
    email == null ||
    direccion == null ||
    telefono == null
  )
    return res.status(400).json({ msg: 'No se enviaron todos los datos' });

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input('nombre', sql.NVarChar, nombre)
      .input('apellido', sql.NVarChar, apellido)
      .input('dpi', sql.Char, dpi)
      .input('email', sql.NVarChar, email)
      .input('direccion', sql.NVarChar, direccion)
      .input('telefono', sql.Char, telefono)
      .query(queries.crearCliente);

    res.json({ nombre, apellido, dpi, email, direccion, telefono });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Actualizar clientes
export const actualizarCliente = async (req, res) => {
  const { nombre, apellido, dpi, email, direccion, telefono } = req.body;
  const { id } = req.params;

  if (
    nombre == null ||
    apellido == null ||
    dpi == null ||
    email == null ||
    direccion == null ||
    telefono == null
  )
    return res.status(400).json({ msg: 'No se enviaron todos los datos' });

  const pool = await getConnection();

  await pool
    .request()
    .input('nombre', sql.NVarChar, nombre)
    .input('apellido', sql.NVarChar, apellido)
    .input('dpi', sql.Char, dpi)
    .input('email', sql.NVarChar, email)
    .input('direccion', sql.NVarChar, direccion)
    .input('telefono', sql.Char, telefono)
    .input('id', sql.Int, id)
    .query(queries.actualizarCliente);

  res.json({ nombre, apellido, dpi, email, direccion, telefono });
};

// Eliminar clientes
export const eliminarCliente = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const resultado = await pool
    .request()
    .input('id', id)
    .query(queries.eliminarCliente);

  res.sendStatus(204);
};
