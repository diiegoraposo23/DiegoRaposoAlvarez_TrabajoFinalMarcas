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
    console.log(`Servidor de todas las películas que he visto en 2025 en http://localhost:${PORT}`);
})

// 1. Obtener todas las películas.
// Método GET con una ruta de /peliculas

app.get('/peliculas', (req, res) => {
    // Si la página funciona correctamente, sale 200 OK y el listado completo de películas.
    res.status(200).json(peliculas);
});

// 2. Obtener película por ID.
// ruta: /peliculas/:id
app.get('/peliculas/:id', (req, res) => {
    
    // se extrae el ID con los parámetros de la ruta.
    const idBuscado = parseInt(req.params.id);

    // Buscar película en nuestra lista (arrays)
    const peliculaEncontrada = peliculas.find(p => p.id === idBuscado);

    // Control de errores: si no existe, se devuelve 404.
    if (!peliculaEncontrada) {
        return res.status(404).json ({
            error: "Película no encontrada.",
            mensaje: `No existe esa película con ese ID ${idBuscado}`
        });
    }

    // Si existe, devuelve 200 OK y el objeto de la película.
    res.status(200).json(peliculaEncontrada);
});