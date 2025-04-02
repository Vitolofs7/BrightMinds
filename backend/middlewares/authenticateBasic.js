import bcrypt from "bcrypt";
import models from '../models/index.js';

const { User } = models;

const getErrorDetails = (error) => {
  if (error instanceof Error) {
    return error.message || "Error desconocido";
  }
  return JSON.stringify(error, null, 2) || "Error desconocido";
};

export const authenticateBasic = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Autenticación básica requerida" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [email, password] = decodedCredentials.split(":");

  if (!email || !password) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  try {
    const user = await User.findOne({ where: { email: email.toLowerCase() } });
    if (!user) {
      return res.status(401).json({ message: "Usuario incorrecto" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    req.user = user; // Se agrega el usuario al objeto req
    next();
  } catch (error) {
    console.error("Error en authenticateBasic:", getErrorDetails(error));
    res.status(500).json({ message: "Error al autenticar al usuario", error: getErrorDetails(error) });
  }
};
