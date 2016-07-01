/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var menuCategory = require('../controllers/MenuCategory');

router.get('/all', menuCategory.getAllMenuCategory);
router.get('/:menuCategoryId', menuCategory.getMenuCategoryById);
router.post('/', menuCategory.createMenuCategory);
router.put('/:menuCategoryId', menuCategory.updateMenuCategory);
router.delete('/:menuCategoryId', menuCategory.deleteMenuCategory);

module.exports = router;