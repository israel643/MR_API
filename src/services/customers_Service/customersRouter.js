const express = require('express');
const clientsController  = require('./customersController');
const clientsAddressController = require('./customersAddresses_Service/customersAddressesController')
const clientContactsController = require('./customersContacts_Service/customersContactsController')
const router = express.Router();

router.get('/', clientsController.getAllClients);
router.get('/:idClient', clientsController.getClientByID);
router.delete('/:idClient', clientsController.deleteClient);
router.put('/:idClient', clientsController.updateClient);
router.post('/', clientsController.addNewClient);

// DIRECCIONES
router.get('/:idClient/addresses', clientsAddressController.getAddressesByClient);
router.get('/:id/addresses/:address_id', clientsAddressController.getInfoAddressByID);
router.delete('/:id/addresses/:address_id', clientsAddressController.deleteAddress);
router.put('/:idClient/addresses/:address_id', clientsAddressController.updateAddress);
router.post('/:idClient/addresses', clientsAddressController.addNewAddress);

// TELEFONOS
router.get('/:idClient/phones', clientContactsController.getPhonesByClient);
router.get('/:idClient/phones/:idPhone', clientContactsController.getInfoPhoneByID);
router.delete('/:idClient/phones/:idPhone', clientContactsController.deletePhone);
router.put('/:idClient/phones/:idPhone', clientContactsController.updateContact);
router.post('/:idClient/phones', clientContactsController.addNewPhone);

export default router;