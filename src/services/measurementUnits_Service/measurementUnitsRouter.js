const express = require('express');
const measurementUnitController  = require('./measurementUnitsController');
const router = express.Router();

router.post('/', measurementUnitController.addNewUM);
router.get('/', measurementUnitController.getUmByState);
router.put('/:idUnit', measurementUnitController.updateUM);

export default router;