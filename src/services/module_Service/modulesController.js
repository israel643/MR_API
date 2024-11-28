import modulesService from "./modulesService";
const serviceModules = new modulesService();

export const getModulesToAccess = async (req, res) => {
    try {
        const userName = req.params.user;

        if (!userName) {
            return res.status(400).json({ message: 'Usuario requerido' });
        }

        const modules = await serviceModules.get_access_to_modules({ 
            username: userName 
        });

        if (!modules || modules.length === 0) {
            return res.status(404).json({ message: 'No se encontraron módulos' });
        }

        res.json(modules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};