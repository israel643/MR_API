import { pool } from "../../../config/db";

class custAddressService
{
    async new_address({client_id, street, num_int, num_ext, city, state,postal_code, suburb, country }){
        const [results] = await pool.query(
            'CALL sp_insert_client_address(?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [client_id, street, num_int, num_ext, city, state,postal_code,suburb, country]
        );
        return results;
    }

    async update_address({address_id, client_id, street, num_int, num_ext, city, state,postal_code, suburb, country }) 
    {
        const [results] = await pool.query(
            'CALL sp_update_client_address(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [address_id, client_id, street, num_int, num_ext, city, state,postal_code, suburb, country ]
        );
        return results;
    }

    async delete_address(address_id){
        const [results] = await pool.query('CALL sp_delete_client_address(?)', [address_id]);
        return results;
    }

    async get_addresses_by_client(client_id) {
        const [rows] = await pool.query('CALL sp_get_addresses_by_client(?)', [client_id]);
        return rows[0];
    }

    async get_address_by_id(address_id) {
        const [rows] = await pool.query('CALL sp_get_client_address_by_id(?)', [address_id]);
        return rows[0];
    }
}

export default custAddressService;