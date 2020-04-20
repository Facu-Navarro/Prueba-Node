var express = require('express');
var router = express.Router();
var heroController = require('../controllers/heroController');

/* GET home page. */
router.get('/heroes', heroController.Todos);
router.get('/heroes/:id?', heroController.OneHero);
router.get('/heroes/:id/bio/:ok?', heroController.OneHeroBio);

module.exports = router;