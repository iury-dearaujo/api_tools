import XLSX from 'xlsx';

const parseJson = (__filename) => {
    const excelData = XLSX.readFile(__filename);
    return Object.keys(excelData.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name], { header: 1, blankrows: true}),
    }));
};

parseJson("../files/yumi.xlsx").forEach((element) => {
    console.log(element.data)
})