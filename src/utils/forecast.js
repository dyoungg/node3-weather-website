const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7393d924dc1b76f1bba2b7e5f8122a45&query='+ latitude + ',' + longitude + '&units=f'

    request ({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. And it feels like ' + body.current.feelslike)
        }        
    })
}

module.exports = forecast