import measurementUnitService from "./measurementUnitsService";
const serviceUM = new measurementUnitService();

export const addNewUM = async (req, res) => {
    try {
        const result = await serviceUM.insert_new_um({            
            unit_name: req.body.name,
            abbreviation: req.body.abbreviation,
            measurement_type: req.body.type,
            conversion_factor: req.body.conversion_factor,
            base_unit: req.body.base_unit,          
            is_active: req.body.active
        });
        return result.affectedRows === 0 ? res.status(404).json({ message: 'Ocurrio un error.' }) : res.json({ message: 'Unidad de medida agregada correctamente.' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUM = async (req, res) => {
    try {
        const result = await serviceUM.update_um({
            unit_id: req.params.idUnit,              
            unit_name: req.body.name,
            abbreviation: req.body.abbreviation,
            measurement_type: req.body.type,
            conversion_factor: req.body.conversion_factor,
            base_unit: req.body.base_unit,          
            is_active: req.body.active
        });

        return result.affectedRows === 0 ?res.status(404).json({ message: 'Ocurrio un error al actualizar' }) : res.json({ message: 'Unidad de medida actualizada exitosamente' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUmByState = async (req, res) => {
    try {
        const units = await serviceUM.get_measurement_units_by_status({is_active : req.body.active});
        res.json(units);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};