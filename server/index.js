import path from 'path';
import express from 'express';

const __dirname = path.resolve();

const app = express();
const PORT = process.env.EXPRESS_PORT || 5000;

app.use(express.static(path.join(__dirname, '/dist')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Application is started on localhost:${PORT}`);
});
