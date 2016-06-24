/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    description: { type: String, required: true, trim: true },
    isActive: { type: Boolean, required: true }
}, { collection: 'categories' });

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;