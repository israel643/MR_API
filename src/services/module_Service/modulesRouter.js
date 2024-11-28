const express = require('express');
const modulesController  = require('./modulesController')
const router = express.Router();

router.get('/:user',  modulesController.getModulesToAccess);


export default router;