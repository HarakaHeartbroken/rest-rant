require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    console.log("Test")
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>RUN, COWARD! I HUNGER!</h1>')
})


// console.log("BEWARE, AM SINNISTAR")
app.listen(process.env.PORT, function (){
    console.log("I LIVE AGAIN!")
})

//Adjusting code for test