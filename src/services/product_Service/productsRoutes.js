const express = require('express');
const productsController = require('./productsController');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProdById);
router.delete('/:id', productsController.deleteProdById);
router.put('/:id', productsController.updateProd)
router.post('/', productsController.createProd)

export default router;