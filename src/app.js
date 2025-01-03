const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Lancement du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
