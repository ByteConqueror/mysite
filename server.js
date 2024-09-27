const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
  res.json({ message: "Hello desde Backend!" });
});

app.listen(port, () => {
  console.log(`Servidor arrancado http://localhost:${port}`);
});

