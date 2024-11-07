import { pool } from "../../config/db";

class measurementUnits_service{

    async insert_new_um({unit_name, abbreviation, measurement_type, conversion_factor, base_unit, is_active}){
        const [results] = await pool.query(
            'CALL sp_insert_measurement_unit( ?, ?, ?, ?, ?, ?)', 
            [unit_name, abbreviation, measurement_type, conversion_factor, base_unit, is_active]
        );
        return results;
    }

    async update_um({unit_id,unit_name, abbreviation, measurement_type, conversion_factor, base_unit, is_active}){
        const [results] = await pool.query(
            'CALL sp_update_measurement_unit(?, ?, ?,  ?, ?, ?, ?)', 
            [unit_id,unit_name, abbreviation, measurement_type, conversion_factor, base_unit, is_active]
        );
        return results;
    }

    async get_measurement_units_by_status({is_active}){
        const [units] = await pool.query( 'CALL sp_get_measurement_units_by_status(?)', [is_active])
        return units[0];
    }
}

export default measurementUnits_service;