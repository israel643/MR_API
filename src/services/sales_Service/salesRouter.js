const express = require('express');
const salesController  = require('./salesController');
const salesDetailsController  = require('./salesDetails_Service/SaleDetailController');
const router = express.Router();

router.post('/', salesController.addNewSale);
router.get('/', salesController.getSalesByDate);
router.put('/:sale_id', salesController.updateSale);
router.delete('/:sale_id', salesController.deleteSale);


router.post('/:sale_id/details', salesDetailsController.addSaleDetail);
router.get('/:sale_id/details', salesDetailsController.getSaleDetailsBySale);
router.put('/details/:detail_id', salesDetailsController.updateSaleDetail);
router.delete('/details/:detail_id', salesDetailsController.deleteSaleDetail);

export default router;