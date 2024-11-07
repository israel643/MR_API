import { pool } from '../../config/db.js';

class suppliersService 
{
    async get_all_suppliers() {
        const [rows] = await pool.query('CALL sp_get_all_suppliers()');
        return rows[0];
    }

    async get_supplier_by_id(supplier_id) {
        const [rows] = await pool.query('CALL sp_get_supplier_by_id(?)', [supplier_id]);
        return rows[0];
    }

    async delete_supplier(supplier_id){
        const [results] = await pool.query('CALL sp_delete_supplier(?)', [supplier_id]);
        return results;
    }

    async new_supplier({ fiscal_id, razon_fisc, website, active}) 
    {
        const [results] = await pool.query(
            'CALL sp_insert_supplier( ?, ?, ?, ?)', 
            [fiscal_id, razon_fisc, website, active]
        );
        return results;
    }

    async update_supplier({supplier_id,fiscal_id, razon_fisc, website, active}) 
    {
        const [results] = await pool.query(
            'CALL sp_update_supplier(?, ?, ?, ?, ?)', 
            [supplier_id, fiscal_id, razon_fisc, website, active]
        );
        return results;
    }
}

export default suppliersService;