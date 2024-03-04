var express = require("express")
var app = express()

// The "Hello Word" endpoint
app.get('/', function (req, res) {
    res.send('hello world')
})

// Listen!
app.listen(3000)