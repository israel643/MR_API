const express = require('express');
const suppliersController  = require('./suppliersController');
const suppContactController = require('./supplierContacts_Service/supplierContactsController')
const suppAddressController = require('./supplierAddresses_Service/supplierAddressesController');
const router = express.Router();

router.get('/', suppliersController.getAllSuppliers);
router.get('/:id', suppliersController.getSupplierByID);
router.delete('/:id', suppliersController.deleteSupplier);
router.put('/:id', suppliersController.updateSupplier);
router.post('/', suppliersController.addNewSupplier);

// CONTACTOS
router.get('/:id/contacts', suppContactController.getContactsBySupplier);
router.get('/:id/contacts/:idContact', suppContactController.getInfoContactByID);
router.delete('/:id/contacts/:idContact', suppContactController.deleteContact);
router.put('/:id/contacts/:idContact', suppContactController.updateContact);
router.post('/:id/contacts', suppContactController.addNewContact);

// DIRECCIONES
router.get('/:id/addresses', suppAddressController.getAddressesBySupplier);
router.get('/:id/addresses/:address_id', suppAddressController.getInfoAddressByID);
router.delete('/:id/addresses/:address_id', suppAddressController.deleteAddress);
router.put('/:id/addresses/:address_id', suppAddressController.updateAddress);
router.post('/:id/addresses', suppAddressController.addNewAddress);

export default router;