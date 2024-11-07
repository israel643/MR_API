import { pool } from "../../config/db";

class SalesService {

    // Insertar una nueva venta
    async insert_sale({ customer_id, payment_method_id, sale_date = null, iva, status_id }) {
        const [result] = await pool.query(
            'CALL sp_insert_sale(?, ?, ?, ?, ?)', 
            [customer_id, payment_method_id, sale_date, iva, status_id]
        );
        return result;
    }

    // Obtener todas las ventas, con opción de filtrar por fecha
    async get_sales_by_date({ start_date = null, end_date = null }) {
        const [sales] = await pool.query(
            'CALL sp_get_sales_by_date(?, ?)', 
            [start_date, end_date]
        );
        return sales[0];
    }

    // Actualizar una venta
    async update_sale({ sale_id, payment_method_id, iva, status_id }) {
        const [result] = await pool.query(
            'CALL sp_update_sale(?, ?, ?, ?)', 
            [sale_id, payment_method_id, iva, status_id]
        );
        return result;
    }

    // Eliminar una venta
    async delete_sale({ sale_id }) {
        const [result] = await pool.query(
            'CALL sp_delete_sale(?)', 
            [sale_id]
        );
        return result;
    }
}

export default SalesService;
