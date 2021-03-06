// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('Connect to mongodb server')

  db.collection('Todos').insertOne({
    text: 'Something to add',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert data')
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.collection('Users').insertOne({
    name: 'Ali Kahwaji',
    age: 37,
    location: 'Auckland'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert users data', err)
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
  })

  db.close()
})
