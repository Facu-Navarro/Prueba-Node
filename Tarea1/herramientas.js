let herramientas = {

    armarListadoHome : function (arreglo) {
        let i= 0;
        let maxnum = arreglo.length;
        let peliculasHtml = "";
        let separador = "";
        let row = arreglo[i];
        for (let i = 0; i < maxnum; i++) {
            let cadaPelicula = "<p>" + (i+1) + ")  " + row.title + "<p>";
            peliculasHtml = peliculasHtml + cadaPelicula + separador;
        }
        return peliculasHtml;
    },

    armarListadoCartelera : function (arreglo) {
        let i= 0;
        let maxnum = arreglo.length;
        let peliculasHtml = "";
        let separador = "</br>-----------------------------------</br>";
        let row = arreglo[i];
        for (let i = 0; i < maxnum; i++) {
            let cadaPelicula = "<p> Titulo: " + row.title + "<p> </br> <p> Detalle: " + row.overview + "<p>";
            peliculasHtml = peliculasHtml + cadaPelicula + separador;
        }
        return peliculasHtml;
    },

    armarListadoMasVotadas : function (arreglo) {
        let i= 0;
        let maxnum = arreglo.length;
        let peliculasHtml = "";
        let separador = "</br>-----------------------------------</br>";
        let row = arreglo[i];
        for (let i = 0; i < maxnum; i++) {
            let cadaPelicula = "<p>Titulo:" + row.title + "<p> <p>Votacion Promedio: " + row.vote_average + "<p> <p>Detalle: " + row.overview + "<p>";
            peliculasHtml = peliculasHtml + cadaPelicula + separador;
        }
        return peliculasHtml;
    },

    armarListadoSucursales : function (arreglo) {
        let i= 0;
        let maxnum = arreglo.length;
        let sucursalesHTML = "";
        let separador = "----------------------------";
        let row = arreglo[i];
        for (let i = 0; i < maxnum; i++) {
            let cadaSucursal = "<p>Nombre:" + row.name + "<p> <p>Direccion: " + row.address + "<p> <p>Descripcion: " + row.description + "<p>";
            sucursalesHTML = sucursalesHTML + cadaSucursal + separador;
        }
        return sucursalesHTML;
    },

    armarListadoPreguntas : function (arreglo) {
        let i= 0;
        let maxnum = arreglo.length;
        let preguntasHTML = "";
        let separador = "----------------------------";
        let row = arreglo[i];
        for (let i = 0; i < maxnum; i++) {
            let cadaPregunta = "<p>Pregunta:" + row.faq_title + "<p> <p>Respuesta: " + row.faq_answer + "<p>";
            preguntasHTML = preguntasHTML + cadaPregunta + separador;
        }
        return preguntasHTML;
    },

    ordenarPelis : function (arreglo) {
        let arregloOrdenado = arreglo.sort( function (x, y) {
            if (x.title > y.title) { return 1; }
            else if (x.title < y.title) { return -1; }
            else { return 0; }
        });
        return arregloOrdenado;
    },

    contarPelis : function (arreglo) {
        let arregloContado = arreglo.length;
        return arregloContado;
    },

    masVotadas : function (arreglo) {
        let votadas = [];
        let i = 0;
        let row = arreglo[i];
        let maxnum = arreglo.length;
        for (let i = 0; i < maxnum; i++){
            if(row.vote_average > 7){
                votadas.push(row);
            }
        }
        return votadas;
    },

    promedioVotacion : function (arreglo){
        let puntaje = null;
        let i = 0;
        let row = arreglo[i];
        let maxnum = arreglo.length;
        for (let i = 0; i < maxnum; i++){
            puntaje = puntaje + row.vote_average;
        }
        let promedio = puntaje / (i+1);
        return promedio;
    },

    contar : function (arreglo){
        let arregloContado = arreglo.length;
        return arregloContado;
    },

    ordenarSalas : function (arreglo){
        let arregloOrdenado = arreglo.sort( function (x, y) {
            if (x.name > y.name) { return 1; }
            else if (x.name < y.name) { return -1; }
            else { return 0; }
        });
        return arregloOrdenado;
    },

};
module.exports = herramientas;