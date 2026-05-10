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

// 3. Creación de nueva película.
// Método: POST | Ruta: /películas.
app.post('/peliculas', (req, res) => {
    const nuevaPelicula = req.body;

    // Valida los campos obligatorios.
    if (!nuevaPelicula.titulo || !nuevaPelicula.director) {
        return res.status(400).json({
            error: "Bad request",
            mensaje: "El título y el director son obligatorios para añadir otra película."
        });
    }

    // Calculo de nuevo ID automáticamente.
    const nuevoId = peliculas.length > 0 ? Math.max(...peliculas.map(p => p.id)) + 1 : + 1;
    nuevaPelicula.id = nuevoId;

    // Requisito: Código 201 creado.
    res.status(201).json(nuevaPelicula);
});

// 4. Modificar película existente.
// Método: PUT | Ruta: /películas/:id
app.put('/peliculas/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const indice = peliculas.findIndex(p => p.id === idBuscado);

    // Control de errores.
    if (indice === -1) {
        return res.status(404).json({ error: "Película no encontrada." });
    }

    // Actualización de datos manteniendo el ID intacto.
    peliculas[indice] = { ...peliculas[indice], ...req.body, id: idBuscado };

    res.status(200).json(peliculas[indice]);
});

// 5. Elminar película.
// Método: DELETE | Ruta: /peliculas/:id
app.delete('/peliculas/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const indice = peliculas.findIndex(p => p.id === idBuscado);

    if (indice === -1) {
        return res.status(404).json({ error: "Película no encontrada para eliminar."});
    }

    // Elimina la película del array.
    const peliculaEliminada = peliculas.splice(indice, 1);

    res.status(200).json({
        mensaje: "Película eliminada correctamente.",
        pelicula: peliculaEliminada[0]
    });
});


/**
 * Recurso Secundario.
 */

// 6. Obtención de todas las críticas.
// Método: GET | Ruta: /criticas.
app.get('/criticas', (req, res) => {
    res.status(200).json(criticas);
});

// 7. Obtener la crítica de una película en concreto.
// Método: GET | Ruta: /peliculas/criticas
app.get('/peliculas/:id/criticas', (req, res) => {
    const peliculaId = parseInt(req.params.id);

    // Primero se comprueba si la película existe.
    const peliculaExiste = peliculas.find(p => p.id === peliculaId);
    if (!peliculaExiste) {
        return res.status(404).json({ error: "Película no encontrada." });
    }

    // Filtra la crítica que pertenezcan al mismo ID que la película.
    const criticasPelicula = criticas.filter(c => c.pelicula_id === peliculaId);

    res.status(200).json(criticasPelicula);
});

// 8. Crear una nueva crítica.
// Método: POST | Ruta: /criticas
app.post('/criticas', (req, res) => {
    const nuevaCritica = req.body;

    // Validación de los datos obligatorios.
    if (!nuevaCritica.pelicula_id || !nuevaCritica.usuario || !nuevaCritica.estrellas) {
        return res.status(400).json({
            error: "Bad request",
            mensaje: "Faltan datos, Necesidad pelicula_id, usuario y estrellas."
        });
    }

    // Calcula el ID automáticamente.
    const nuevoId = criticas.length > 0 ? Math.max(...criticas.map(c => c.id_critica)) + 1 : 1;
    nuevaCritica.id_critica = nuevoId;

    criticas.push(nuevaCritica);
    res.status(201).json(nuevaCritica);
});

// 9. Eliminar una crítica.
// Método: DELETE || Ruta: /criticas/:id
app.delete('/criticas/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const indice = criticas.findIndex(c => c.id_critica === idBuscado);

    if (indice === -1) {
        return res.status(404).json({ error: "Crítica no encontrada." });
    }

    const criticaEliminada = criticas.splice(indice, 1);

    res.status(200).json({
        mensaje: "Crítica eliminada correctamente.",
        critica: criticaEliminada[0]
    });
});