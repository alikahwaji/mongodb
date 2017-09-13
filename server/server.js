var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

var newTodo = new Todo({
  text: 'Complete project'
})

newTodo.save().then((doc) => {
  console.log('Save to do', doc)

}, (e) => {
  console.log('Unable to save todo')
})

var newTask = new Todo({
  text: 'New project',
  completed: false,
  completedAt: 100
})

newTask.save().then((doc) => {
  console.log('Save new task', doc)
}, (e) => {
  console.log('Unable to save new task')
})
