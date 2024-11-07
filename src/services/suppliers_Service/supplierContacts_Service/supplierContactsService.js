import { pool } from "../../../config/db";

class suppContactService
{
    async new_contact({supplier_id, contact_name, contact_phone, contact_email, position}){
        const [results] = await pool.query(
            'CALL sp_insert_supplier_contact( ?, ?, ?, ?, ?)', 
            [supplier_id, contact_name, contact_phone, contact_email, position]
        );
        return results;
    }

    async update_contact({contact_id, supplier_id, contact_name, contact_phone, contact_email, position}) 
    {
        const [results] = await pool.query(
            'CALL sp_update_supplier_contact(?, ?, ?, ?, ?, ?)', 
            [contact_id, supplier_id, contact_name, contact_phone, contact_email, position]
        );
        return results;
    }

    async delete_contact(contact_id){
        const [results] = await pool.query('CALL sp_delete_supplier_contact(?)', [contact_id]);
        return results;
    }

    async get_contacts_by_supplier(supplier_id) {
        const [rows] = await pool.query('CALL sp_get_contacts_by_supplier(?)', [supplier_id]);
        return rows[0];
    }

    async get_contact_by_id(contact_id) {
        const [rows] = await pool.query('CALL sp_get_contact_by_id(?)', [contact_id]);
        return rows[0];
    }
}

export default suppContactService;