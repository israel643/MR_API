import MovementService from "./movementsService";
const movementService = new MovementService();

export const addMovement = async (req, res) => {
    try {
        const result = await movementService.insertMovement({
            description: req.body.description,
            movementType: req.body.movementType
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al agregar el movimiento.' }) 
            : res.json({ message: 'Movimiento agregado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllMovements = async (req, res) => {
    try {
        const movements = await movementService.getAllMovements();
        res.json(movements);
        console.log("test");
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMovement = async (req, res) => {
    try {
        const result = await movementService.updateMovement({
            movementId: req.params.id,
            description: req.body.description,
            movementType: req.body.movementType
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al actualizar el movimiento.' }) 
            : res.json({ message: 'Movimiento actualizado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMovement = async (req, res) => {
    try {
        const result = await movementService.deleteMovement({
            movementId: req.params.id
        });

        return result.affectedRows === 0 
            ? res.status(404).json({ message: 'Error al eliminar el movimiento.' }) 
            : res.json({ message: 'Movimiento eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
