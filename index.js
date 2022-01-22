const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('I AM SINNISTAR! BEWARE, I LIVE!')
})

app.listen(3000)


//Adjusting code for test