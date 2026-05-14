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

    // 4. Eventos de la Ventana Modal (Formulario)
    document.getElementById('btn-abrir-form').addEventListener('click', abrirModal);
    document.querySelector('.cerrar').addEventListener('click', cerrarModal);

    // Cerrar modal al hacer clic fuera del recuadro
    window.addEventListener('click', (evento) => {
        if (evento.target === document.getElementById('modal-pelicula')) {
            cerrarModal();
        }
    });

    // 5. Manejar el envío del formulario (Crear o Editar)
    document.getElementById('form-pelicula').addEventListener('submit', async (evento) => {
        evento.preventDefault(); // Evita que la página se recargue al enviar

        const id = document.getElementById('peli-id').value;
        
        // Recogemos los datos de los inputs
        const peliculaData = {
            titulo: document.getElementById('titulo').value,
            director: document.getElementById('director').value,
            año: parseInt(document.getElementById('año').value),
            nota_imdb: parseFloat(document.getElementById('nota_imdb').value),
            imagen: document.getElementById('imagen').value || ""
        };

        // Si hay ID, es un PUT (editar). Si no hay ID, es un POST (crear).
        const metodo = id ? 'PUT' : 'POST';
        const url = id ? `/peliculas/${id}` : '/peliculas';

        try {
            const respuesta = await fetch(url, {
                method: metodo,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(peliculaData)
            });

            if (respuesta.ok) {
                cerrarModal(); // Cerramos la ventanita
                obtenerPeliculas(); // Recargamos la lista de películas
                obtenerEstadisticas(); // Recargamos las notas medias
            } else {
                console.error("Error al guardar la película.");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
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
            contenedor.innerHTML = '<p style="color: #9ab; grid-column: 1 / -1; text-align: center;">No hay películas que coincidan con la búsqueda.</p>';
            return;
        }

        peliculas.forEach(pelicula => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';

            // 1. Definición de imagen.
            const cartel = pelicula.imagen || `imagenes/el-caballero-oscuro.jpg`;

            // 2. Construcción de la tarjeta (Ahora con botones de Editar y Borrar)
            tarjeta.innerHTML = `
                <img src="${cartel}" alt="Cartel de ${pelicula.titulo}">
                
                <div class="tarjeta-info">
                    <h3>${pelicula.titulo}</h3>
                    
                    <div class="nota-container">
                        <span class="estrella">★</span>
                        <span class="nota-actual">${Number(pelicula.nota_imdb).toFixed(1)}</span>
                        <span>/ 10</span>
                    </div>

                    <div class="acciones-tarjeta">
                        <button class="btn-editar" onclick="prepararEdicion(${pelicula.id})">Editar</button>
                        <button class="btn-borrar" onclick="eliminarPelicula(${pelicula.id})">Borrar</button>
                    </div>
                </div>
            `;

            contenedor.appendChild(tarjeta); 
        });

    } catch (error) {
        console.error("Error al cargar las películas.", error);
    }
}


// Función para cargar los datos en el panel superior
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


/* Funciones para el CRUD */

function abrirModal() {
    document.getElementById('modal-pelicula').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal-pelicula').style.display = 'none';
    document.getElementById('form-pelicula').reset(); // Limpia los campos de texto
    document.getElementById('peli-id').value = ''; // Borra el ID oculto
    document.getElementById('modal-titulo').innerText = 'Nueva Película';
}

// Llama al servidor para borrar y recarga la página
async function eliminarPelicula(id) {
    if (confirm("¿Estás seguro de que quieres borrar esta película de tu catálogo?")) {
        try {
            const respuesta = await fetch(`/peliculas/${id}`, { method: 'DELETE' });
            if (respuesta.ok) {
                obtenerPeliculas();
                obtenerEstadisticas();
            }
        } catch (error) {
            console.error("Error al borrar:", error);
        }
    }
}

// Carga los datos de una película concreta en el formulario para editarla
async function prepararEdicion(id) {
    try {
        const respuesta = await fetch(`/peliculas/${id}`);
        const pelicula = await respuesta.json();

        // Rellenamos los huecos del formulario con los datos de la base de datos
        document.getElementById('peli-id').value = pelicula.id;
        document.getElementById('titulo').value = pelicula.titulo;
        document.getElementById('director').value = pelicula.director;
        document.getElementById('año').value = pelicula.año;
        document.getElementById('nota_imdb').value = pelicula.nota_imdb;
        document.getElementById('imagen').value = pelicula.imagen || "";

        // Cambiamos el título de la ventanita y la abrimos
        document.getElementById('modal-titulo').innerText = 'Editar Película';
        abrirModal();
    } catch (error) {
        console.error("Error al cargar los datos para edición:", error);
    }
}