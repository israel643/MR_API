const express = require('express');
const PriceHistoryController  = require('./purchasePriceHistoryController');
const router = express.Router();

router.post('/', PriceHistoryController.addNewPurchasePriceHistory);
router.get('/summary', PriceHistoryController.getPurchasePriceSummary);
router.get('/:product_id', PriceHistoryController.getPurchasePriceHistoryByProduct);
router.get('/supplier/:supplier_id', PriceHistoryController.getPurchasePriceHistoryBySupplier);
router.get('/latest/:product_id', PriceHistoryController.getLatestPurchasePrice);
router.delete('/:history_id', PriceHistoryController.deletePurchasePriceHistory);
router.put('/:history_id', PriceHistoryController.updatePurchasePriceHistory);

export default router;