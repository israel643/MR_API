const express = require('express');
const brandController  = require('./brandController');
const router = express.Router();

router.post('/', brandController.addNewBrand);
router.get('/', brandController.getBrandsByState);
router.put('/:idBrand', brandController.updateBrand);

export default router;