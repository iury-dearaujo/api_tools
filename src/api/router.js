const express = require('express');
const router = express.Router();

const fileExtLimiter = require('./../middleware/fileExtLimiter');
const fileSizeLimiter = require('./../middleware/fileSizeLimiter');;
const filesPayloadExists = require('./../middleware/filesPayloadExists');

const excel = require('./controllers/excel');
const yumi = require('./controllers/yumi');
const home = require('./controllers/home');

router.delete('/excel', excel.deleteFile);
router.get('/excel', excel.readfile);
router.post('/excel',
    filesPayloadExists,
    fileExtLimiter(['.xlsx',  '.xlsm',  '.xls',  '.csv']),
    fileSizeLimiter,
    excel.upload);

router.get('/yumi', yumi.all);
router.get('/', home.all);

module.exports = router;