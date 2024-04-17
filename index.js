const express = require('express')

const app = express()

app.get('/', function (req, res) {

  res.send('Hello World')

})

app.get('/oi', function (req, res) {

    res.send('Olá, mundo')

  })

// lista de intens
  const lista =['Rick Sanchez', 'Morty Smith', 'Summer Smith']

  // Endpoint Read ALL --> [GET] / item
  app.get('/item', function (req, res) {
    res.send(lista)
  })
app.listen(3000)