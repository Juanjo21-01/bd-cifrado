import { Router } from 'express';
import {
  listarClientes,
  insertarClientes,
  actualizarCliente,
  eliminarCliente,
} from '../controllers/clientes.controller.js';

const router = Router();

// Rutas
router.get('/', listarClientes);
router.post('/', insertarClientes);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

//
export default router;
