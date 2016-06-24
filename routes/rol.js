/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var rol = require('../controllers/rol');

router.get('/all', rol.getAllRol);
router.get('/:rol_id', rol.getIdRol);
router.post('/', rol.createRol);
router.put('/:rol_id', rol.updateRol);
router.delete('/:rol_id', rol.deleteRol);

module.exports = router;