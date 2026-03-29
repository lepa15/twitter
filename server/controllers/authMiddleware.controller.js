import { pool } from '../db/index.js';
import * as crypto from 'node:crypto';

export async function createSession(userId) {
  const token = crypto.randomUUID();

  await pool.query(
    'INSERT INTO sessions (user_id, token) VALUES ($1, $2)',
    [userId, token],
  );

  return token;
}

export function setAuthCookies(res, token, email) {
  const isProduction = process.env.NODE_ENV === 'production';
  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.cookie('email', email, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export async function authMiddleware(req, res, next) {
  const token = req.cookies['token'];
  const email = req.cookies['email'];

  if (!token || !email) {
    return res.status(401)
      .send({
        message: 'Необходима авторизация',
      });
  }

  try {
    const result = await pool.query(
      `SELECT *
       FROM sessions
       WHERE token = $1
         AND created_at >= NOW() - INTERVAL '7 days'`,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(401)
        .send({ message: 'Недействительный токен' });
    }

    req.userId = result.rows[0].user_id;
    next();
  } catch (err) {
    next(err);
  }
}

export async function checkAuthentication(req, res, next) {
  res.status(200)
    .json({
      message: 'Авторизован',
      userId: req.userId
    });
}
