/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var rol = require('../controllers/Rol');

router.get('/all', rol.getAllRol);
router.get('/:rolId', rol.getRolById);
router.post('/', rol.createRol);
router.put('/:rolId', rol.updateRol);
router.delete('/:rolId', rol.deleteRol);

module.exports = router;