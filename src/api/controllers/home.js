const all = (resquest, response) => {
    
    response.status(200)
    response.send("HOME")

}

module.exports = {
    all
};