// modulos
const preguntas = require('../data/preguntas');
const herramientas = require('../herramientas');
// uso de funciones
let cantidadPreguntas = herramientas.contar(preguntas);
let listadoPreguntasHTML = herramientas.armarListadoPreguntas(preguntas);
// elementos HTML
let encabezado = "<h1>Preguntas Frecuentes</h1>";
let cantidadDePreguntas = "<h3>Total de Preguntas:</h3><p>" + cantidadPreguntas + "</p>";
let listado = "<h3>Listado de Preguntas:</h3></br>" + listadoPreguntasHTML;
let pieDePagina = '<h3>Recordá que podés visitar las siguientes secciones:</h3></br><p><a href="/"> >Home</a><br><a href="/en-cartelera"> >En Cartelera</a><br><a href="/mas-votadas"> >Más Votadas</a><br><a href="/sucursales"> >Sucursales</a><br><a href="/contacto"> >Contacto</a><br><a href="/preguntas-frecuentes"> >Preguntas Frecuentes</a></p>';
// ensamblar la respuesta
let respuesta = encabezado + cantidadDePreguntas + listado + pieDePagina;
module.exports = respuesta;
