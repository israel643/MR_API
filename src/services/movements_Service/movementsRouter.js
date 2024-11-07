const express = require('express');
const movementController  = require('./movementsController');
const router = express.Router();

router.post('/', movementController.addMovement);
router.get('/', movementController.getAllMovements);
router.put('/:id', movementController.updateMovement);
router.delete('/:id', movementController.deleteMovement);

export default router;