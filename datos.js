// Datos previos (no definitivos)

const peliculas = [{
        id: 1,
        titulo: "El Caballero Oscuro",
        director: "Cristopher Nolan",
        genero: "Acción",
        año: 2008,
        duracion_minutos: 152,
        recaudacion_millones: 1004.9,
        nota_imdb: 9.0,
        ganadora_oscar: true,
        imagen: "imagenes/el-caballero-oscuro.jpg"
    },
    {
        id: 2,
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        genero: "Crimen",
        año: 1994,
        duracion_minutos: 154,
        recaudacion_millones: 213.9,
        nota_imdb: 8.9,
        ganadora_oscar: true,
        imagen: "/imagenes/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"

    },
    {
        id: 3,
        titulo: "Dune: Parte Dos",
        director: "Denis Villeneuve",
        genero: "Ciencia Ficción",
        año: 2024,
        duracion_minutos: 166,
        recaudacion_millones: 711.8,
        nota_imdb: 8.6,
        ganadora_oscar: false,
        imagen: "imagenes/Dune_Part_Two_poster.jpeg"
    },

    {
        id: 4,
        titulo: "Parthenope",
        director: "Paolo Sorrentino",
        genero: "Drama",
        año: 2024,
        duracion_minutos: 136,
        recaudacion_millones: 7.5,
        nota_imdb: 6.8,
        ganadora_oscar: false,
        imagen: "imagenes/Parthenope.jpg"
    },

    {
        id: 5,
        titulo: "Los Lunes al Sol",
        director: "Fernando León de Aranoa",
        genero: "Drama",
        año: 2002,
        duracion_minutos: 113,
        recaudacion_millones: 11.5,
        nota_imdb: 7.5,
        ganadora_oscar: false,
        imagen: "imagenes/loslunesalsol.jpg"
    },

    {
    id: 6,
        titulo: "Conclave",
        director: "Edward Berger",
        genero: "Thriller",
        año: 2024,
        duracion_minutos: 120,
        recaudacion_millones: 35.0,
        nota_imdb: 7.6,
        ganadora_oscar: false,
        imagen: "imagenes/conclave.jpg"
    },
    {
        id: 7,
        titulo: "El Gran Hotel Budapest",
        director: "Wes Anderson",
        genero: "Comedia",
        año: 2014,
        duracion_minutos: 99,
        recaudacion_millones: 173.0,
        nota_imdb: 8.1,
        ganadora_oscar: true,
        imagen: "imagenes/granhotelbudapest.jpg"
    },
    {
        id: 8,
        titulo: "The French Dispatch",
        director: "Wes Anderson",
        genero: "Comedia",
        año: 2021,
        duracion_minutos: 107,
        recaudacion_millones: 46.3,
        nota_imdb: 7.1,
        ganadora_oscar: false,
        imagen: "imagenes/discursofrances.jpg"
    },
    {
        id: 9,
        titulo: "La Guitarra Flamenca de Yeray Cortés",
        director: "Antón Álvarez",
        genero: "Documental",
        año: 2024,
        duracion_minutos: 90,
        recaudacion_millones: 0.5,
        nota_imdb: 7.5,
        ganadora_oscar: false,
        imagen: "imagenes/guitarra.jpg"
    },
    {
        id: 10,
        titulo: "Eternal Sunshine of the Spotless Mind",
        director: "Michel Gondry",
        genero: "Romance",
        año: 2004,
        duracion_minutos: 108,
        recaudacion_millones: 74.0,
        nota_imdb: 8.3,
        ganadora_oscar: true,
        imagen: "imagenes/eternal.jpg"
    },
    {
        id: 11,
        titulo: "Frankenstein",
        director: "James Whale",
        genero: "Terror",
        año: 1931,
        duracion_minutos: 70,
        recaudacion_millones: 12.0,
        nota_imdb: 7.8,
        ganadora_oscar: false,
        imagen: "imagenes/frank.jpg"
    },
    {
        id: 12,
        titulo: "Wake Up Dead Man",
        director: "Rian Johnson",
        genero: "Misterio",
        año: 2025,
        duracion_minutos: 130,
        recaudacion_millones: 0.0,
        nota_imdb: 7.3,
        ganadora_oscar: false,
        imagen: "imagenes/wakeup.jpg"
    },
    {
        id: 13,
        titulo: "Sinners",
        director: "Ryan Coogler",
        genero: "Terror",
        año: 2025,
        duracion_minutos: 120,
        recaudacion_millones: 0.0,
        nota_imdb: 7.5,
        ganadora_oscar: false,
        imagen: "imagenes/sinners.jpg"
    },
    {
        id: 14,
        titulo: "Argentina, 1985",
        director: "Santiago Mitre",
        genero: "Drama",
        año: 2022,
        duracion_minutos: 140,
        recaudacion_millones: 3.1,
        nota_imdb: 7.6,
        ganadora_oscar: false,
        imagen: "imagenes/argentina.jpg"
    },
    {
        id: 15,
        titulo: "The Smashing Machine",
        director: "Benny Safdie",
        genero: "Drama",
        año: 2025,
        duracion_minutos: 115,
        recaudacion_millones: 0.0,
        nota_imdb: 6.3,
        ganadora_oscar: false,
        imagen: "imagenes/rock.jpg"
    }
];

const criticas = [
    {
        id_critica: 101,
        pelicula_id: 1, // Vinculado a "El Caballero Oscuro"
        usuario: "Cinefilo1",
        comentario: "Grande el joker.",
        estrellas: 5
    },
    {
        id_critica: 102,
        pelicula_id: 2, // Vinculado a "Pulp Fiction"
        usuario: "Cinefilo2",
        comentario: "Buenos díalogos.",
        estrellas: 5
    }
];

// Exportación con CommonJS.
module.exports = { peliculas, criticas };

