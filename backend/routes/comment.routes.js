import express from 'express';
import * as commentController from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/', commentController.getAllComments);
router.post('/', commentController.addComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

export default router;