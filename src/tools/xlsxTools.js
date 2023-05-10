var XLSX = require('xlsx');
const __path = '../files';




const parseJson = (__filename, __sheetName = null) => {
    
    var wb = XLSX.readFile(__filename);
    
};

parseJson(`${__path}/yumi.xlsx`)