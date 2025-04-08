import models from '../models/index.js';
import bcrypt from 'bcrypt';

const { User, Comment } = models;
const SALT_ROUNDS = 10;

export const getUsers = async (req, res) => {
    try {
        console.log("Receiving GET request to fetch all users");

        const users = await User.findAll({
            attributes: ['id', 'name', 'lastName', 'role', 'email'],
        });

        console.log(`Users found: ${users.length}`);
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        console.log("Receiving POST request to create a user");

        const { name, lastName, role, email, password } = req.body;

        if (!name || lastName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await User.create({
            name,
            lastName,
            role,
            email,
            password: hashedPassword
        });

        console.log(`User created: ${newUser.id}`);
        res.status(201).json({ message: "User successfully created", id: newUser.id });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        console.log(`Receiving PUT request to update user with ID: ${req.params.id}`);

        const { id } = req.params;
        const { name, lastName, role, email, password } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        let updatedFields = { name, lastName, role, email };

        if (password) {
            updatedFields.password = await bcrypt.hash(password, SALT_ROUNDS);
        }

        await user.update(updatedFields);

        console.log(`User updated: ${user.id}`);
        res.json({ message: "User successfully updated" });
    } catch (error) {
        console.error("Error updating user:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        console.log(`Receiving DELETE request to remove user with ID: ${req.params.id}`);

        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.destroy();

        console.log(`User deleted: ${id}`);
        res.json({ message: "User successfully deleted" });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const getUserComments = async (req, res) => {
    try {
        const { userId } = req.params;

        // Buscamos el usuario junto con sus comentarios asociados
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Comment,  // Relación entre User y Comment
                    attributes: ['id', 'videoId', 'content', 'like', 'dislike', 'createdAt', 'updatedAt'],
                },
            ],
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Devolvemos los comentarios asociados al usuario
        res.json({ comments: user.Comments });
    } catch (error) {
        console.error("Error fetching user comments:", error);
        res.status(500).json({ error: "Error fetching user comments" });
    }
};