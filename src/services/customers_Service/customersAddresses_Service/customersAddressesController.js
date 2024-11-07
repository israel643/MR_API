import clientAddressService from "./customersAddressesService";
const serviceClientAddress = new clientAddressService();

export const addNewAddress = async (req, res) => {
    try {
        const result = await serviceClientAddress.new_address({   
            client_id: req.params.idClient,              
            street: req.body.street,            
            num_int: req.body.num_int,            
            num_ext: req.body.num_ext,
            city: req.body.city,
            state: req.body.state,
            postal_code: req.body.postal_code,
            suburb: req.body.suburb,
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
        const result = await serviceClientAddress.update_address({
            address_id: req.params.address_id,              
            client_id: req.params.idClient,              
            street: req.body.street,            
            num_int: req.body.num_int,            
            num_ext: req.body.num_ext,
            city: req.body.city,
            state: req.body.state,
            postal_code: req.body.postal_code,
            suburb: req.body.suburb,
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
        const result = await serviceClientAddress.delete_address(req.params.address_id);
        return result.affectedRows === 0 ? res.status(404).json({ message: 'Dirección no encontrada.' }) : res.json({ message: 'Dirección eliminada exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const getInfoAddressByID = async (req, res) => {
    try {
        const address = await serviceClientAddress.get_address_by_id (req.params.address_id);
        res.json(address);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAddressesByClient = async (req, res) => {
    try {
        const addresses = await serviceClientAddress.get_addresses_by_client (req.params.idClient);
        res.json(addresses);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};