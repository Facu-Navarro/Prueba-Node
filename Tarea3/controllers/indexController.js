const controlador = {

    Main : (req, res) => {
        let home = { main : "<h1> Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!. </h1>"};
        res.send('index', home);
    },


};

module.exports = controlador;