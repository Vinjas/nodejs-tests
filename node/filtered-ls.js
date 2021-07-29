const fs = require("fs")
const path = require("path")

const folder = process.argv[2]
const filterExtension = "." + process.argv[3]

fs.readdir(folder, (err, list) => {
    if(err) {
        return console.error(err)
    }
    
    list.forEach(element => {
        if(path.extname(element) === filterExtension) {
            console.log(element)
        }
    })

    /*let filterList = list.filter(file => {
        let regex = new RegExp(`.${filterExtension}$`, "g")
        return file.match(regex)
    })

    for(let i = 0; i < filterList.length; i++) {
        console.log(filterList[i])
    }*/
});
