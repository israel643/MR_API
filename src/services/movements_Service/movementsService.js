import { pool } from "../../config/db";

class movementService {

    // Insertar un movimiento
    async insertMovement({ description, movementType }) {
        const [result] = await pool.query(
            'CALL sp_insert_movement(?, ?)',
            [description, movementType]
        );
        return result;
    }

    // Obtener todos los movimientos
    async getAllMovements() {
        const [movements] = await pool.query('CALL sp_get_all_movements()');
        return movements[0];
    }

    // Eliminar un movimiento
    async deleteMovement({ movementId }) {
        const [result] = await pool.query(
            'CALL sp_delete_movement(?)',
            [movementId]
        );
        return result;
    }

    // Actualizar un movimiento
    async updateMovement({ movementId, description, movementType }) {
        const [result] = await pool.query(
            'CALL sp_update_movement(?, ?, ?)',
            [movementId, description, movementType]
        );
        return result;
    }
}

export default movementService;
