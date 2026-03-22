import 'dotenv/config';
import express from 'express';
import usersRouters from './routes/users.routes.js';
import postsRouters from './routes/posts.routes.js';
import authMiddlewareRouters from './routes/authMiddleware.routes.js';
import { pool } from './db/index.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api', usersRouters);
app.use('/api', postsRouters);
app.use('/api', authMiddlewareRouters);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500)
    .json({ message: 'Server Error' });
});

await pool.query('SELECT NOW()');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port} in ${process.env.NODE_ENV} mode`);
});


