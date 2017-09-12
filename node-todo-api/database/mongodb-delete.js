// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('Connect to mongodb server')

  db.collection('Todos').deleteMany({text: 'Title to add'}).then((result) => {
    console.log(result)
  })

  db.collection('Todos').deleteOne({text: 'Name to add'}).then((result) => {
    console.log(result)
  })

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result)
  })

 // db.close()
})
