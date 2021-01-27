const express = require('express')
const router = express.Router()
const db = require('../../models') //'./models/index.js'
const Todo = db.Todo

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {  
  const name = req.body.name
  const userId = req.user.id

  return Todo.create({ name, UserId: userId }) 
      .then(() => res.redirect('/'))
      .catch(error => console.error(error))
})

router.get('/:id', (req, res) => { //have to be put after /new
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})


module.exports = router