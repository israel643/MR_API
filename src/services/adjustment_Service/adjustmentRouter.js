const express = require('express');
const adjustmentController  = require('./adjustmentController');
const adjustmentDetailsController  = require('./adjustmentDetails_Service/adjustmentDetailsController');
const router = express.Router();

router.post('/', adjustmentController.addInventoryAdjustment);
router.get('/', adjustmentController.getAllInventoryAdjustments);
router.put('/:idAdjustment', adjustmentController.updateInventoryAdjustment);
router.delete('/:idAdjustment', adjustmentController.deleteInventoryAdjustment);


router.post('/:idAdjustment/details', adjustmentDetailsController.addAdjustmentDetail);
router.get('/:idAdjustment/details', adjustmentDetailsController.getAdjustmentDetailsByAdjustment);
router.put('/:idAdjustment/:detail_id', adjustmentDetailsController.updateAdjustmentDetail);
router.delete('/:idAdjustment/:detail_id', adjustmentDetailsController.deleteAdjustmentDetail);

export default router;