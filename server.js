const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')


// assets
app.use(express.static('public'))

// set Template engine
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/resources/views'))

require('./routes/web')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})