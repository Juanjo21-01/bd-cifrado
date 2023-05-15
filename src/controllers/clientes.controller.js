import { getConnection } from '../database/connection.js';

// Mostrar los clientes
export const listarClientes = async (req, res) => {
  const pool = await getConnection();

  const resultado = await pool.request().query('SELECT * FROM clientes');

  res.json(resultado);
};

// Insertar clientes
export const insertarClientes = (req, res) => res.send('Cliente insertado');
