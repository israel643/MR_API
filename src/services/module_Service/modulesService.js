import { pool } from "../../config/db";

class SalesService {

    // Obtener todas las ventas, con opción de filtrar por fecha
    async get_access_to_modules({ username }) {
        const [sales] = await pool.query(
            'CALL sp_get_access_to_modules(?)', 
            [username]
        );
        return sales[0];
    }
}

export default SalesService;
