const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');


module.exports = function(app) {
	console.log("the main root", __dirname)

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

}