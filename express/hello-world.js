const express = require("express")
const app = express()
const port = 5555

app.get("/", (req, res) => {
    res.send("Hello World! EHHHH")
})
app.get("/test", (req, res) => {
    res.send("TEST URL")
})



app.listen(port, () => {
    console.log(`Example at http://localhost:${port}`)
})