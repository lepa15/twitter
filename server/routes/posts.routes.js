import { Router } from 'express';
const router = new Router();
import { createPost, deletePost, getPosts, updatePost } from '../controllers/posts.controller.js';

router.get('/posts.json', getPosts);
router.post('/posts.json', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;

