const xlsx = require('xlsx');
const utils = require('./../utils/js_utils')
const PATH_XLSX = process.env.PATH_XLSX || './downloads';

const deleteFile = (resquest, response) => {

}

const readfile = (resquest, response) => {
    const _resquest = resquest.headers;

    const workbook = xlsx.readFile(`${PATH_XLSX}/yumi.xlsx`);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const dataJ = worksheet;

    const dynamicDate = {
        "resquest": {
            'user-agent': resquest.headers['user-agent'],
            'host': resquest.headers['host']
        },
        "file_info": dataJ['!ref'].split(":")
    };
    response.status(200);
    response.send(dynamicDate);
};

const upload = (req, res) => {
    const files = req.files

    let new_files = utils.toArray(files.files)

    newMessage = "[";
    Object.keys(new_files).forEach(key => {
        newMessage = `${newMessage}, { "name": "${new_files[key].name}", "size": ${new_files[key].size} }`;
    })
    newMessage = newMessage.replace(/(\[\,+ +)/gm, '[') + "]"

    newMessage = (JSON.parse(newMessage))
    console.log(newMessage)

    return res.json({
        status: "OK",
        message: "Uploaded",
        filelist: newMessage
    })
}

module.exports = {
    readfile,
    upload,
    deleteFile
};

