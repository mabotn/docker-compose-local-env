var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/api/random-quote', (req, res) => {
    const quotes = [
        "It never hurts to ask. Unless you ask for hurt.",
        "An incompetent attorney can delay a trial for months or years. A competent attorney can delay one even longer.",
        "A gift, with a kind countenance, is a double present.",
        "No matter how far you travel or how much you run from it, can you ever really escape your past?",
        "For myself I am an optimist - it does not seem to be much use being anything else."
    ]

    res.json({
        quote: quotes[
            Math.floor(Math.random() * 5)
        ]
    })
})

app.listen(3000)