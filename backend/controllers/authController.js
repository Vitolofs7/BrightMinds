import models from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { User } = models;

export const register = async (req, res) => {
    try {
        console.log("📩 Recibiendo solicitud POST para registrar un usuario");

        const { name, surname1, surname2, role, email, password } = req.body;

        if (!name || !surname1 || !surname2 || !email || !password) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ 
            name, surname1, surname2, role, email, password: hashedPassword 
        });

        console.log(`✅ Usuario registrado: ${newUser.id}`);
        res.status(201).json({ message: "Usuario registrado con éxito", userId: newUser.id });
    } catch (error) {
        console.error("❌ Error al registrar el usuario:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        console.log("🔑 Recibiendo solicitud POST para iniciar sesión");

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // El token expira en 1 hora
        );

        console.log(`✅ Usuario autenticado: ${user.id}`);
        res.json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        console.error("❌ Error al iniciar sesión:", error.message);
        res.status(500).json({ error: error.message });
    }
};
