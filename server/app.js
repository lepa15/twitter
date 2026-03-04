import 'dotenv/config'; // сразу подхватывает .env
import express from 'express';
import pkg from 'pg';
const { Client } = pkg;

const app = express();
app.use(express.json());

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => console.error('Connection error:', err.stack));

app.get('/', (req, res) => {
  res.send('Проверка связи!!!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
