const http = require("http")

const url = process.argv[2]

const callback = function(response) {
    response
    .setEncoding("utf8")
    .on("data", console.log)
    .on("error", console.error)
}

http.get(url, callback)

