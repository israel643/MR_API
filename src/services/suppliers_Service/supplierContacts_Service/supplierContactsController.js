import suppContactService from "./supplierContactsService";
const serviceSuppContacts = new suppContactService();

export const addNewContact = async (req, res) => {
    try {
        const result = await serviceSuppContacts.new_contact({   
            supplier_id: req.params.id,              
            contact_name: req.body.contact_name,            
            contact_phone: req.body.phone,            
            contact_email: req.body.email,
            position: req.body.position
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error' }) : res.json({ message: 'Contacto agregado correctamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateContact = async (req, res) => {
    try {
        const result = await serviceSuppContacts.update_contact({
            contact_id: req.params.idContact,              
            supplier_id: req.params.id,              
            contact_name: req.body.contact_name,            
            contact_phone: req.body.phone,            
            contact_email: req.body.email,
            position: req.body.position
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Contacto actualizado exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteContact = async (req, res) => {
    try {
        const result = await serviceSuppContacts.delete_contact(req.params.idContact);
        return result.affectedRows === 0 ? res.status(404).json({ message: 'El contacto no se encontro' }) : res.json({ message: 'Contacto eliminado exitosamente.' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
};

export const getInfoContactByID = async (req, res) => {
    try {
        const contact = await serviceSuppContacts.get_contact_by_id (req.params.idContact);
        res.json(contact);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getContactsBySupplier = async (req, res) => {
    try {
        const contacts = await serviceSuppContacts.get_contacts_by_supplier(req.params.id);
        res.json(contacts);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};