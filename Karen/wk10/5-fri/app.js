var open_weather_api_key = process.env.OPEN_WEATHER;
var aussie_city = process.argv[2];

var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=' + aussie_city + ',Australia&units=metric&appid=' + open_weather_api_key, function (error, response, body) {
  console.log('Temperature in ' + aussie_city + ':', JSON.parse(body).main.temp);
});
