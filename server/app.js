import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server works 🚀');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
