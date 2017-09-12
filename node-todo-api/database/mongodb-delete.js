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

  db.collection('Users').deleteMany({name: 'Ali Kahwaji'}).then((result) => {
    console.log(result)
  })

  db.collection('Users').deleteOne({age: 32}).then((result) => {
    console.log(result)
  })

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59b86728b904c0aac11cc31e')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  })

  // db.close()
})
