// modulos
const peliculas = require('../data/peliculas');
const herramientas = require('../herramientas');
// uso de funciones
let listadoPeliculasOrdenado = herramientas.ordenarPelis(peliculas);
let contadorPeliculas = herramientas.contarPelis(peliculas);
let listadoPeliculasHTML = herramientas.armarListadoHome(listadoPeliculasOrdenado);
// elementos HTML
let encabezado = "<h1>Bienvenidos a DH Movies</h1> <h2>El mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</h2>";
let cantidadPeliculas = "<h3>Total de películas en cartelera:</h3><p>" + contadorPeliculas + "</p>";
let listado = "<h3>Listado de películas:</h3></br>" + listadoPeliculasHTML;
let pieDePagina = '<h3>Recordá que podés visitar las siguientes secciones:</h3></br><p><a href="/"> >Home</a><br><a href="/en-cartelera"> >En Cartelera</a><br><a href="/mas-votadas"> >Más Votadas</a><br><a href="/sucursales"> >Sucursales</a><br><a href="/contacto"> >Contacto</a><br><a href="/preguntas-frecuentes"> >Preguntas Frecuentes</a></p>';
// ensamblar la respuesta
let respuesta = encabezado + cantidadPeliculas + listado + pieDePagina;
module.exports = respuesta;