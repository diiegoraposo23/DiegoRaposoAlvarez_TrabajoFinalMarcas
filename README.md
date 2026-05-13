# DiegoRaposoAlvarez_TrabajoFinalMarcas

# Catálogo de Cine.

El trabajo final de Lenguaje de Marcas consiste en una web completa para la gestión y visualización de las películas que he visto en 2025.

La aplicación permite que se visualoce una colección de películas que a su vez se conecta a una API creada desde 0 para obtener datos, filtrar resultados y mostrar estadísticas en tiempo real.

## Backend (Servidor)
* Node.js lo he usado para que sea el entorno de ejecución de JavaScript.
* Express.js ha sido el framework para la creación de la API Rest.
* Middleware: Uso de `express.json()` y `express.static()` para la gestión de datos y archivos.

## Frontend (Interfaz)
* HTML y CSS como estructura y diseño avanzado usando Grid y Flexbox.
* JS para la lógica de cliente y consumo de API por medio de `fetch` de forma asíncrona (`async/await`).
* Diseño responsive para que tenga una adaptación completa a los demás dispositivos.

## Características Principales
1. API REST: Rutas para obtener todas las películas, filtrar por director y obtener estadísticas globales.
2. Sistema de Búsqueda: Filtrado dinámico en tiempo real mediante un buscador integrado en la interfaz.
3. Panel de Estadísticas: Cálculo automático en el servidor de la nota media del catálogo y recuento total de los registros.
4. Interfaz de usuario:
    - Estilo oscuro más "profesional".
    - Galería de carteles com proporciones de cine (2:3).
    - NavBar con integración de mi perfil de Letterboxd.
5. Multiplataforma: Diseño fluido que se adapta a cualquier tamaño de pantalla.

## Endpoints de la API.
 * **GET `/`**
    - Comprueba que la API está funcionando correctamente.
    - Ejemplo: `http://localhost:3000/.

* **GET `/peliculas`**
    - Obtiene el listado de películas. Permite aplicar filtros y ordenarlos según los siguientes parámetros:
        - `director`, búsqueda parcial por texto (ej. `?director=Nolan`).
        - `oscar`, filtro booleano (ej. `oscar=true`).
        - `año_desde`, filtro numérico mayor o igual (ej. `?año_desde=2000`).
        - `sort`, ordena descendentemenete por nota (ej. `?sort=nota`).
        - `titulo`: registro concreto buscando por título exacto (ej. `?titulo=Pulp Fiction`).
    * Ejemplo: `http://localhost:3000/peliculas?director=Quentin&sort=nota`.

* **GET `peliculas/estadisticas`**
    - devuelve cálculos estadísticos: nota media, recuento por género y el Top 3 de taquilla.
    - Ejemplo: `http://localhost:3000/peliculas/estadisticas`.

* **GET `peliculas/:id`**
    - Obtiene los datos detallados de una película específica mediante su ID.
    - Ejemplo: `http://localhost:3000/peliculas/1`.

* **POST `/peliculas`
    - Crea un nuevo registro de película. El ID se autogenera. Requiere como mínimo `titulo` y `director`.
    - Body JSON: `{"titulo": "Inception", "director": "Christopher Nolan", "año": 2010}`.

* **PUT `/peliculas/:id`**
    - Modifica los datos de una película existente sin alterar su ID.
    - Ejemplo: `PUT http://localhost:3000/peliculas/1`.

* **DELETE `/peliculas/:id`**
    - Elimina una película del catálogo buscando por su ID.
    - `DELETE http://localhost:3000/peliculas/1`.

## Críticas (Recurso secundario)

* **GET `/criticas/**
    - Obtiene el listado completo de todas las críticas registradas en el sistema.
    - `http://localhost:3000/criticas`.

* **GET `/peliculas/:id/criticas`**
    - Recupera todas las críticas asociadas exclusivamente a una película concreta.
    - `http://localhost:3000/peliculas/1/criticas`.

* **POST `/criticas`**
    - Añade una nueva reseña. Requiere `pelicula_id`, `usuario` y `estrellas`.
    - Body JSON: `{"pelicula_id": 1, "usuario": "Manu", "estrellas": 4, "comentario": "Muy buena"}`.

* **DELETE `/criticas/:id`**
    - Elimina una crítica específica del sistema usando su ID único de crítica.
    - Ejemplo: `DELETE http://localhost:3000/criticas/101`.

