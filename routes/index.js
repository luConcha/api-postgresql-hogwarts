import express from 'express';
import alumnosController from '../controller/alumnos.controller.js';

const router = express.Router();

router.post('/alumnos', alumnosController.createAlumno);
router.get('/alumnos', alumnosController.getAlumnos);
router.get('/alumnos/:id', alumnosController.getAlumnoById);
router.put('/alumnos/:id', alumnosController.updateAlumno);
router.delete('/alumnos/:id', alumnosController.deleteAlumno);

export default router;
