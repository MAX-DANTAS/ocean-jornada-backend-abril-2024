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
  // Endepoint Read By ID --> {get} /item/
   app.get('/item/:id', function (req, res){
    const id = req.params.id

  const item = lista[id -1]

  res.send(item)
   })
// Espeifcamos que o corpo da requisição será em JSON
  app.use(express.json())

//Endepoint Create --> [Post]/ item
app.post('/item', function(req, res){

  const item = req.body.nome

  lista.push(item)
  res.send('Item adicionado com sucesso ' + item)
})

app.listen(3000)