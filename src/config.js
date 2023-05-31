import { config } from 'dotenv';

config();

export default {
  // port: 'numero de puerto'
  // user: 'nombre de usuario',
  // password: 'cotraseña del usuario',
  // server: 'localhost',
  // database: 'nombre_de_la_base_de_datos'
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbServer: process.env.DB_SERVER || '',
  dbDatabase: process.env.DB_DATABASE || '',
};
