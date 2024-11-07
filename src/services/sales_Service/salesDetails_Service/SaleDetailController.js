import SaleDetailService from "./SaleDetailService";
const serviceSaleDetail = new SaleDetailService();

// Agregar un detalle de venta
export const addSaleDetail = async (req, res) => {
    try {
        const result = await serviceSaleDetail.insert_sale_detail({
            sale_id: req.params.sale_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
            unit_price: req.body.unit_price,
            subtotal: req.body.subtotal,
            status_id: req.body.status_id,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al agregar el detalle de venta.' })
            : res.json({ message: 'Detalle de venta agregado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener los detalles de una venta
export const getSaleDetailsBySale = async (req, res) => {
    try {
        const details = await serviceSaleDetail.get_sale_details({
            sale_id: req.params.sale_id
        });
        res.json(details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un detalle de venta
export const updateSaleDetail = async (req, res) => {
    try {
        const result = await serviceSaleDetail.update_sale_detail({
            detail_id: req.params.detail_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
            unit_price: req.body.unit_price,
            subtotal: req.body.subtotal,
            status_id: req.body.status_id,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al actualizar el detalle de venta.' })
            : res.json({ message: 'Detalle de venta actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un detalle de venta
export const deleteSaleDetail = async (req, res) => {
    try {
        const result = await serviceSaleDetail.delete_sale_detail({
            detail_id: req.params.detail_id,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al eliminar el detalle de venta.' })
            : res.json({ message: 'Detalle de venta eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
