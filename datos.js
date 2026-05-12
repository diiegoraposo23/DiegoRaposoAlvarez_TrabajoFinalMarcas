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

