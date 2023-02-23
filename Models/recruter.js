const User = require('./user');
const mongoose = require('mongoose');

const Recruter = User.discriminator('Recruter', new mongoose.Schema({
    company: String,
    position: String,}),
    );


module.exports = mongoose.model('Recruter'); 