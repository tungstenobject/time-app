const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello from the server' });
});

app.get('/api/activities/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id: id });
});

app.get('/api/missing', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.get('/api/search', (req, res) => {
  const category = req.query.category;
  res.json({ category: category });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
