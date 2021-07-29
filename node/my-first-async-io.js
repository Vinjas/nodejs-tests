const fs = require("fs")

const filePath = process.argv[2]

function countLines() {
    fs.readFile(filePath, (err, contents) => {
        let newLines = contents.toString().split("\n").length - 1
        try {
            console.log(newLines)
        } catch {
            console.error(err)
        }
    })
}

countLines();
