import CategoriesService from './categoriesService.js';
const categoriesService = new CategoriesService(); 

export const getAllCategories = async (req, res) => {
    try {
        const category = await categoriesService.findAll();
        res.json(category);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubcategories = async (req, res) => {
    try {
        const category = await categoriesService.findSubcategories(req.params.parent_category_id);
        res.json(category);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const result = await categoriesService.deleteById(req.params.id);
        return result.affectedRows === 0 ?res.status(404).json({ message: 'Categoria no encontrada' }) : res.json({ message: 'Categoria eliminada exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const addNewCategory = async (req, res) => {
    try {
        const result = await categoriesService.newCategory({   
            category_name: req.body.category_name,              
            description: req.body.description,            
            parent_category_id: req.body.parent_category_id,            
            active: req.body.active
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al agregar la categoria. ' }) : res.json({ message: 'Categoria agregada correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const result = await categoriesService.updateCategory({
            idCategory: req.params.id,              
            category_name: req.body.category_name,              
            description: req.body.description,            
            parent_category_id: req.body.parent_category_id,            
            active: req.body.active
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Categoria actualizada exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}