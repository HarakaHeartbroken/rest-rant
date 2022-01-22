require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('I AM SINNISTAR! BEWARE, I LIVE!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>RUN, COWARD! I HUNGER!</h1>')
})

app.listen(process.env.PORT)


//Adjusting code for test