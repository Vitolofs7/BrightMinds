import express from 'express';
import * as videoController from '../controllers/video.contrroller.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/', authenticateToken, videoController.getVideo);
router.post('/', authenticateToken, videoController.createVideo);
router.put('/:id', authenticateToken, videoController.updateVideo);
router.delete('/:id', authenticateToken, videoController.deleteVideo);

router.get('/video-comments/:videoId', authenticateToken, videoController.getVideoComments);


export default router;