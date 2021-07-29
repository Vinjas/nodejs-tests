const fs = require("fs")
const path = require("path")

module.exports = function (folder, ext, callback) {
    fs.readdir(folder, (err, list) => {        
        if(err) {
            return callback(err, null)
        } 

        let results = [];

        list.forEach(elem => {
            if(path.extname(elem) === "." + ext) {
                results.push(elem)
            }
        })

        callback(null, results);
    })
}