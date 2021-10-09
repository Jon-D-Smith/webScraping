const axios = require('axios')
const cheerio = require("cheerio")
const express = require('express')
const app = express()
const PORT = 3000

const url = 'https://www.theguardian.com/uk'

axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
    })



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})