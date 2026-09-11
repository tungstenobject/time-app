const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello from the server' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
