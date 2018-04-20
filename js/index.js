document.addEventListener("DOMContentLoaded", function() {
//  var API_KEY = "49d0e7851426e4b9";
//  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
//  var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";

  start()
});

function start(){
  fetch('http://api.wunderground.com/api/49d0e7851426e4b9/hourly/q/NY/New_York.json')
  .then(res => res.json())
  .then(jsonOne => getMoreData(jsonOne))
}


function getMoreData(jsonOne){
  fetch('http://api.wunderground.com/api/49d0e7851426e4b9/conditions/q/NY/New_York.json')
  .then(res => res.json())
  .then(jsonTwo => useData(jsonOne,jsonTwo))
}

// function getEvenMoreData(jsonOne, jsonTwo, jsonThree){
//
// }

function useData(data1, data2){
console.log(data1
)
console.log(data2)
  // console.log(data1.hourly_forecast.map(data => {
  //   return data.temp.english + '\xB0F'
  // }))
  // console.log(data1.hourly_forecast.map(data=>{
  //   return data.humidity
  // }))
  // console.log(data1.hourly_forecast.map(data=>{
  //   return data.FCTTIME.hour
  // }))

  let temperature = data1.hourly_forecast.map(data => {
    return data.temp.english
  })
  let humidity = data1.hourly_forecast.map(data=>{
    return data.humidity
  })
  let hours = data1.hourly_forecast.map(data=>{
    return data.FCTTIME.hour
  })

var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

var mixedChart = new Chart(ctx, {

  type: 'bar',
  data: {
    datasets: [{
          label: "Temperature \xB0F",
          data: temperature,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(0, 0, 0, 0)'
        }, {
          label: 'Humidity %',
          data: humidity,
          // Changes this dataset to become a line
          type: 'line',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderColor: 'rgba(0, 0, 0, 0)'
        }, {
          label: 'Fara\'s preferred temperature',
          data: ['65','65','65','65','65','65','65','65','65','65','65','65','65','65','65','65','65','65',
          '65','65','65','65','65','65','65','65', '65','65','65','65','65','65','65','65','65','65','65'],
          type: 'line',
          borderColor: 'crimson',
          pointRadius: 0,
          borderWidth: 0.5,
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }],
    labels: hours
  },
  options: {
    legend: {
        display: true,
        labels: {
            fontColor: 'black',
            xAxisID: 'Hour (Military Time)'
        }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Humidity %  /  Temperature \xB0F"
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Hour In The Day (Military Time)'
        }
      }]
    }
  }
});

  let conditions = document.getElementById('conditions')
  let currentTemp = data2.current_observation.temp_f
  let currentHumidity = data2.current_observation.relative_humidity.split('')[0] + data2.current_observation.relative_humidity.split('')[1]
  let currentPrecipitation = data2.current_observation.precip_1hr_in
  let currentTime = data2.current_observation.observation_time_rfc822.split(' ')[4]
//console.log('i made it')
  let now = document.getElementById('now')
  now.innerHTML = `${currentTime}`
  conditions.innerHTML = `
  <div>
    <div class="floating-box display">
    <span class='mini'>Current Temperature:</span><br>${currentTemp}<span class="units">\xB0F</span><br>
    </div>
    <div class="floating-box display">
    <span class='mini'>Humidity:</span><br>${currentHumidity}<span class="units">%</span>
    </div>
    <div class="floating-box display">
    <span class='mini'>Precipitation:</span><br>${currentPrecipitation}<span class="units">in</span>
    </div>
  </div>`

}
