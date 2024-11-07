import { pool } from "../../../config/db";

class AdjustmentDetailService {

    // Insertar un detalle de ajuste
    async insertAdjustmentDetail({ adjustmentId, productId, quantity, movementType, unitPrice, statusId, physicalCaptureUM, userPhysicalCapture, reason }) {
        const [result] = await pool.query(
            'CALL sp_insert_adjustment_detail(?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [adjustmentId, productId, quantity, movementType, unitPrice, statusId, physicalCaptureUM, userPhysicalCapture, reason]
        );
        return result;
    }

    // Obtener detalles de ajuste por ID de ajuste
    async getAdjustmentDetailsByAdjustment({ adjustmentId }) {
        const [details] = await pool.query(
            'CALL sp_get_adjustment_details_by_adjustment(?)',
            [adjustmentId]
        );
        return details[0];
    }

    // Actualizar un detalle de ajuste
    async updateAdjustmentDetail({ detailId, adjustmentId, productId, quantity, movementType, unitPrice, statusId, physicalCaptureUM, userPhysicalCapture, reason }) {
        const [result] = await pool.query(
            'CALL sp_update_adjustment_detail(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [detailId, adjustmentId, productId, quantity, movementType, unitPrice, statusId, physicalCaptureUM, userPhysicalCapture, reason]
        );
        return result;
    }

    // Eliminar un detalle de ajuste
    async deleteAdjustmentDetail({ detailId }) {
        const [result] = await pool.query(
            'CALL sp_delete_adjustment_detail(?)',
            [detailId]
        );
        return result;
    }
}

export default AdjustmentDetailService;