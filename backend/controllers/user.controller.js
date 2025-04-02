import models from '../models/index.js';
import bcrypt from 'bcrypt';

const { User } = models;
const SALT_ROUNDS = 10;

export const getUsers = async (req, res) => {
    try {
        console.log("Receiving GET request to fetch all users");

        const users = await User.findAll({
            attributes: ['id', 'name', 'surname1', 'surname2', 'role', 'email'],
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

        const { name, surname1, surname2, role, email, password } = req.body;

        if (!name || !surname1 || !surname2 || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
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
        const { name, surname1, surname2, role, email, password } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        let updatedFields = { name, surname1, surname2, role, email };

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
