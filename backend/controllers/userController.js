import models from '../models/index.js';
import bcrypt from 'bcrypt';

const { User } = models;

export const getUsers = async (req, res) => {
    try {
        // Obtener todos los usuarios, excluyendo 'profile_image'
        const users = await User.findAll({
            attributes: ['id', 'name', 'role', 'email'],
        });

        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    const { name, role, email, password } = req.body;

    // Validación de campos requeridos
    if (!email || !password || !name) {
        return res.status(400).json({ error: "Email, password and name are required." });
    }

    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const user = await User.create({
            name,
            role,
            email,
            password: hashedPassword,
        });

        // Responder con éxito
        res.status(201).json({
            id: user.id,
            name: user.name,
            role: user.role,
            email: user.email,
        });
    } catch (error) {
        console.error("Error al crear el usuario:", error.message);
        res.status(500).json({ error: "Error al crear el usuario." });
    }
};

export const updateUser = async (req, res) => {
    const { name, email } = req.body;
    const userId = req.params.id;

    // Verificar que se pasen los campos correctos
    if (!name || !email) {
        return res.status(400).json({
            message: "El nombre y el correo son obligatorios.",
        });
    }

    try {
        // Buscar el usuario por ID
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        // Actualizar los datos
        user.name = name;
        user.email = email;
        await user.save();

        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error.message);
        res.status(500).json({ message: "Error al actualizar el usuario." });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        // Verificar si el usuario existe
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Eliminar el usuario
        await User.destroy({ where: { id } });

        // Confirmar eliminación
        res.status(200).json({ message: `Usuario con ID ${id} eliminado correctamente.` });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error.message);
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id, {
            attributes: ['id', 'name', 'role', 'email'],
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({
            id: user.id,
            name: user.name,
            role: user.role,
            email: user.email,
        });
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: error.message });
    }
};
