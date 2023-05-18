// Importar express
import express from 'express';
import config from './config.js';
import rutacliente from './routes/clientes.routes.js';

const app = express();

// configuracion
app.set('port', config.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta principal
app.use(rutacliente);

//
export default app;
