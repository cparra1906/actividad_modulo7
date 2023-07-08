import { Router } from "express";
import { getAllUsuarios } from '../controllers/usuarios.controllers.js';

const router = Router();
router.get("/", getAllUsuarios); // La ruta te envía al controlador

export default router;