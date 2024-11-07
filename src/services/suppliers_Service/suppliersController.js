import suppliersService from "./suppliersService";

const serviceSuppliers = new suppliersService();

export const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await serviceSuppliers.get_all_suppliers();
        res.json(suppliers);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSupplierByID = async (req, res) => {
    try {
        const supplier = await serviceSuppliers.get_supplier_by_id (req.params.id);
        res.json(supplier);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSupplier = async (req, res) => {
    try {
        const result = await serviceSuppliers.delete_supplier(req.params.id);
        return result.affectedRows === 0 ? res.status(404).json({ message: 'El proveedor no se encontro' }) : res.json({ message: 'Proveedor eliminado exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const addNewSupplier = async (req, res) => {
    try {
        const result = await serviceSuppliers.new_supplier({   
            fiscal_id: req.body.fiscal_id,              
            razon_fisc: req.body.razon_fisc,            
            website: req.body.website,            
            active: req.body.active
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error' }) : res.json({ message: 'Proveedor agregado correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateSupplier = async (req, res) => {
    try {
        const result = await serviceSuppliers.update_supplier({
            supplier_id: req.params.id,              
            fiscal_id: req.body.fiscal_id,              
            razon_fisc: req.body.razon_fisc,            
            website: req.body.website,            
            active: req.body.active
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Proveedor actualizado exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}