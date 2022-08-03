console.log('Client side javascript file is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) =>{
    console.log(data)
  })
})

fetch('http://localhost:3500/weather?address=Boston').then((response) => {
  console.log('RESPONSE', response)
  response.json().then((data) =>{
    if (data.error) {
      console.log('ERROR')
    } else {
      console.log('Location',data.location)
      console.log('Forecast',data.forecastdata)
    }
  })
})
