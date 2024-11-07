import brandService from "./brandService";
const serviceBrands = new brandService();

export const addNewBrand = async (req, res) => {
    try {
        const result = await serviceBrands.insert_new_brand({            
            brand_name: req.body.name,            
            active: req.body.active
        });

        return result.affectedRows === 0 ? res.status(404).json({ message: 'Ocurrio un error.' }) : res.json({ message: 'Marca agregada correctamente.' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBrand = async (req, res) => {
    try {
        const result = await serviceBrands.update_brand({
            brand_id: req.params.idBrand,              
            brand_name: req.body.name,            
            active: req.body.active
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Marca actualizada exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBrandsByState = async (req, res) => {
    try {
        const brands = await serviceBrands.get_brands_by_state({is_active : req.body.active});
        res.json(brands);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};