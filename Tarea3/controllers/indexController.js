const controlador = {

<<<<<<< HEAD
    Main: (req, res) => {
        let home = { main: "<h1> Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!. </h1>" };
        render.send('index', home);
=======
    Main : (req, res) => {
        let main = { home : "Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!."};
        res.render('index', main);
>>>>>>> 397a5155c49a40b51fd8b8873d5d3ae1de3a2b01
    },


};

module.exports = controlador;