// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

 MongoClient.connect(connectionURL,{ useNewUrlParser: true}, (error, client)=>{
    if(error) {
        return console.log('Unable to connect to the database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 30
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to inset user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('task').insertMany([
    //     {
    //         description: 'clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plans',
    //         completed: false
    //     }
    // ])
})