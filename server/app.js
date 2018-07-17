// app.js
var express = require('express');
var app = express();

var IngCatController = require('./controller/ingredientCatController');
app.use('/ingcat', IngCatController);

module.exports = app;