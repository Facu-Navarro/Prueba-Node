const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroesControllers");

router.get("/", heroesController.mostrar);
router.get("/detalle/:id", heroesController.detalle);
router.get("/bio/:id/:ok?", heroesController.biografia);

module.exports = router;