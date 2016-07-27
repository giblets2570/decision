'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	phone: String
});

module.exports = mongoose.model('User', UserSchema);