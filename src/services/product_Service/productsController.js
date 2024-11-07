import ProductService from './productsService.js';
const productsService = new ProductService(); 

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.findAll();
        res.json(products);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProdById = async (req, res) => {
    try {
        const product = await productsService.findById(req.params.id);
        res.json(product);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProdById = async (req, res) => {
    try {
        const result = await productsService.deleteById(req.params.id);
        return result.affectedRows === 0 ?res.status(404).json({ message: 'Producto no encontrado' }) : res.json({ message: 'Producto eliminado exitosamente' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const updateProd = async (req, res) => {
    try {
        const result = await productsService.updateProduct({
            id_prod: req.params.id,              
            cat_prod: req.body.cat_prod,              
            name_prod: req.body.name_prod,            
            desc_prod: req.body.desc_prod,            
            sku: req.body.sku,                        
            precioV: req.body.precioV,                
            UM_prod: req.body.UM_prod,                
            activo: req.body.activo,                  
            stockMin: req.body.stockMin,              
            stockMax: req.body.stockMax,              
            atributos: req.body.atributos             
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Producto actualizado exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}