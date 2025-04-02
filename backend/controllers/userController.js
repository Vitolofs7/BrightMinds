import models from '../models/index.js'; 
// import bcrypt from 'bcrypt';

const { User } = models;

export const getUsers = async (req, res) => {
    try {
        console.log("Recibiendo solicitud GET para obtener todos los usuarios");

        const users = await User.findAll({
            attributes: ['id', 'name', 'surname1', 'surname2', 'role', 'email'],
        });

        console.log(`Usuarios encontrados: ${users.length}`);

        res.json(users);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error.message);

        res.status(500).json({ error: error.message });
    }
};
