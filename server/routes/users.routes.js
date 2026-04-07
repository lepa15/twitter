import { Router } from 'express';

const router = new Router();
import {
  createUser,
  feed,
  getOneUser,
  getUsers,
  loginUser
} from '../controllers/users.controller.js';
import { authMiddleware } from '../controllers/authMiddleware.controller.js';

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getOneUser);
router.post('/login', loginUser);
router.post('/feed', authMiddleware, feed);

export default router;
