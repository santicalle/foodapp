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
            })
        }else {
            res.json(200, {
                status: 'success',
                data: menuCategory
            });
        }
    });
};

exports.getIdMenuCategory = function(req, res, next) {
    console.log('Get specific menuCategory ' + req.params.menuCategory_id);
    MenuCategory.findById(req.params.menuCategory_id, function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {

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
    menuCategory.description = req.body.description;
    menuCategory.isActive = 1;

    menuCategory.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            })
        }else {

            res.json(200, {
                status: 'success',
                data: { message: "MenuCategory created." }
            });
        }
    });
};

exports.updateMenuCategory = function (req, res, next) {
    console.log('Update specific menuCategory ' + req.params.menuCategory_id);
    MenuCategory.findById(req.params.menuCategory_id, function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {
            menuCategory.description = req.body.description;
            menuCategory.isActive = req.body.isActive;

            menuCategory.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    })
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
    console.log('Delete specific menuCategory ' + req.params.menuCategory_id);
    MenuCategory.remove({
        _id : req.params.menuCategory_id
    }, function (err, menuCategory) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            })
        }else {
            res.json(200, {
                status: 'success',
                data: { message: 'MenuCategory deleted.' }
            });
        }
    });
};