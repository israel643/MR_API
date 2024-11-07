import { pool } from "../../config/db";

class InventoryAdjustmentService {

    // Insertar un ajuste
    async insertInventoryAdjustment({ saleId, adjustmentDate, reason, responsible, comment }) {
        const [result] = await pool.query(
            'CALL sp_insert_inventory_adjustment(?, ?, ?, ?, ?)',
            [saleId, adjustmentDate, reason, responsible, comment]
        );
        return result;
    }

    // Obtener todos los ajustes de inventario
    async getAllInventoryAdjustments() {
        const [adjustments] = await pool.query('CALL sp_get_inventory_adjustments()');
        return adjustments[0];
    }

    // Actualizar un ajuste de inventario
    async updateInventoryAdjustment({ adjustmentId, saleId, adjustmentDate, reason, responsible, comment }) {
        const [result] = await pool.query(
            'CALL sp_update_inventory_adjustment(?, ?, ?, ?, ?, ?)',
            [adjustmentId, saleId, adjustmentDate, reason, responsible, comment]
        );
        return result;
    }

    // Eliminar un ajuste de inventario
    async deleteInventoryAdjustment({ adjustmentId }) {
        const [result] = await pool.query(
            'CALL sp_delete_inventory_adjustment(?)',
            [adjustmentId]
        );
        return result;
    }
}

export default InventoryAdjustmentService;