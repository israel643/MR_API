import suppAddressService from "./supplierAddressesService";
const serviceSuppAddress = new suppAddressService();

export const addNewAddress = async (req, res) => {
    try {
        const result = await serviceSuppAddress.new_address({   
            supplier_id: req.params.id,              
            address: req.body.address,            
            city: req.body.city,            
            state: req.body.state,
            postal_code: req.body.postal_code,
            country: req.body.country
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error' }) : res.json({ message: 'Dirección agregada correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateAddress = async (req, res) => {
    try {
        const result = await serviceSuppAddress.update_address({
            address_id: req.params.address_id,              
            supplier_id: req.params.id,              
            address: req.body.address,            
            city: req.body.city,            
            state: req.body.state,
            postal_code: req.body.postal_code,
            country: req.body.country
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Dirección actualizada correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAddress = async (req, res) => {
    try {
        const result = await serviceSuppAddress.delete_address(req.params.address_id);
        return result.affectedRows === 0 ? res.status(404).json({ message: 'Dirección no encontrada.' }) : res.json({ message: 'Dirección eliminada exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const getInfoAddressByID = async (req, res) => {
    try {
        const address = await serviceSuppAddress.get_address_by_id (req.params.address_id);
        res.json(address);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAddressesBySupplier = async (req, res) => {
    try {
        const addresses = await serviceSuppAddress.get_addresses_by_supplier(req.params.id);
        res.json(addresses);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};