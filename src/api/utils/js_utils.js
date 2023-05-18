const toArray = (object) => {

    new_files = []

    let fileIsArray = ((Object.prototype.toString.call(object)) === '[object Array]') ? true : false;

    if (fileIsArray) {
        Object.keys(object).forEach(key => {

            if (!isNaN(parseInt(key))) {
                new_files.push(object[key])
            }
        })
    } else {
        new_files.push(object)
    }
    
    return new_files
}

module.exports = {
    toArray
}