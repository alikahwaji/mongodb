// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('Connect to mongodb server')
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59b7968db904c0aac11cbe90')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: true
  // }).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59b79274e41035723033d322')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b86aaeb904c0aac11cc3a0')
  }, {
    $set: {
      name: 'Ali Kahwaji'
    },
    $inc: {
      age: 8
    }
  }, {
    returnOriginal: 'Mohammed Kahwaji'
  }).then((result) => {
    console.log(result)
  })
  // db.close()
})
