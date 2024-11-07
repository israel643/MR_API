const express = require('express');
const categoriesController = require('./categoriesController');

const router = express.Router();

router.get('/', categoriesController.getAllCategories);
router.delete('/:id', categoriesController.deleteCategory);
router.put('/:id', categoriesController.updateCategory);
router.post('/', categoriesController.addNewCategory);
router.get('/:id/subcategories', categoriesController.getSubcategories);

export default router;