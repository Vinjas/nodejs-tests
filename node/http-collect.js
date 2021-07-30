const http = require("http")
const bl = require("bl")

const url = process.argv[2]

// first line = integer representing the number of characters received from the server
// second line = complete String of characters sent by the server

http.get(url, (response) => {
    let allData;
    
    let completeString = "";
    let numberOfCharacters = 0;
    
    bl

    response
    .on("data", (data) => allData = data.toString())
    .on("end", (end) => {
        allData.toString()
    })
    .on("error", console.error)
    .pipe(bl())
})