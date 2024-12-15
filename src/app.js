const express = require('express');
const app = express();
const port = 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Lancer l'application sur le port spécifié
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
