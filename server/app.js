import 'dotenv/config';
import express from 'express';
import usersRouters from './routes/users.routes.js';
import postsRouters from './routes/posts.routes.js';

const app = express();
app.use(express.json());

app.use('/', usersRouters);
app.use('/', postsRouters);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500)
    .json({ message: 'Server Error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
