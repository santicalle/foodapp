/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolSchema = new Schema({
    description: { type: String, required: true, trim: true },
    isActive: { type: Boolean, required: true }
}, { collection: 'roles' });

var Rol = mongoose.model('Rol', RolSchema);

module.exports = Rol;