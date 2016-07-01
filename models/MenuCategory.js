/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuCategorySchema = new Schema({
    name: { type: String, required: true, trim: true },
    isActive: { type: Boolean, required: true }
}, { collection: 'menuCategories' });

var MenuCategory = mongoose.model('MenuCategory', MenuCategorySchema);

module.exports = MenuCategory;