import { pool } from "../../config/db";

class paymentMethod_service{

    async insert_payment_method({payment_method_name}){
        const [results] = await pool.query(
            'CALL sp_insert_payment_method( ?)', 
            [payment_method_name]
        );
        return results;
    }

    async delete_payment_method({payment_method_id}){
        const [results] = await pool.query(
            'CALL sp_delete_payment_method(?)', 
            [payment_method_id]
        );
        return results;
    }

    async get_all_payment_methods(){
        const [methods] = await pool.query( 'CALL sp_get_all_payment_methods()')
        return methods[0];
    }
}

export default paymentMethod_service;