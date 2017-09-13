// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('Connect to mongodb server')
  db.colection('Todos').findOneAndUpdate({
    _id: new ObjectID('59b7968db904c0aac11cbe90')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })
  // db.close()
})
