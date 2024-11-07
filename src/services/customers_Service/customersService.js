import { pool } from '../../config/db.js';

class customersService 
{
    async get_all_clients() {
        const [rows] = await pool.query('CALL sp_get_all_clients()');
        return rows[0];
    }

    async get_client_by_id(client_id) {
        const [rows] = await pool.query('CALL sp_get_client_by_id(?)', [client_id]);
        return rows[0];
    }

    async delete_client(client_id){
        const [results] = await pool.query('CALL sp_delete_client(?)', [client_id]);
        return results;
    }

    async insert_client({ fiscal_id, name, email, client_type}) 
    {
        const [results] = await pool.query(
            'CALL sp_insert_client( ?, ?, ?, ?)', 
            [fiscal_id, name, email, client_type]
        );
        return results;
    }

    async update_client({client_id, fiscal_id, name, email, client_type}) 
    {
        const [results] = await pool.query(
            'CALL sp_update_client(?, ?, ?, ?, ?)', 
            [client_id, fiscal_id, name, email, client_type]
        );
        return results;
    }
}

export default customersService;