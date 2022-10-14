// CRUD

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

 MongoClient.connect(connectionURL,{ useNewUrlParser: true}, (error, client)=>{
    if(error) {
        return console.log('Unable to connect to the database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("634911ed94965bbdbb0a0211")},(error, user) => {
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    //READ MANY
    // db.collection('users').find({age: 30}).toArray((error, users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({age: 30}).count((error, count) =>{
    //     console.log(count)
    // })

    //READ ONE
    // db.collection('task').findOne({_id: new ObjectID("63332b9a0555eaf5123be702")},(error, user) => {
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('task').find({completed: false}).toArray((error, tasks) => {
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(tasks)
    // })

    //UPDATE ONE
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("6332f2d7e66f632b909deb04")
    // }, {
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //UPDATE MANY
    // const updateTasks = db.collection('task').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    //DELETE ONE
    // const deleteTask = db.collection('task').deleteOne({
    //     description:'Pot plans'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    //DELETE MANY
    // const deleteUsers = db.collection('users').deleteMany({
    //     age:30
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

})