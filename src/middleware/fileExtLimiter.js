const path = require('path');
const utils = require('./../api/utils/js_utils')

const fileExtLimiter = (allowedExtArray) => {

    return (req, res, next) => {

        const files = req.files
        const fileExtensions = []
        
        let new_files = utils.toArray(files.files)

        Object.keys(new_files).forEach(key => {
            fileExtensions.push(path.extname(new_files[key].name))
        })

        const allowed = fileExtensions.every( ext => allowedExtArray.includes(ext));
        
        if (!allowed) {
            const sentence = `Upload failed. Only ${allowedExtArray.toString()} files allowed.`.replace(/\,/gm, ", ");
            return res.status(422).json({
                status: "error",
                message: sentence
            })
        }

        next()
    }
}

module.exports = fileExtLimiter