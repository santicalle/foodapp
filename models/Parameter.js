/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParameterSchema = new Schema({    
    name: { type: String, required: true, trim: true },
    value: { type: String },
    isActive: { type: Boolean, required: true },
	details: [ { name: String, details: String, numberId: Number, value: String, order: Number, isActive: Boolean } ]
}, { collection: 'parameters' });

var Parameter = mongoose.model('Parameter', ParameterSchema);

module.exports = Parameter;