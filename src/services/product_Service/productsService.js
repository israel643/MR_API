import { pool } from '../../config/db.js';

class ProductService 
{
    async findAll() {
        const [rows] = await pool.query('CALL get_all_products()');
        return rows[0];
    }

    async findById(id) {
        const [rows] = await pool.query('CALL get_Prod_ByID(?)', [id]);
        return rows[0];
    }

    async deleteById(id){
        const [results] = await pool.query('CALL delete_Prod_ByID(?)', [id]);
        return results;
    }

    async deleteByCategory(category){
        const [results] = await pool.query('CALL PENDIENTE(?)', [category]);
        return results;
    }

    async newProduct({ cat_prod, name_prod, desc_prod,marca, sku, precioV, UM_prod, activo, stockMin, stockMax, atributos}) 
    {
        const [results] = await pool.query(
            'CALL sp_newProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [cat_prod, name_prod, desc_prod, marca, sku, precioV, UM_prod, activo, stockMin, stockMax, atributos]
        );
        return results;
    }

    async updateProduct({ id_prod, cat_prod, name_prod, desc_prod, marca_,  sku_, precioV, UM_prod, activo, stockMin, stockMax, atributos}) 
    {
        const [results] = await pool.query(
            'CALL updateProd(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [id_prod, cat_prod, name_prod, desc_prod, marca_, sku_, precioV, UM_prod, activo, stockMin, stockMax, atributos]
        );
        return results;
    }
}

export default ProductService;
