import { pool } from "../../../config/db";

class suppAddressService
{
    async new_address({supplier_id, address, city, state, postal_code, country}){
        const [results] = await pool.query(
            'CALL sp_insert_supplier_address( ?, ?, ?, ?, ?, ?)', 
            [supplier_id, address, city, state, postal_code, country]
        );
        return results;
    }

    async update_address({address_id,supplier_id, address, city, state, postal_code, country}) 
    {
        const [results] = await pool.query(
            'CALL sp_update_supplier_address(?, ?, ?, ?, ?, ?, ?)', 
            [address_id, supplier_id, address, city, state, postal_code, country]
        );
        return results;
    }

    async delete_address(address_id){
        const [results] = await pool.query('CALL sp_delete_supplier_address(?)', [address_id]);
        return results;
    }

    async get_addresses_by_supplier(supplier_id) {
        const [rows] = await pool.query('CALL sp_get_addresses_by_supplier(?)', [supplier_id]);
        return rows[0];
    }

    async get_address_by_id(address_id) {
        const [rows] = await pool.query('CALL sp_get_supplier_address_by_id(?)', [address_id]);
        return rows[0];
    }
}

export default suppAddressService;