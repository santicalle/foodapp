/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = require('./Category');

var CompanySchema = new Schema({
    name: { type: String, required: true, trim: true },
    details: { type: String },
    categories: [ { type: Schema.Types.ObjectId, ref: 'Category' } ],
    isDelivery: { type: Boolean, required: true },
    isCash: { type: Boolean, required: true },
    isCreditCard: { type: Boolean, required: true },
    isActive: { type: Boolean, required: true },
    isOpenNow: { type: Boolean, required: true },
    timetable: [ {  } ]
}, { collection: 'companies' });

var Company = mongoose.model('Company', CompanySchema);

module.exports = Company;