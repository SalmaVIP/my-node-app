const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Utilise un port dynamique si configuré par Jenkins

// Middleware pour les logs des requêtes
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Route principale
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Route de test pour vérifier le bon fonctionnement
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    console.error('An error occurred:', err.message);
    res.status(500).send('Internal Server Error');
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
