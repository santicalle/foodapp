/**
 * Created by Santiago Calle on 22/6/2016.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/dist/index.html');
});

module.exports = router;