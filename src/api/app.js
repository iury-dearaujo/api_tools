const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(router)

module.exports = app;