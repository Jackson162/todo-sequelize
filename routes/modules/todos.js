const express = require('express')
const router = express.Router()
const db = require('../../models') //'./models/index.js'
const Todo = db.Todo

router.get('/:id/edit', (req, res) => {
  const userId = req.user.id
  const id = req.params.id  
  return Todo.findOne({ where: { id, UserId: userId } })
      .then(todo => res.render('edit', { todo: todo.toJSON() }))
      .catch(error => console.error(error))
})

router.put('/:id', (req, res) => { 
  const userId = req.user.id
  const id = req.params.id  
  const { name, isDone } = req.body
  return Todo.findOne({ where: { id, UserId: userId } })   //need complete object (not plain)
      .then(todo => {
          todo.name = name
          todo.isDone = isDone === 'on' //return true or false
          return todo.save()
      })
      .then(() => res.redirect(`/todos/${id}`))
      .catch(error => console.error(error))
})

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

router.delete('/:id', (req, res) => { 
  const userId = req.user.id
  const id = req.params.id 
  return Todo.destroy({ where: { id, UserId: userId } })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})


module.exports = router