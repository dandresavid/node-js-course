const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// taskSchema.pre('save', async function(next){

//     const task = this
//     if(task.isModified())
//     next()
// })

//Model definition for Tasks
const Task = mongoose.model('Task', taskSchema )

module.exports = Task