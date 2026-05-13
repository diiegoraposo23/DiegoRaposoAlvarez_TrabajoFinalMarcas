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



