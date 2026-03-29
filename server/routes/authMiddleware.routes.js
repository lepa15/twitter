import { Router } from 'express';
import { authMiddleware, checkAuthentication } from '../controllers/authMiddleware.controller.js';


const router = new Router();

router.get('/protected-route', authMiddleware, checkAuthentication);

export default router;
