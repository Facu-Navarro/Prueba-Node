var heroes = require("../data/heroes");

const controlador = {

    Todos: (req, res) => {
        let response = { data: heroes, };
        res.render('heroes', response);
    },

    OneHero: (req, res) => {
        let respuesta = 0;
        let id = req.params.id;
        let i = 0;
        let max = heroes.length;
        let heroeElegido = {};
        for (let i = 0; i < max; i++) {
            if (heroes[i].id == id) {
                heroeElegido = heroes[i];
                respuesta = 1;
            }
        }
        console.log(respuesta);
        let respon = { data: "Heroe no encontrado", };
        if (respuesta == 1) {
            respon = { data: "Hola, mi nombre es " + heroeElegido.nombre + " y soy " + heroeElegido.profesion, };
            console.log(respon);
        }
        res.render('heroeIndividual', respon);
    },

    OneHeroBio: (req, res) => {
        let id = req.params.id;
        let ok = req.params.ok;
        let respuesta = 0;
        let max = heroes.length;
        let heroeElegido = {};
        for (let i = 0; i < max; i++) {
            if (heroes[i].id == id) {
                heroeElegido = heroes[i];
                respuesta = 1;
            }
        }
        if ((ok == "ok") && (respuesta == 1)) {
            respuesta = 2;
        }
        let respon = { data: "No encontramos un héroe para mostrarte su biografía", };
        if (respuesta == 1) {
            respon = {
                data: "Hola, mi nombre es " + heroeElegido.nombre,
                msj: "Lamento que no desees saber más de mi :(",
            };
            console.log(respon);
        }
        if (respuesta == 2) {
            respon = {
                data: "Hola, mi nombre es " + heroeElegido.nombre,
                msj: heroeElegido.resenia,
            };
            console.log(respon);
        }
        res.render('heroeBio', respon);
    },

};

module.exports = controlador;