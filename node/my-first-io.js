const fs = require("fs")

const filePath = process.argv[2]
const fileContent = fs.readFileSync(filePath).toString()
const newLines = fileContent.split("\n").length - 1

try {
    console.log(newLines)
} catch (err) {
    console.error(err)
}