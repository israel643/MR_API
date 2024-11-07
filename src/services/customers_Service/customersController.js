import CustomersService from "./customersService";

const serviceCustomer = new CustomersService();

export const getAllClients = async (req, res) => {
    try {
        const clients = await serviceCustomer.get_all_clients();
        res.json(clients);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getClientByID = async (req, res) => {
    try {
        const client = await serviceCustomer.get_client_by_id(req.params.idClient);
        res.json(client);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const result = await serviceCustomer.delete_client(req.params.idClient);
        return result.affectedRows === 0 ? res.status(404).json({ message: 'El cliente no se encontro' }) : res.json({ message: 'cliente eliminado exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const addNewClient = async (req, res) => {
    try {
        const result = await serviceCustomer.insert_client({   
            fiscal_id: req.body.fiscal_id,              
            name: req.body.name,            
            email: req.body.email,            
            client_type: req.body.client_type
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error' }) : res.json({ message: 'Cliente agregado correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateClient = async (req, res) => {
    try {
        const result = await serviceCustomer.update_client({
            client_id: req.params.idClient,              
            fiscal_id: req.body.fiscal_id,              
            name: req.body.name,            
            email: req.body.email,            
            client_type: req.body.client_type
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Cliente actualizado exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}