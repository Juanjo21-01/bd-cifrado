// Importar modulo SQL SERVER
import sql from 'mssql';

// Conexion con la base de datos
const conexionBD = {
  user: 'juanjo',
  password: 'basesdedatos',
  server: 'localhost',
  database: 'bd_clientes',
  options: { encrypt: true, trustServerCertificate: true },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(conexionBD);
    return pool;

    // const resultado = await pool.request().query('SELECT 1');
  } catch (err) {
    console.error(err);
  }
};

getConnection();
