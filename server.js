const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')

// set Template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})

// use express layout SHOULD BE AFTER ROUTES
app.use(expressLayout)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})