const express = require('express');
const router = express.Router();
const rExcelController = require('./controllers/rExcelController');
const yumi = require('./controllers/yumi');

router.get('/excel', rExcelController.all);
router.get('/yumi', yumi.all);
router.get('/', rExcelController.slash);

module.exports = router;