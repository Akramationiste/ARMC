const express = require('express');

const offres = require('./offres');
const categories = require('./categories');
const candidatures = require('./candidatures');

const app = express.Router();


app.use('/offres', offres);
app.use('/categories', categories);
app.use('/candidatures', candidatures);
module.exports = app;

