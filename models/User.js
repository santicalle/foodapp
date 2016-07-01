/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Rol = require('./Rol');


var UserSchema = new Schema({
	name: { type: String, required: true, trim: true },	
	lastName: { type: String, required: true, trim: true },	
	email: String,
	password: String,
	isActive: { type: Boolean, required: true },
	roles: [ { type: Schema.Types.ObjectId, ref: 'Rol' } ],
	addresses: [ { name: String, address: String, details: String, latitude: String, longitude: String, isActive: Boolean } ],
	phones: [ { name: String, number: String, isActive: Boolean } ]
}, { collection: 'users' });

var User = mongoose.model('User', UserSchema);

module.exports = Company;