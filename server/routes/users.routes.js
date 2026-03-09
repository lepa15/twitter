import { Router } from 'express';
const router = new Router();
import { createUser, getUsers } from '../controllers/users.controller.js';

router.get('/users.json', getUsers);
router.post('/users.json', createUser);
export default router;
