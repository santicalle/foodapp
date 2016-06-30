/**
 * Created by Santiago Calle on 13/6/2016.
 */

var Company = require('../models/Company');
var mongoose = require('mongoose');

exports.getAllCompany = function(req, res, next) {
    console.log('Get all companies');
    Company.find(function (err, company) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {
            res.json(200, {
                status: 'success',
                data: company
            });
        }
    });
};

exports.getIdCompany = function(req, res, next) {
    console.log('Get specific company ' + req.params.company_id);
    Company.findById(req.params.company_id, function (err, company) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {

            res.json(200, {
                status: 'success',
                data: company
            });
        }
    })
};

exports.createCompany = function (req, res, next) {
    console.log('Enter to create a new company ' + req.body.name);

    var company = new Company();

    var casted = req.body.categories.map(function( category ) {
        return mongoose.Types.ObjectId(category);
    });

    company.name = req.body.name;
    company.categories = casted;
    company.details = req.body.details;
    company.isDelivery = req.body.isDelivery;
    company.isCash = req.body.isCash;
    company.isCreditCard = req.body.isCreditCard;
    company.isActive = 1;
    company.isOpenNow = req.body.isOpenNow;
    company.timetable = req.body.timetable;

    company.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            })
        }else {

            res.json(200, {
                status: 'success',
                data: { message: "Company created." }
            });
        }
    });
};

exports.updateCompany = function (req, res, next) {
    console.log('Update specific company ' + req.params.company_id);
    Company.findById(req.params.company_id, function (err, company) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {
            company.name = req.body.name;
            company.details = req.body.details;
            company.isDelivery = req.body.isDelivery;
            company.isCash = req.body.isCash;
            company.isCreditCard = req.body.isCreditCard;
            company.isActive = req.body.isActive;
            company.isOpenNow = req.body.isOpenNow;
            company.timetable = req.body.timetable;

            company.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    })
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'Company updated.'
                    });
                }
            });
        }
    });
};

exports.deleteCompany = function (req, res, next) {
    console.log('Delete specific company ' + req.params.company_id);
    Company.remove({
        _id : req.params.company_id
    }, function (err, company) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {
            res.json(200, {
                status: 'success',
                data: { message: 'Company deleted.' }
            });
        }
    });
};