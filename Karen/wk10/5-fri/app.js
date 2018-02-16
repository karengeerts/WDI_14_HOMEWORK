var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,Australia&units=metric&appid=c6697158c41d4842e9031e32615b0532', function (error, response, body) {
  console.log('Temperature in Melbourne:', JSON.parse(body).main.temp);
});
