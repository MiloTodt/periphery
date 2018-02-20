const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var request = require('request'); //For IP lookup of guests. 

request('https://iptoearth.expeditedaddons.com/?api_key=4G13RQ86DIZ1072ST0WFL9P5KCJA64HOMXUE3259NV78BY&ip=68.10.149.45', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

express()

  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
