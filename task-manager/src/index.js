const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) =>{
//     if(req.method === 'GET'){
//         res.send('GET request is disable')
//     } else {
//          next()
//     }    
// })

// app.use((req,res, next) => {
//     res.status(500).send('Try latter we are in a maintainace window, Check back')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myfunction = async () =>{
    const token = await jwt.sign({_id: 'abc123'}, 'Thisismytoken', {expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'Thisismytoken')
    console.log(data)
}

myfunction()
