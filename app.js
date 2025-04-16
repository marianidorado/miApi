require('dotenv').config();
const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hola Mundo</h1>
        <h2>Hola Mundo desde Express v2</h2>
        <p>Esta es una aplicacion de prueba</p>`);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});