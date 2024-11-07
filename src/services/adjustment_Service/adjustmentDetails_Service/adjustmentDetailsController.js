import AdjustmentDetailService from "./adjustmentDetailsService";
const adjustmentDetailService = new AdjustmentDetailService();

export const addAdjustmentDetail = async (req, res) => {
    try {
        const result = await adjustmentDetailService.insertAdjustmentDetail({
            adjustmentId: req.params.idAdjustment,
            productId: req.body.productId,
            quantity: req.body.quantity,
            movementType: req.body.type,
            unitPrice: req.body.unitPrice,
            statusId: req.body.status,
            physicalCaptureUM: req.body.physicalCaptureUM,
            userPhysicalCapture: req.body.userPhysicalCapture,
            reason: req.body.reason
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al agregar el detalle de ajuste.' }) 
            : res.json({ message: 'Detalle de ajuste agregado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAdjustmentDetailsByAdjustment = async (req, res) => {
    try {
        const details = await adjustmentDetailService.getAdjustmentDetailsByAdjustment({
            adjustmentId: req.params.idAdjustment
        });
        res.json(details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAdjustmentDetail = async (req, res) => {
    try {
        const result = await adjustmentDetailService.updateAdjustmentDetail({
            detailId: req.params.detail_id,
            adjustmentId: req.params.idAdjustment,
            productId: req.body.productId,
            quantity: req.body.quantity,
            movementType: req.body.type,
            unitPrice: req.body.unitPrice,
            statusId: req.body.status,
            physicalCaptureUM: req.body.physicalCaptureUM,
            userPhysicalCapture: req.body.userPhysicalCapture,
            reason: req.body.reason
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al actualizar el detalle de ajuste.' }) 
            : res.json({ message: 'Detalle de ajuste actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAdjustmentDetail = async (req, res) => {
    try {
        const result = await adjustmentDetailService.deleteAdjustmentDetail({
            detailId: req.params.detail_id
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al eliminar el detalle de ajuste.' }) 
            : res.json({ message: 'Detalle de ajuste eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
