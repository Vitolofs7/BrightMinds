import models from '../models/index.js';
import bcrypt from 'bcrypt';

const { User } = models;
const SALT_ROUNDS = 10;

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

export const createUser = async (req, res) => {
    try {
        console.log("Recibiendo solicitud POST para crear un usuario");

        const { name, surname1, surname2, role, email, password } = req.body;

        if (!name || !surname1 || !surname2 || !email || !password) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await User.create({ 
            name, 
            surname1, 
            surname2, 
            role, 
            email, 
            password: hashedPassword 
        });

        console.log(`Usuario creado: ${newUser.id}`);
        res.status(201).json({ message: "Usuario creado exitosamente", id: newUser.id });
    } catch (error) {
        console.error("Error al crear el usuario:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        console.log(`Recibiendo solicitud PUT para actualizar el usuario con ID: ${req.params.id}`);

        const { id } = req.params;
        const { name, surname1, surname2, role, email, password } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        let updatedFields = { name, surname1, surname2, role, email };

        if (password) {
            updatedFields.password = await bcrypt.hash(password, SALT_ROUNDS);
        }

        await user.update(updatedFields);

        console.log(`Usuario actualizado: ${user.id}`);
        res.json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        console.log(`Recibiendo solicitud DELETE para eliminar el usuario con ID: ${req.params.id}`);

        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        await user.destroy();

        console.log(`Usuario eliminado: ${id}`);
        res.json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error.message);
        res.status(500).json({ error: error.message });
    }
};
