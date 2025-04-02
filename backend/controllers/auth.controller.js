import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../models/index.js';

const { User } = models;
const SALT_ROUNDS = 10;

export const register = async (req, res) => {
    try {
        console.log("📩 Receiving POST request to register a user");

        const { name, surname1, surname2, role, email, password } = req.body;

        if (!name || !surname1 || !surname2 || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await User.create({ 
            name, surname1, surname2, role, email, password: hashedPassword 
        });

        console.log(`✅ User registered: ${newUser.id}`);
        res.status(201).json({ message: "User successfully registered", userId: newUser.id });
    } catch (error) {
        console.error("❌ Error registering the user:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        console.log("🔑 Receiving POST request to log in");

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Basic ')) {
            return res.status(400).json({ message: 'Credentials not provided in Basic format' });
        }

        const base64Credentials = authHeader.split(' ')[1];
        const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [email, password] = decodedCredentials.split(':');

        if (!email || !password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Incorrect credentials" });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log(`✅ User authenticated: ${user.id}`);
        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("❌ Error logging in:", error.message);
        res.status(500).json({ error: error.message });
    }
};
