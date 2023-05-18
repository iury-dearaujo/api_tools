const utils = require('./../api/utils/js_utils')

const MB = 5; // 5 MB
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const fileSizeLimiter = (req, res, next) => {
    
    const files = req.files
    const filesOverLimit = []
   
    let new_files = utils.toArray(files.files)

    Object.keys(new_files).forEach(key => {
        if (new_files[key].size > FILE_SIZE_LIMIT) {
            filesOverLimit.push(new_files[key].name)
        }
    })

    if (filesOverLimit.length) {
        const properVerb = filesOverLimit.length > 1 ? 'are' : 'is';
        const sentence = `Upload failed. ${filesOverLimit.toString()} ${properVerb} over the file size lomit of ${MB} MB.`.replace(/\,/gm, ", ");

        const message = filesOverLimit.length < 3
            ? sentence.replace(",", " and")
            : sentence.replace(/,(?=[^,]*$)/, " and");

        return res.status(413).json({
            status: "error",
            message: message
        })

    }

    next()
}

module.exports = fileSizeLimiter 