var heroes = require("../data/heroes");

const controlador = {

    Main: (req, res) => {
        let main = { home : "Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!." };
        console.log("cargo main");
        res.render('index', main);
    },

    Todos : (req, res) => {
        let response = { data : heroes, };
        res.render('heroes', response);
    },

};

module.exports = controlador;