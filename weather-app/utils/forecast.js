const request = require('request')

const geocode = (latitud,longitud, callback) => {
    const url = 'https://api.darksky.net/forecast/82e142295847a304eebf3fcc1eb95a8e/' + latitud + ',' + longitud + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                precipProbability: body.currently.precipProbability,
                temperature: body.currently.temperature,
                summary: body.currently.summary
            })
        }
    })
}

module.exports = geocode
