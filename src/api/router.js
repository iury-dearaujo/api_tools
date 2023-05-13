const express = require('express');
const router = express.Router();
const rExcelController = require('./controllers/rExcelController');

router.get('/excel', rExcelController.all);

module.exports = router;