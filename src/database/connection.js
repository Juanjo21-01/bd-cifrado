// Importar modulo SQL SERVER
import sql from 'mssql';
import config from '../config.js';
// Conexion con la base de datos
const conexionBD = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
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

export { sql };

getConnection();
