import { pool } from '../db/index.js';

export const getPosts = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const createPost = async (req, res, next) => {
  const {
    userId,
    content,
    imageUrl
  } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (user_id, content, image_url) VALUES ($1, $2, $3) RETURNING * ',
      [userId, content, imageUrl]
    );
    res.status(201)
      .json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const {
    content,
    imageUrl
  } = req.body;
  try {
    const result = await pool.query(
      `UPDATE posts
       SET content   = $1,
           image_url = $2
       WHERE id = $3 RETURNING *`,
      [content, imageUrl, id]
    );

    if (result.rows.length === 0) {
      return res.status(404)
        .json({ message: 'Post not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`DELETE
                                     FROM posts
                                     WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404)
        .json({ message: 'Post not found' });
    }
    res.status(204)
      .send();
  } catch (err) {
    next(err);
  }
};
