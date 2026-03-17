import { pool } from '../db/index.js';
import bcrypt from 'bcrypt';

export async function getUsers(req, res, next) {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
}

export async function getOneUser(req, res, next) {
  try {
    const userId = req.params.id;
    const result = await pool.query('SELECT * FROM users WHERE id=$1', [userId]);

    if (result.rows.length === 0) {
      return res.status(404)
        .json({ message: 'No user with this id' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  const {
    username,
    email,
    password,
  } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, email, passwordHash],
    );
    res.status(201)
      .json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409)
        .json({
          message: 'Email already exists',
        });
    }

    next(err);
  }
}

export async function loginUser(req, res, next) {
  const {
    email,
    password,
  } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email=$1', [email],
    );

    if (result.rows.length === 0) {
      return res.status(401)
        .json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401)
        .json({ message: 'Invalid email or password' });
    }

    return res.status(200)
      .json(result.rows[0]);
  } catch (err) {
    next(err);
  }
}



