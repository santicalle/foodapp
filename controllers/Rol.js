/**
 * Created by Santiago Calle on 13/6/2016.
 */

var Rol = require('../models/Rol');

exports.getAllRol = function(req, res, next) {
    console.log('Get all roles');
    Rol.find(function (err, rol) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: rol
            });
        }
    });
};

exports.getRolbyId = function(req, res, next) {
    console.log('Get specific rol ' + req.params.rolId);
    Rol.findById(req.params.rolId, function (err, rol) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: rol
            });
        }
    })
};

exports.createRol = function (req, res, next) {
    console.log('Enter to create a new rol ' + req.body.name);
    var rol = new Rol();
    rol.name = req.body.name;
    rol.isActive = 1;

    rol.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: { message: "Rol created." }
            });
        }
    });
};

exports.updateRol = function (req, res, next) {
    console.log('Update specific rol ' + req.params.rolId);
    Rol.findById(req.params.rolId, function (err, rol) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            rol.name = req.body.name;
            rol.isActive = req.body.isActive;

            rol.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    });
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'Rol updated.'
                    });
                }
            });
        }
    });
};

exports.deleteRol = function (req, res, next) {
    console.log('Delete specific rol ' + req.params.rolId);
    Rol.remove({
        _id : req.params.rolId
    }, function (err, rol) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: { message: 'Rol deleted.' }
            });
        }
    });
};