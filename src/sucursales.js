// modulos
const sucursales = require('../data/sucursales');
const herramientas = require('../herramientas');
// uso de funciones
let cantidadSalas = herramientas.contar(sucursales);
let listadoSucursalesOrdenado = herramientas.ordenarSalas(sucursales);
let listadoSucursalesHTML = herramientas.armarListadoSucursales(listadoSucursalesOrdenado);
// elementos HTML
let encabezado = "<h1>Nuestras Salas</h1>";
let cantidadDeSalas = "<h3>Total de Salas:</h3><p>" + cantidadSalas + "</p>";
let listado = "<h3>Listado de Salas:</h3></br>" + listadoSucursalesHTML;
let pieDePagina = '<h3>Recordá que podés visitar las siguientes secciones:</h3></br><p><a href="/"> >Home</a><br><a href="/en-cartelera"> >En Cartelera</a><br><a href="/mas-votadas"> >Más Votadas</a><br><a href="/sucursales"> >Sucursales</a><br><a href="/contacto"> >Contacto</a><br><a href="/preguntas-frecuentes"> >Preguntas Frecuentes</a></p>';
// ensamblar la respuesta
let respuesta = encabezado + cantidadDeSalas + listado + pieDePagina;
module.exports = respuesta;
