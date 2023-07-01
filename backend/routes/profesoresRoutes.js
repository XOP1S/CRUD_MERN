import express from "express"
import { actualizarProfesor, consultarProfesor, consultarProfesorPorId, crearProfesor, eliminarProfesor } from "../controllers/profesorController.js"

const router = express.Router()

router.get('/profesor/:id', consultarProfesorPorId)
router.route('/').get(consultarProfesor).post(crearProfesor)
router.put('/actualizar/:id', actualizarProfesor)
router.delete('/eliminar/:id', eliminarProfesor)

export default router