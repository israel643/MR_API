import { pool } from "../../../config/db";

class clientsContactService
{
    async new_phone({client_id, contact_name, phone}){
        const [results] = await pool.query(
            'CALL sp_insert_client_phone( ?, ?, ?)', 
            [client_id, contact_name, phone]
        );
        return results;
    }

    async update_contact({phone_id, client_id, contact_name, phone}) 
    {
        const [results] = await pool.query(
            'CALL sp_update_client_phone(?, ?, ?, ?)', 
            [phone_id, client_id, contact_name, phone]
        );
        return results;
    }

    async delete_contact(phone_id){
        const [results] = await pool.query('CALL sp_delete_client_phone(?)', [phone_id]);
        return results;
    }

    async get_phones_by_client(client_id) {
        const [rows] = await pool.query('CALL sp_get_phones_by_client(?)', [client_id]);
        return rows[0];
    }

    async get_phone_by_id(phone_id) {
        const [rows] = await pool.query('CALL sp_get_phone_by_id(?)', [phone_id]);
        return rows[0];
    }
}

export default clientsContactService;