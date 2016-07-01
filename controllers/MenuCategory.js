/**
 * Created by Santiago Calle on 13/6/2016.
 */

var MenuCategory = require('../models/MenuCategory');

exports.getAllMenuCategory = function(req, res, next) {
    console.log('Get all menuCategories');
    MenuCategory.find(function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: menuCategory
            });
        }
    });
};

exports.getMenuCategoryById = function(req, res, next) {
    console.log('Get specific menuCategory ' + req.params.menuCategoryId);
    MenuCategory.findById(req.params.menuCategoryId, function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: menuCategory
            });
        }
    })
};

exports.createMenuCategory = function (req, res, next) {
    console.log('Enter to create a new menuCategory ' + req.body.name);
    var menuCategory = new MenuCategory();
    menuCategory.name = req.body.name;
    menuCategory.isActive = 1;

    menuCategory.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: { message: "MenuCategory created." }
            });
        }
    });
};

exports.updateMenuCategory = function (req, res, next) {
    console.log('Update specific menuCategory ' + req.params.menuCategoryId);
    MenuCategory.findById(req.params.menuCategoryId, function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            menuCategory.name = req.body.name;
            menuCategory.isActive = req.body.isActive;

            menuCategory.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    });
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'MenuCategory updated.'
                    });
                }
            });
        }
    });
};

exports.deleteMenuCategory = function (req, res, next) {
    console.log('Delete specific menuCategory ' + req.params.menuCategoryId);
    MenuCategory.remove({
        _id : req.params.menuCategoryId
    }, function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: { message: 'MenuCategory deleted.' }
            });
        }
    });
};