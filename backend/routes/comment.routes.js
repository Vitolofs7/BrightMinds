import express from 'express';
import * as commentController from '../controllers/comment.controller.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/', authenticateToken, commentController.getAllComments);
router.post('/', authenticateToken, commentController.addComment);
router.put('/:id', authenticateToken, commentController.updateComment);
router.delete('/:id', authenticateToken, commentController.deleteComment);

export default router;