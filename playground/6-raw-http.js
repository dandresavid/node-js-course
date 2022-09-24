const https = require('https')

const url = 'https://api.darksky.net/forecast/82e142295847a304eebf3fcc1eb95a8e/45,-75'

const request = https.request(url,(response)=>{

    let data = ''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
        //console.log(chunk)
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()