// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server')
  }
  console.log('Connect to mongodb server')

  // db.collection('Todos').find({
  //   _id: new ObjectID('59b7968db904c0aac11cbe90')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  db.collection('Todos').find({text: 'Name to add'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  })
 // db.close()
})
