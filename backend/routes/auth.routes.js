import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { authenticateBasic } from '../middlewares/authenticateBasic.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', authenticateBasic, login);

export default router;
