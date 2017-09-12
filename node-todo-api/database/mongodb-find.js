// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('Connect to mongodb server')
  
  db.collection('Todos').find()
  db.close()
})
