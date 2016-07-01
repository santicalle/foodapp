/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var user = require('../controllers/User');

router.get('/all', user.getAllUser);
router.get('/:userId', user.getUserById);
router.post('/', user.createUser);
router.put('/:userId', user.updateUser);
router.delete('/:userId', user.deleteUser);

module.exports = router;