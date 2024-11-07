import { pool } from "../../config/db";

class brand_service{

    async insert_new_brand({brand_name, active}){
        const [results] = await pool.query(
            'CALL sp_insert_brand( ?, ?)', 
            [brand_name, active]
        );
        return results;
    }

    async update_brand({brand_id, brand_name, active}){
        const [results] = await pool.query(
            'CALL sp_update_brand(?, ?, ?)', 
            [brand_id, brand_name, active]
        );
        return results;
    }

    async get_brands_by_state({is_active}){
        const [brands] = await pool.query( 'CALL sp_get_brands_by_status(?)', [is_active])
        return brands[0];
    }
}

export default brand_service;