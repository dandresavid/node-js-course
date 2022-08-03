const fs= require('fs')
// const book = {
//   title: 'Ego is my enemy',
//   athour: 'Ryan Holiday'
// }

// const  bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-JSON.json',bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Andres'
user.age = 28

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)



