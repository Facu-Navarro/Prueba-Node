var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.Main);
router.get('/heroes', indexController.Todos);

module.exports = router;