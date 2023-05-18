const express = require('express');
const cors = require('cors');
const multer = require('multer');
const router = require('./api/router');
const app = express();

var fileupload = require('express-fileupload');

const upload = multer({ dest: "./uploads", });

app.use(fileupload());
app.set('trust proxy', true);
app.use(cors());
app.use(router)

module.exports = app;