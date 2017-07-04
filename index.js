'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const host = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 4000;

// Display HTML and CSS
app.use(express.static(__dirname + '/views/'));
app.set('views', 'views');
app.set('view engine', 'ejs');

// Parse req.body
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());

/*
/ Router
*/

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});