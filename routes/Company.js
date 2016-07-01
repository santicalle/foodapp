/**
 * Created by Santiago Calle on 7/6/2016.
 */

var express = require('express');
var router = express.Router();

var company = require('../controllers/Company');

router.get('/all', company.getAllCompany);
router.get('/:companyId', company.getCompanyById);
router.post('/', company.createCompany);
router.put('/:companyId', company.updateCompany);
router.delete('/:companyId', company.deleteCompany);

module.exports = router;