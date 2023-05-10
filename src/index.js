const app = require('./api/app')

const PORT_NAME = process.env.PORT || 54581;

app.listen(PORT_NAME, () => {
    console.log(`Listening on port ${PORT_NAME}`);
});