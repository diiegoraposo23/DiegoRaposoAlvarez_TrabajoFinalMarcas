const express = require('express');
const app = express();
const PORT = 3000;

// importación de datos simulados
const { peliculas, criticas } = require('./datos.js');

// Middleware para que Express entienda que es un formato JSON en las peticiones..
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
    res.send('API de Cine de Diego')
});

// Mensaje cuando arranca el servidor.
app.listen(PORT, () => {
    console.log('Servidor de todas las películas que he visto en 2025 en http://localhost:${PORT}');
})