import { Router } from 'express';
const router = new Router();
import { createUser, getUsers } from '../controllers/users.controller.js';

router.get('/users', getUsers);
router.post('/createUser', createUser);
export default router;
