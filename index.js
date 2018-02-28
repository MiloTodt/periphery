//This is the file that handles the Node routing. It translates HTTP requests into responses. The web pages are in /pages/views/
//Currently /views/pages/splash.ejs is the default.

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;


express()

  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/splash'))
  .get('/splash', (req, res) => res.render('pages/splash'))	
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
