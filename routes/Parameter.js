/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var parameter = require('../controllers/Parameter');

router.get('/all', parameter.getAllParameter);
router.get('/:parameterId', parameter.getParameterById);
router.post('/', parameter.createParameter);
router.put('/:parameterId', parameter.updateParameter);
router.delete('/:parameterId', parameter.deleteParameter);

module.exports = router;