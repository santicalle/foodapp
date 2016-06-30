/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var company = require('../controllers/controllerCompany');

router.get('/all', company.getAllCompany);
router.get('/:company_id', company.getIdCompany);
router.post('/', company.createCompany);
router.put('/:company_id', company.updateCompany);
router.delete('/:company_id', company.deleteCompany);

module.exports = router;