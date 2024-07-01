const express = require('express');

const app = express()

const username = 'Mathilda'


app.get('/greeting/username', (req, res) => {
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

app.listen(3000, () => {
    console.log('I am listening')
})