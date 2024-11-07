import { pool } from "../../../config/db";

class purchasePriceHistory_service {

    // Insertar un nuevo registro en el historial de precios de compra
    async insert_purchase_price_history({ product_id, unit_price, quantity_purchased, purchase_date, supplier_id }) {
        const [results] = await pool.query(
            'CALL sp_insert_purchase_price_history(?, ?, ?, ?, ?)', 
            [product_id, unit_price, quantity_purchased, purchase_date, supplier_id]
        );
        return results;
    }

    // Obtener el historial de precios de compra de un producto específico con filtrar por fecha
    async get_purchase_price_history_by_product({ product_id, start_date = null, end_date = null }) {
        const [history] = await pool.query(
            'CALL sp_get_purchase_price_history_by_product_and_date(?, ?, ?)', 
            [product_id, start_date, end_date]
        );
        return history[0];
    }

    // Obtener el historial de precios de compra por proveedor
    async get_purchase_price_history_by_supplier({ supplier_id, start_date = null, end_date = null  }) {
        const [history] = await pool.query(
            'CALL sp_get_purchase_price_history_by_supplier(?, ?, ?)', 
            [supplier_id, start_date, end_date]
        );
        return history[0];
    }

    // Obtener el precio más reciente de un producto
    async get_latest_purchase_price({ product_id }) {
        const [latest] = await pool.query(
            'CALL sp_get_latest_purchase_price(?)', 
            [product_id]
        );
        return latest[0];
    }

    // Eliminar un registro del historial de precios de compra
    async delete_purchase_price_history({ history_id }) {
        const [results] = await pool.query(
            'CALL sp_delete_purchase_price_history(?)', 
            [history_id]
        );
        return results;
    }

    // Obtener un resumen de precios de compra promedio por producto
    async get_purchase_price_summary_by_product({start_date = null, end_date = null  }) {
        const [summary] = await pool.query( 'CALL sp_get_purchase_price_summary_by_product(?,?)', 
            [start_date, end_date]
        );
        return summary[0];
    }

    // Actualizar el precio y la cantidad en el historial de compra
    async update_purchase_price_history({ history_id, unit_price, quantity_purchased }) {
        const [results] = await pool.query(
            'CALL sp_update_purchase_price_history(?, ?, ?)', 
            [history_id, unit_price, quantity_purchased]
        );
        return results;
    }
}

export default purchasePriceHistory_service;
