/**
 * Created by Santiago Calle on 13/6/2016.
 */

var User = require('../models/User');
var mongoose = require('mongoose');

exports.getAllUser = function(req, res, next) {
    console.log('Get all users');
    User.find(function (err, user) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: user
            });
        }
    });
};

exports.getUserById = function(req, res, next) {
    console.log('Get specific user ' + req.params.userId);
    User.findById(req.params.userId, function (err, user) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: user
            });
        }
    })
};

exports.createUser = function (req, res, next) {
    console.log('Enter to create a new user ' + req.body.name);

    var user = new User();

    var castedRoles = req.body.roles.map(function( rol ) {
        return mongoose.Types.ObjectId(rol);
    });

    user.name = req.body.name;
    user.lastName = casted;
    user.email = req.body.mail;
    user.password = req.body.password;
    user.isActive = 1;
    user.roles = castedRoles;
    user.addresses = req.body.addresses;
    user.phones = req.body.phones;

    user.save(function (err) {
        if (err){
            res.json(400, {
                status: "fail",
                data : err
            });
        } else {

            res.json(200, {
                status: 'success',
                data: { message: "User created." }
            });
        }
    });
};

exports.updateUser = function (req, res, next) {
    console.log('Update specific user ' + req.params.userId);

    var castedRoles = req.body.roles.map(function( rol ) {
        return mongoose.Types.ObjectId(rol);
    });

    User.findById(req.params.userId, function (err, user) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {

            user.name = req.body.name;
            user.lastName = casted;
            user.email = req.body.mail;
            user.password = req.body.password;
            user.isActive = req.body.isActive;
            user.roles = castedRoles;
            user.addresses = req.body.addresses;
            user.phones = req.body.phones;

            user.save(function (err) {
                if (err) {
                    res.json(400, {
                        status: "fail",
                        data: err
                    });
                } else {
                    res.json(200, {
                        status: 'success',
                        data: 'User updated.'
                    });
                }
            });
        }
    });
};

exports.deleteUser = function (req, res, next) {
    console.log('Delete specific user ' + req.params.userId);
    User.remove({
        _id : req.params.userId
    }, function (err, user) {
        if (err){
            res.json(404, {
                status: "fail",
                data : err
            });
        } else {
            res.json(200, {
                status: 'success',
                data: { message: 'User deleted.' }
            });
        }
    });
};