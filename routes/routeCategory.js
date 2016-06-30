/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var category = require('../controllers/controllerCategory');

router.get('/all', category.getAllCategory);
router.get('/:category_id', category.getIdCategory);
router.post('/', category.createCategory);
router.put('/:category_id', category.updateCategory);
router.delete('/:category_id', category.deleteCategory);

module.exports = router;