require('../src/db/mongoose')
const User = require('../src/models/user')

//634a3d1c7d7153bb738e4b02

// User.findByIdAndUpdate('634a57bb7f98acbbbf114c5a', { age: 1 }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('634a57bb7f98acbbbf114c5a', 2).then((count) => {
    console.log(count)
}).catch((e) =>{
    console.log(e)
})