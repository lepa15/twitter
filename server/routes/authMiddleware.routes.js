import { Router } from 'express';
import { authMiddleware } from '../controllers/authMiddleware.controller.js';

const router = new Router();

router.get('/protected-route', authMiddleware);

export default router;
