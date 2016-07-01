/**
 * Created by Santiago Calle on 13/6/2016.
 */

var QuestionType = require('../models/QuestionType');

exports.getAllQuestionType = function(req, res, next) {
    console.log('Get all questionTypes');
    QuestionType.find(function (err, questionType) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: questionType
            });
        }
    });
};

exports.getQuestionTypeById = function(req, res, next) {
    console.log('Get specific questionType ' + req.params.questionTypeId);
    QuestionType.findById(req.params.questionTypeId, function (err, questionType) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: questionType
            });
        }
    })
};

exports.createQuestionType = function (req, res, next) {
    console.log('Enter to create a new questionType ' + req.body.name);
    var questionType = new QuestionType();
    questionType.name = req.body.name;
    questionType.numberId = req.body.numberId;
    questionType.isActive = 1;

    questionType.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: { message: "QuestionType created." }
            });
        }
    });
};

exports.updateQuestionType = function (req, res, next) {
    console.log('Update specific questionType ' + req.params.questionTypeId);
    QuestionType.findById(req.params.questionTypeId, function (err, questionType) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            questionType.name = req.body.name;
            questionType.numberId = req.body.numberId;
            questionType.isActive = req.body.isActive;

            questionType.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    });
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'QuestionType updated.'
                    });
                }
            });
        }
    });
};

exports.deleteQuestionType = function (req, res, next) {
    console.log('Delete specific questionType ' + req.params.questionTypeId);
    QuestionType.remove({
        _id : req.params.questionTypeId
    }, function (err, questionType) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: { message: 'QuestionType deleted.' }
            });
        }
    });
};