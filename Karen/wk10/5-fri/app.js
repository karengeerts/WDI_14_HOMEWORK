var aussie_city = process.argv[2];

var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=' + aussie_city + ',Australia&units=metric&appid=c6697158c41d4842e9031e32615b0532', function (error, response, body) {
  console.log('Temperature in ' + aussie_city + ':', JSON.parse(body).main.temp);
});
