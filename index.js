require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    console.log("Test")
    res.send('I AM SINNISTAR! BEWARE, I LIVE!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>RUN, COWARD! I HUNGER!</h1>')
})


// console.log("BEWARE, AM SINNISTAR")
app.listen(process.env.PORT, function (){
    console.log("I LIVE AGAIN!")
})

//Adjusting code for test