const extensionFilter = require("./mymodule.js")
//const fileRead = require("./mymodule2")
//fileRead(process.argv[2]);

const folder = process.argv[2]
const extension = process.argv[3]

extensionFilter(folder, extension, function(err, files) {
    if(err) {
        return console.error(err)
    }
    
    files.forEach(element => {
        console.log(element)
    })
})