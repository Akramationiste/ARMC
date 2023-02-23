const User = require('./user');
const mongoose = require('mongoose');

const Admin = User.discriminator('Admin', new mongoose.Schema({}));

module.exports = mongoose.model('Admin'); 