/**
 * Created by Santiago Calle on 13/6/2016.
 */

var Category = require('../models/Category');

exports.getAllCategory = function(req, res, next) {
    console.log('Get all categories');
    Category.find(function (err, category) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        }else {
            res.json(200, {
                status: 'success',
                data: category
            });
        }
    });
};

exports.getIdCategory = function(req, res, next) {
    console.log('Get specific category ' + req.params.category_id);
    Category.findById(req.params.category_id, function (err, category) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        }else {

            res.json(200, {
                status: 'success',
                data: category
            });
        }
    })
};

exports.createCategory = function (req, res, next) {
    console.log('Enter to create a new category ' + req.body.description);
    var category = new Category();
    category.description = req.body.description;
    category.isActive = 1;

    category.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            });
        }else {

            res.json(200, {
                status: 'success',
                data: { message: "Category created." }
            });
        }
    });
};

exports.updateCategory = function (req, res, next) {
    console.log('Update specific category ' + req.params.category_id);
    Category.findById(req.params.category_id, function (err, category) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        }else {
            category.description = req.body.description;
            category.isActive = req.body.isActive;

            category.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    });
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'Category updated.'
                    });
                }
            });
        }
    });
};

exports.deleteCategory = function (req, res, next) {
    console.log('Delete specific category ' + req.params.category_id);
    Category.remove({
        _id : req.params.category_id
    }, function (err, category) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        }else {
            res.json(200, {
                status: 'success',
                data: { message: 'Category deleted.' }
            });
        }
    });
};