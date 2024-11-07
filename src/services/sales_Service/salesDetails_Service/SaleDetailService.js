import { pool } from "../../../config/db";

class SaleDetailService {

    // Insertar un detalle de venta
    async insert_sale_detail({ sale_id, product_id, quantity, unit_price, subtotal, status_id }) {
        const [result] = await pool.query(
            'CALL sp_insert_sale_detail(?, ?, ?, ?, ?, ?)', 
            [sale_id, product_id, quantity, unit_price, subtotal, status_id]
        );
        return result;
    }

    // Obtener los detalles de una venta
    async get_sale_details({ sale_id }) {
        const [details] = await pool.query('CALL sp_get_sale_details_by_sale(?)', [sale_id]);
        return details[0];
    }

    // Actualizar un detalle de venta
    async update_sale_detail({ detail_id, product_id, quantity, unit_price, subtotal, status_id }) {
        const [result] = await pool.query(
            'CALL sp_update_sale_detail(?, ?, ?, ?, ?, ?)', 
            [detail_id, product_id, quantity, unit_price, subtotal, status_id]
        );
        return result;
    }

    // Eliminar un detalle de venta
    async delete_sale_detail({ detail_id }) {
        const [result] = await pool.query(
            'CALL sp_delete_sale_detail(?)', 
            [detail_id]
        );
        return result;
    }
}

export default SaleDetailService;
