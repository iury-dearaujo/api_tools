const express = require('express');
const router = express.Router();
const rExcelController = require('./controllers/rExcelController');

router.get('/excel', rExcelController.all);
router.get('/', rExcelController.slash);

module.exports = router;