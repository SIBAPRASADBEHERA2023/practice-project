const express = require('express')
const app = express()

app.use( function(req, res,next) 
{
    console.log('Middleware is working')
    next()
})
app.get('/', function(req, res) {
        res.send('HELLO WORLD')
})
app.get('/about', function(req, res) {
    res.send('this is about page')
})
app.get('/contact', function(req, res) {
    res.send('this is contact page')
})

app.listen(3000)



