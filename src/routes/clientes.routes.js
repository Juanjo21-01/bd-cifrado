import { Router } from 'express';
import {
  pagina,
  listarClientes,
  insertarClientes,
  actualizarCliente,
  eliminarCliente,
  listarClientesEncriptados,
} from '../controllers/clientes.controller.js';

const router = Router();

// Rutas
router.get('/', pagina);
router.get('/clientes', listarClientes);
router.get('/clientesEnc', listarClientesEncriptados);
router.post('/clientes', insertarClientes);
router.put('/clientes:id', actualizarCliente);
router.delete('/clientes:id', eliminarCliente);

//
export default router;
