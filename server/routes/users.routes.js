import { Router } from 'express';

const router = new Router();
import { createUser, getOneUser, getUsers, loginUser } from '../controllers/users.controller.js';

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getOneUser);
router.post('/login', loginUser);
export default router;
