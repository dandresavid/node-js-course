require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('63492eeafff04cde33629cb0', {}).then((task) =>{
//     console.log(task)
//     return Task.countDocuments({"completed": false})
// }).then((tasks)=>{
//     console.log(tasks)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=> {
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('634a45f67cb93004c5172c69').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})