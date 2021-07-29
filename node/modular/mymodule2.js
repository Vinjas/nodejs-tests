const fs = require("fs")

module.exports = function(folder) {
    fs.readdir(folder, (err, list) => {
        if (err) {
            console.error(err)
        }
    
        console.log(list)
    })
}