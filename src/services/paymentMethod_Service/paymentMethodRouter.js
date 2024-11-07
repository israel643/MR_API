const express = require('express');
const payMController  = require('./paymentMethodController');
const router = express.Router();

router.post('/', payMController.addNewPaymentMethod);
router.get('/', payMController.getPaymentMethod);
router.delete('/:id', payMController.deletePaymentMethod);

export default router;