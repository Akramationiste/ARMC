const User = require('./user');
const mongoose = require('mongoose');

const Candidate = User.discriminator('Candidate', new mongoose.Schema({
    diplome: String,
    experience: String,}),
    );


module.exports = mongoose.model('Candidate'); 