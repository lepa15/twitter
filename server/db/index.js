import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.local' : '.env.production',
});

const { Pool } = pkg;
let config;

if (process.env.NODE_ENV === 'development') {
  config = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
} else if (process.env.NODE_ENV === 'production') {
  config = {
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false },
  };
}

export const pool = new Pool(config);
