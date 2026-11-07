import { Router } from 'express';
import {
  getStudents, getStudentById, createStudent,
  updateStudent, deleteStudent
} from '../controllers/studentController.js';
 
const router = Router();
 
// Keep the database-backed GET and POST routes from 3.1 and 3.2.
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
 
// The URL ID reaches each controller as req.params.id.
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
 
export default router;