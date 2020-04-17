const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));

const controlador = {

    Consulta: (req, res) => {
        let resp = { heroesTodos: heroes };
        res.render('heroes', resp);
    },

    MostrarHeroe: (req, res) => {
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
        if (respuesta == 1) {
            res.render("<h1>Heroe Elegido: " + heroeElegido.nombre + "</h1><h1>Profesion: " + heroeElegido.profesion + "</h1>");
        } else {
            res.render("<h1>Heroe no encontrado</h1>");
        }
    },

    MostrarHeroeCompleto: (req, res) => {
        let id = req.params.id;
        let confirma = req.params.ok;

        console.log(id);

    },

};

module.exports = controlador;