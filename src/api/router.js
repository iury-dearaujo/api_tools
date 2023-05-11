const express = require('express');
const router = express.Router();
const rXcelController = require('./controllers/rXcelController');

router.get('/rXcel', rXcelController.all);

module.exports = router;