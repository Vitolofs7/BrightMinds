import express from 'express';
import * as replyController from '../controllers/reply.controller.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/', authenticateToken, replyController.getAllReplies);
router.post('/', authenticateToken, replyController.addReply);
router.put('/:id', authenticateToken, replyController.updateReply);
router.delete('/:id', authenticateToken, replyController.deleteReply);

export default router;