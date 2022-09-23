const request = require('request')


const forecast = (latitud,longitud, callback) => {
    const url2 = 'http://api.weatherstack.com/current?access_key=9ddf50d9b53132f5f46620aaa9842b4d&query=' + latitud + ',' + longitud + '&units=f';
    const url = 'https://api.darksky.net/forecast/82e142295847a304eebf3fcc1eb95a8e/' + latitud + ',' + longitud 
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback(`Unable to connect to weather services! ${body}`, undefined)
        } else if (body.error) {
            callback(`Unable to find location. Try another search.${body}`, undefined)
        } else {
            callback(undefined, { 
                precipProbability: body.currently.precipProbability,
                temperature: body.currently.temperature,
                summary: body.currently.summary
            })
        }
    })
}

module.exports = forecast
