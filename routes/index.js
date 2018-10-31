var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const loadController = require('../controllers/loadController');
/* GET home page. */
router.get('/', mainController.insert,mainController.fiftyValues,mainController.names,mainController.final);


router.get('/load',loadController.insert);

module.exports = router;
