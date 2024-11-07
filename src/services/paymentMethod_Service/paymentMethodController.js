import paymentsService from "./paymentMethodService";
const servicePaymentM = new paymentsService();

export const addNewPaymentMethod = async (req, res) => {
    try {
        const result = await servicePaymentM.insert_payment_method({            
            payment_method_name: req.body.name,  
        });

        return result.affectedRows === 0 ? res.status(404).json({ message: 'Ocurrio un error.' }) : res.json({ message: 'Método de pago agregado correctamente.' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deletePaymentMethod = async (req, res) => {
    try {
        const result = await servicePaymentM.delete_payment_method({
            payment_method_id: req.params.id
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al eliminar' }) : res.json({ message: 'Método de pago eliminado exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPaymentMethod= async (req, res) => {
    try {
        const paymentMethod = await servicePaymentM.get_all_payment_methods();
        res.json(paymentMethod);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};