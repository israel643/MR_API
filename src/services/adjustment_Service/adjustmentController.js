import InventoryAdjustmentService from "./adjustmentService";
const inventoryAdjustmentService = new InventoryAdjustmentService();

export const addInventoryAdjustment = async (req, res) => {
    try {
        const result = await inventoryAdjustmentService.insertInventoryAdjustment({
            saleId : req.body.saleId,
            adjustmentDate : req.body.date,
            reason : req.body.reason,
            responsible : req.body.responsible,
            comment : req.body.comment
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al agregar el ajuste de inventario.' }) 
            : res.json({ message: 'Ajuste de inventario agregado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllInventoryAdjustments = async (req, res) => {
    try {
        const adjustments = await inventoryAdjustmentService.getAllInventoryAdjustments();
        res.json(adjustments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateInventoryAdjustment = async (req, res) => {
    try {
        const result = await inventoryAdjustmentService.updateInventoryAdjustment({
            adjustmentId: req.params.idAdjustment,
            saleId : req.body.saleId,
            adjustmentDate : req.body.date,
            reason : req.body.reason,
            responsible : req.body.responsible,
            comment : req.body.comment
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al actualizar el ajuste de inventario.' }) 
            : res.json({ message: 'Ajuste de inventario actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteInventoryAdjustment = async (req, res) => {
    try {
        const result = await inventoryAdjustmentService.deleteInventoryAdjustment({
            adjustmentId: req.params.idAdjustment
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al eliminar el ajuste de inventario.' }) 
            : res.json({ message: 'Ajuste de inventario eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
