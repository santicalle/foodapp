/**
 * Created by Santiago Calle on 13/6/2016.
 */

var Parameter = require('../models/Parameter');

exports.getAllParameter = function(req, res, next) {
    console.log('Get all parameters');
    Parameter.find(function (err, parameter) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: parameter
            });
        }
    });
};

exports.getParameterById = function(req, res, next) {
    console.log('Get specific parameter ' + req.params.parameterId);
    Parameter.findById(req.params.parameterId, function (err, parameter) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: parameter
            });
        }
    })
};

exports.createParameter = function (req, res, next) {
    console.log('Enter to create a new parameter ' + req.body.name);
    var parameter = new Parameter();
    parameter.name = req.body.name;
    parameter.value = req.body.value;
    parameter.isActive = 1;
    parameter.details = req.body.details;

    parameter.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: { message: "Parameter created." }
            });
        }
    });
};

exports.updateParameter = function (req, res, next) {
    console.log('Update specific parameter ' + req.params.parameterId);
    Parameter.findById(req.params.parameterId, function (err, parameter) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            parameter.name = req.body.name;
            parameter.value = req.body.value;
            parameter.isActive = req.body.isActive;
            parameter.details = req.body.details;

            parameter.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    });
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'Parameter updated.'
                    });
                }
            });
        }
    });
};

exports.deleteParameter = function (req, res, next) {
    console.log('Delete specific parameter ' + req.params.parameterId);
    Parameter.remove({
        _id : req.params.parameterId
    }, function (err, parameter) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: { message: 'Parameter deleted.' }
            });
        }
    });
};