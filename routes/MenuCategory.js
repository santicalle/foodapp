/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var menuCategory = require('../controllers/MenuCategory');

router.get('/all', menuCategory.getAllMenuCategory);
router.get('/:menuCategory_id', menuCategory.getIdMenuCategory);
router.post('/', menuCategory.createMenuCategory);
router.put('/:menuCategory_id', menuCategory.updateMenuCategory);
router.delete('/:menuCategory_id', menuCategory.deleteMenuCategory);

module.exports = router;