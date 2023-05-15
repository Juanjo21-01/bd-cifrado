import { Router } from 'express';
import {
  listarClientes,
  insertarClientes,
} from '../controllers/clientes.controller.js';

const router = Router();

// Rutas
router.get('/', listarClientes);
router.post('/', insertarClientes);

//
export default router;
