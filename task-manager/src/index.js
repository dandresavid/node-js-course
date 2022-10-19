const express = require('express')
require('./db/mongoose')
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

const User = require('./models/user')
const Task = require('./models/task')

const main =async () =>{
    // const task = await Task.findById('634f6993f0224284f3b4503a')
    // await task.populate('owner')
    // console.log(task.owner)

    const user = await User.findById('634f68beab4fc32b569b0fb1')
    await user.populate('tasks')
    console.log(user.tasks)
}
main()