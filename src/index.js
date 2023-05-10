const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const PORT_NAME = process.env.PORT || 54581;

app.set('trust proxy', true)
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (require, response) => {
    const dynamicDate = {
        "require.ip": require.ip
    };

    response.send(dynamicDate)
});

app.listen(PORT_NAME, () => {
    console.log(`Listening on port ${PORT_NAME}`);
});