const xlsx = require('xlsx');
const PATH_XLSX = process.env.PATH_XLSX || './src/files';

const getAll = (resquest, response) => {

    const workbook = xlsx.readFile(`${PATH_XLSX}/yumi.xlsx`);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const dataJ = worksheet;

    const dynamicDate = {
        "resquest": {
            'user-agent': resquest.headers['user-agent'],
            'host': resquest.headers['host']
        },
        "file": dataJ['!ref'].split(":")
    };
    response.status(200).send(dynamicDate);
};

module.exports = {
    getAll
};