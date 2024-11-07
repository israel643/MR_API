import clientContactsService from "./customersContactsService";
const serviceClientsContacts = new clientContactsService();

export const addNewPhone = async (req, res) => {
    try {
        const result = await serviceClientsContacts.new_phone({   
            client_id: req.params.idClient,              
            contact_name: req.body.contact_name,            
            phone: req.body.phone
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error' }) : res.json({ message: 'Contacto agregado correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateContact = async (req, res) => {
    try {
        const result = await serviceClientsContacts.update_contact({
            phone_id: req.params.idPhone,              
            client_id: req.params.idClient,              
            contact_name: req.body.contact_name,            
            phone: req.body.phone
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Contacto actualizado exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deletePhone = async (req, res) => {
    try {
        const result = await serviceClientsContacts.delete_contact(req.params.idPhone);
        return result.affectedRows === 0 ? res.status(404).json({ message: 'El contacto no se encontro' }) : res.json({ message: 'Contacto eliminado exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const getInfoPhoneByID = async (req, res) => {
    try {
        const contact = await serviceClientsContacts.get_phone_by_id(req.params.idPhone);
        res.json(contact);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPhonesByClient = async (req, res) => {
    try {
        const contacts = await serviceClientsContacts.get_phones_by_client(req.params.idClient);
        res.json(contacts);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};