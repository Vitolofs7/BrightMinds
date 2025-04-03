import express from 'express';
import * as subjectController from '../controllers/subject.controller.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/', authenticateToken, subjectController.getAllSubjects);
router.post('/', authenticateToken, subjectController.addSubject);
router.put('/:id', authenticateToken, subjectController.updateSubject);
router.delete('/:id', authenticateToken, subjectController.deleteSubject);

export default router;