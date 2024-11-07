import purchasePriceHistoryService from "./purchasePriceHistoryService";
const servicePurchasePriceHistory = new purchasePriceHistoryService();

export const addNewPurchasePriceHistory = async (req, res) => {
    try {
        const result = await servicePurchasePriceHistory.insert_purchase_price_history({
            product_id: req.body.product_id,
            unit_price: req.body.unit_price,
            quantity_purchased: req.body.quantity_purchased,
            purchase_date: req.body.purchase_date,
            supplier_id: req.body.supplier_id,
        });

        return result.affectedRows === 0 ? res.status(404).json({ message: 'Error al agregar el historial de precios.' }) : res.json({ message: 'Historial de precios agregado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener historial de precios por producto (con fechas opcionales)
export const getPurchasePriceHistoryByProduct = async (req, res) => {
    try {
        
        const history = await servicePurchasePriceHistory.get_purchase_price_history_by_product({
            product_id : req.params.product_id,
            start_date : req.body.start_date,
            end_date : req.body.end_date,
        });

        res.json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener historial de precios por proveedor
export const getPurchasePriceHistoryBySupplier = async (req, res) => {
    try {
        const history = await servicePurchasePriceHistory.get_purchase_price_history_by_supplier({ 
            supplier_id : req.params.supplier_id,
            start_date : req.body.start_date,
            end_date : req.body.end_date,
        });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener el precio más reciente de un producto
export const getLatestPurchasePrice = async (req, res) => {
    try {
        const product_id = req.params.product_id;
        const latestPrice = await servicePurchasePriceHistory.get_latest_purchase_price({ product_id });
        res.json(latestPrice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un registro del historial de precios
export const deletePurchasePriceHistory = async (req, res) => {
    try {
        const history_id = req.params.history_id;
        const result = await servicePurchasePriceHistory.delete_purchase_price_history({ history_id });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al eliminar el historial de precios.' })
            : res.json({ message: 'Historial de precios eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un resumen de precios de compra promedio por producto
export const getPurchasePriceSummary = async (req, res) => {
    try {
        const summary = await servicePurchasePriceHistory.get_purchase_price_summary_by_product({
            start_date : req.body.start_date,
            end_date : req.body.end_date,
        });
        res.json(summary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar el precio y la cantidad de un historial de compra
export const updatePurchasePriceHistory = async (req, res) => {
    try {
        const result = await servicePurchasePriceHistory.update_purchase_price_history({
            history_id: req.params.history_id,
            unit_price: req.body.unit_price,
            quantity_purchased: req.body.quantity_purchased,
        });

        return result.affectedRows === 0
            ? res.status(404).json({ message: 'Error al actualizar el historial de precios.' })
            : res.json({ message: 'Historial de precios actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
