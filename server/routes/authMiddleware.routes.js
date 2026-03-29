import { Router } from 'express';
import { authMiddleware, checkAuthentication } from '../controllers/authMiddleware.controller.js';


const router = new Router();

router.get('/protected-route', authMiddleware);
router.get('/check-auth',authMiddleware, checkAuthentication);

export default router;
