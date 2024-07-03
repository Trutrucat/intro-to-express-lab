const express = require('express')

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
    const index = req.params.index
    const collectible = collectibles[index]
     if(!collectible) {
        res.send('This item is not yet in stock. Check back soon!')

        const response = `So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`
        res.send(response)}

        
})

app.listen(3000, () => {
    console.log('I am listening')
})