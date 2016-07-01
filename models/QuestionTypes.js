/**
 * Created by Santiago Calle on 7/6/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionTypeSchema = new Schema({
    name: { type: String, required: true, trim: true },
    numberId: { type: Number, required: true },
    isActive: { type: Boolean, required: true }
}, { collection: 'questionTypes' });

var QuestionType = mongoose.model('QuestionType', questionTypeSchema);

module.exports = QuestionType;