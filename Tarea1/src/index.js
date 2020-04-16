const homePage = require('./homePage');
const contacto = require('./contacto');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const preguntasFrecuentes = require('./preguntasFrecuentes');
const sucursales = require('./sucursales');

module.exports = {
    Home : homePage,
    Contacto : contacto,
    Cartelera : enCartelera,
    Votadas : masVotadas,
    Preguntas : preguntasFrecuentes,
    Sucursales : sucursales,
}