const movies = require('./data/peliculas');
const theaters = require('./data/sucursales');
const faqs = require('./data/preguntas');
const herramientas = require('./herramientas');


const index = require('./src/index');

function router(peticion) {
    let respuesta = null;
    switch (peticion) {
        case "/":
            respuesta = index.Home;
            break;
        case "/en-cartelera":
            respuesta = index.Cartelera;
            break;
        case "/mas-votadas":
            respuesta = index.Votadas;
            break;
        case "/sucursales":
            respuesta = index.Sucursales;
            break;
        case "/contacto":
            respuesta = index.Contacto;
            break;
        case "/preguntas-frecuentes":
            respuesta = index.Preguntas;
            break;
    }
    return respuesta;
}

module.exports = router;