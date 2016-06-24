/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
    name: { type: String, required: true, trim: true },
    tags: { type: String, trim: true },
    isDelivery: { type: Boolean, required: true },
    isCash: { type: String, required: true },
    isCreditCard: { type: String, required: true },
    isActive: { type: Boolean },
    latitude: String,
    longitude: String,
    timetable: [
        { day: String,  open: String, close: String, isClose: Boolean }
    ]
}, { collection: 'companies' });

var Company = mongoose.model('Company', CompanySchema);

module.exports = Company;