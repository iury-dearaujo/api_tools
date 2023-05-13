const xlsx = require('xlsx');
const PATH_XLSX = process.env.PATH_XLSX || './downloads';

const slash = (resquest, response) => {
    const _resquest_H = resquest.headers;
    const _response = resquest;
    
    response.status(200).send(_response);
}

const all = (resquest, response) => {
    const _resquest = resquest.headers;

    const workbook = xlsx.readFile(`${PATH_XLSX}/yumi.xlsx`);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const dataJ = worksheet;

    const dynamicDate = {
        "resquest": {
            'user-agent': resquest.headers['user-agent'],
            'host': resquest.headers['host']
        },
        "file_info": dataJ['!ref'].split(":"),
        "file": dataJ
    };
    response.status(200).send(dynamicDate);
};

module.exports = {
    all,
    slash
};
