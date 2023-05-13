const xlsx = require('xlsx');
const PATH_XLSX = process.env.PATH_XLSX || './downloads';

const all = (resquest, response) => {
    const _resquest = resquest.headers;

    const workbook = xlsx.readFile(`${PATH_XLSX}/yumi.xlsx`);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const dataJ = worksheet;

    const dynamicDate = {
          "to": "yumi",
          "from": "iury",
          "msg": "Yu sou apaixonado por você!"
        };/*{
        "resquest": {
            'user-agent': resquest.headers['user-agent'],
            'host': resquest.headers['host']
        },
        "file_info": dataJ['!ref'].split(":"),
        "file": dataJ
    };*/
    response.status(200).send(dynamicDate);
};

module.exports = {
    all
};
