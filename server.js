const express = require('express');

const app = express()

const username = 'Mathilda'


app.get('/greeting/:username', (req, res) => {
    res.send(`What a delight it is to see you once more, ${username}`)
})

app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    if(isNaN(number)){
        res.send('You must specify a number')
    } else {
        const maxNumber = parseInt(number)

        const roll = Math.floor(Math.random() * (maxNumber + 1))
        res.send(`You rolled a ${roll}.`)}
})

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
app.get('/collectibles/:index', (req, res) => {
    if(idx(0)){
        res.send('So, you want the shiny ball? For 5.95 it can be yours!')
    }
})

app.listen(3000, () => {
    console.log('I am listening')
})