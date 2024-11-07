import { pool } from '../../config/db.js';

class CategoriesService 
{
    async findAll() {
        const [rows] = await pool.query('CALL sp_get_all_categories()');
        return rows[0];
    }

    async findSubcategories(parent_category_id) {
        const [rows] = await pool.query('CALL sp_get_subcategories(?)', [parent_category_id]);
        return rows[0];
    }

    async deleteById(category_id){
        const [results] = await pool.query('CALL sp_delete_category(?)', [category_id]);
        return results;
    }

    async newCategory({ category_name, description, parent_category_id, active}) 
    {
        const [results] = await pool.query(
            'CALL sp_insert_category( ?, ?, ?, ?)', 
            [category_name, description, parent_category_id, active]
        );
        return results;
    }

    async updateCategory({ idCategory, category_name, description, parent_category_id, active}) 
    {
        const [results] = await pool.query(
            'CALL sp_update_category(?, ?, ?, ?, ?)', 
            [idCategory, category_name, description, parent_category_id, active]
        );
        return results;
    }
}

export default CategoriesService;