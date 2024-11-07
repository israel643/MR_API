import SalesService from "./salesService";
const serviceSales = new SalesService();

// Agregar una nueva venta
export const addNewSale = async (req, res) => {
    try {
        const result = await serviceSales.insert_sale({
            customer_id: req.body.customer_id,
            payment_method_id: req.body.payment_method_id,
            sale_date: req.body.sale_date,  // Puede ser null
            iva: req.body.iva,
            status_id: req.body.status_id,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Ocurrió un error al registar la venta.' })
            : res.json({ message: 'Venta agregada correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todas las ventas, con filtro de fechas opcional
export const getSalesByDate = async (req, res) => {
    try {
        const sales = await serviceSales.get_sales_by_date({ 
            start_date : req.body.start_date,
            end_date : req.body.end_date
         });
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una venta
export const updateSale = async (req, res) => {
    try {
        const result = await serviceSales.update_sale({
            sale_id: req.params.sale_id,
            payment_method_id: req.body.payment_method_id,
            iva: req.body.iva,
            status_id: req.body.status_id,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al actualizar la venta.' })
            : res.json({ message: 'Venta actualizada correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una venta
export const deleteSale = async (req, res) => {
    try {
        const result = await serviceSales.delete_sale({
            sale_id: req.params.sale_id,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al eliminar la venta.' })
            : res.json({ message: 'Venta eliminada correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
