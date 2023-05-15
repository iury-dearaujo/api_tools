const xlsx = require('xlsx');

const all = (resquest, response) => {
    const _resquest_H = resquest.headers;

    response.status(200)
    response.send(
        <h1>I love you!</h1>
    )
}

module.exports = {
    all,
    slash
};
