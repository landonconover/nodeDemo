const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

//add middleware to server client files
app.use(express.static('client'))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

let Todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false
  },
  {
    todoID: 3,
    todoText: "Go to the store",
    todoComplete: true
  }
];

//return all todos
app.get('/todos', (req, res) => {
  res.send(Todos)
})

//return a single todo by id
app.get('/todo', (req, res) => {
  res.send(Todos)
})

//add todo
app.delete('/todo/:todoID/:todoText', (req, res) => {
    console.log(req.params)

    res.send(Todos) 
  })

  //write an endpoint to handle a DELETE TODO

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})