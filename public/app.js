// Espera que la web cargue para ejecutar todo.
document.addEventListener('DOMContentLoaded', () => {
    obtenerPeliculas(); // 1. Carga las películas iniciales.
    obtenerEstadisticas(); // 2. Carga los datos del panel superior.

    // 3. Con esto el buscador tiene movimiento.
    const buscador = document.getElementById('input-busqueda');
    buscador.addEventListener('input', (evento) => {
        const textoEscrito = evento.target.value;
        // Se llama a la API enviando un query parameter ?director=
        obtenerPeliculas(textoEscrito);
    });
});

// Función para pedir películas (con o sin filtro)
async function obtenerPeliculas(directorBuscado = '') {
    try {
        // Si hay texto se contruye una URL sin filtro, si no, la URL normal.
        const url = directorBuscado ? `/peliculas?director=${directorBuscado}` : '/peliculas';

        const respuesta = await fetch(url);
        const peliculas = await respuesta.json();

        const contenedor = document.getElementById('lista-peliculas');
        contenedor.innerHTML = '';

        if (peliculas.length === 0) {
            contenedor.innerHTML = '<p style="color: #9ab; grid-colum: 1 / -1; text-align: center;">No hay películas que coincidan con la búsqueda.</p>';
            return;
        }

        peliculas.forEach(pelicula => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';

            tarjeta.innerHTML = `
                <h3>${pelicula.titulo}</h3>
                <span class="nota>IMDB ${pelicula.nota_imdb} </span>
                <p><strong>Director:</stron> ${pelicula.director}</p>
                <p><strong>Género:</strong> ${pelicula.genero}</p>
                <p><strong>Año:</strong> ${pelicula.año}</p>
                `;

                contenedor.appendChild(tarjeta);
        });

    } catch (error) {
        console.error("Error al cargar las películas.", error);
    }
}

async function obtenerEstadisticas() {
    try {
        const respuesta = await fetch('/peliculas/estadisticas');
        const stats = await respuesta.json();

        const statsContainer = document.getElementById('stats-container');
        statsContainer.innerHTML = `
            Total en catálogo: <strong>${stats.total_peliculas}</strong> |
            Nota media: <strong>${stats.nota_media_catalogo}</strong>
            `;
    } catch (error) {
        console.error("Error al cargar estadísticas.", error);
    }
    
}