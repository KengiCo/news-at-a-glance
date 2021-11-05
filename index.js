const PORT = 8000;

const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors())

// app.METHOD(PATH; HANDLER)

app.get("/", function(req, res) {
    res.json("this is it")
})

app.get("/results", (req, res) => {
    axios(url).then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        articles = []
        $(".fc-item__title", html).each(function() {
            const title = $(this).text()
            const link = $(this).find("a").attr("href")
            articles.push({title,link})
        })
        res.json(articles)
    }).catch(err => console.log(err))

})

let url = "https://www.theguardian.com/"
let urlNorge = "https://www.vg.no/"


// THIS PART IS TO GRAB FROM VG
// axios(urlNorge).then(response => {
//     const html = response.data
//     const $ = cheerio.load(html)
//     articles = []
//     $(".article-container", html).each(function() {
//         const title = $(this).find("h3").text()
//         const link = $(this).find("a").attr("href")
//         articles.push({title,link})
//     })
//     console.log(articles)
// }).catch(err => console.log(err))


app.listen(PORT, () => console.log(`server running on ${PORT}`));
