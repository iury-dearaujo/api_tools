const express = require('express');
const router = express.Router();
const rExcelController = require('./controllers/rExcelController');
const yumi = require('./controllers/yumi');
const home = require('./controllers/home');

router.get('/excel', rExcelController.all);
router.get('/yumi', yumi.all);
router.get('/', home.all);

module.exports = router;