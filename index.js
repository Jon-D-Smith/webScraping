const axios = require('axios')
const cheerio = require("cheerio")
const express = require('express')
const app = express()
const PORT = 3000

const url = 'https://www.theguardian.com/uk'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.fc-item__title', html).each(function() {
           const title =  $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    })
    .catch(error => {
        console.log(error)
    })



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})