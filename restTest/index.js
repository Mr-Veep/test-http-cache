const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const tests = require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

setHeader = (res) =>{
    res.header("cache-control", "public, max-age=120, s-maxage=60")
} 

app.get('/', function (req, res) {
    setHeader(res)
    res.send('Hello World!')
    console.log('SB Call me')
})

app.get('/testget', (req, res) => {
    setHeader(res)
    res.json(tests)
    console.log(tests)
})

app.post('/testpost', (req, res) => {
    let test = {id: tests.length,name: req.body.name}
    tests.push(test)
    res.status(201).json(test)
    console.log(test)
})
 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})