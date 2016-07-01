/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var category = require('../controllers/Category');

router.get('/all', category.getAllCategory);
router.get('/:categoryId', category.getCategoryById);
router.post('/', category.createCategory);
router.put('/:categoryId', category.updateCategory);
router.delete('/:categoryId', category.deleteCategory);

module.exports = router;