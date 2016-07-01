/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var questionType = require('../controllers/QuestionType');

router.get('/all', questionType.getAllQuestionType);
router.get('/:questionTypeId', questionType.getQuestionTypeById);
router.post('/', questionType.createQuestionType);
router.put('/:questionTypeId', questionType.updateQuestionType);
router.delete('/:questionTypeId', questionType.deleteQuestionType);

module.exports = router;